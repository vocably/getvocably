import { Auth } from '@aws-amplify/auth';
import { registerServiceWorker } from '@vocably/extension-service-worker';
import { registerExtensionStorage } from '@vocably/pontis';
import './browserEnvPatch'; // Must import first to patch chrome.storage in Firefox
import { browserEnv } from './browserEnv';

// Initialize storage and sync before configuring Auth
(async () => {
  const storage = registerExtensionStorage('local');
  
  // CRITICAL: Sync storage before Auth.configure()
  // This loads existing tokens from browser.storage into memory
  // Without this, Auth falls back to localStorage
  await storage.sync();

  registerServiceWorker({
    auth: {
      region: process.env.AUTH_REGION,
      userPoolId: process.env.AUTH_USER_POOL_ID,
      userPoolWebClientId: process.env.AUTH_USER_POOL_WEB_CLIENT_ID,
      storage,
    },
    api: {
      baseUrl: process.env.API_BASE_URL,
      region: process.env.API_REGION,
      cardsBucket: process.env.API_CARDS_BUCKET,
      getJwtToken: () => {
        return Auth.currentSession().then((session) =>
          session.getIdToken().getJwtToken()
        );
      },
    },
    facility: 'chrome-or-safari',
  });
})();

browserEnv.contextMenus.create({
  id: 'context-menu-item',
  title: 'Translate with Vocably',
  contexts: ['selection'],
});

browserEnv.contextMenus.onClicked.addListener((info, tab) => {
  browserEnv.tabs.sendMessage(tab.id, {
    action: 'contextMenuTranslateClicked',
  });
});

browserEnv.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'install') {
    await browserEnv.tabs.create({
      url: `${process.env.APP_BASE_URL}/page/welcome`,
    });
  }
});

browserEnv.runtime.setUninstallURL('https://app.vocably.pro/page/uninstall');

// @ts-ignore
window.clearStorage = () => {
  browserEnv.storage.local.clear();
};
