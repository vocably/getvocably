# Chrome Extension 轉換為 Firefox Extension 評估報告

2025/12/15 Aiuanyu/GJRobert x Claude Code Opus 4.5 (@Antigravity)

---

## 實作進度

### Phase 1: 基礎相容性修改 ✅ 完成 (2025/12/16 05:09)

| 任務 | 狀態 | 說明 |
|------|------|------|
| 建立 Firefox Manifest | ✅ | `packages/extension/src/manifest.firefox.json.txt` |
| 統一 service-worker.ts API | ✅ | `chrome.*` → `browserEnv` |
| 統一 extension-stay-alive API | ✅ | `chrome.*` → `browserEnv` |
| 確認 Offscreen fallback | ✅ | 已有完善機制，無需修改 |
| 修改 Webpack 多目標建置 | ✅ | 支援 `TARGET_BROWSER=firefox` |
| 新增建置指令 | ✅ | `npm run build:firefox` |

**Commits:**
- `e6af5bdc` docs: add Firefox extension migration evaluation
- `b75b7ecc` feat(extension): add Firefox extension support (Phase 1)

### 建置測試 ✅ 成功

```bash
# 安裝依賴
npm install

# 建置內部 packages (依序)
npm run build --workspace=@vocably/sulna
npm run build --workspace=@vocably/model
npm run build --workspace=@vocably/webpack
npm run build --workspace=@vocably/extension-messages
npm run build --workspace=@vocably/extension-stay-alive
npm run build --workspace=@vocably/extension-service-worker
npm run build --workspace=@vocably/extension-content-ui
npm run build --workspace=@vocably/extension-content-script
cd packages/extension-popup && npm run build-dev && cd ../..

# 建置 Firefox extension
cd packages/extension && npm run build:firefox
```

**輸出目錄**: `packages/extension/dist-firefox/`

```
dist-firefox/
├── manifest.json       # Firefox 專用 manifest
├── content-script.js   # 909 KB
├── service-worker.js   # 2.04 MB
├── play-audio.js
├── play-audio.html
├── popup/              # Angular popup UI
└── images/             # 擴充套件圖示
```

### Phase 2: External Communication 替代方案 ✅ 完成 (2025/12/16 21:30)

實作 Content Script Bridge 解決 Firefox 不支援 `externally_connectable` 的問題。

**新增/修改檔案**：
- `packages/extension/src/external-bridge.ts` (新增) - Content Script 橋接器
- `packages/extension/src/manifest.firefox.json.txt` - 加入 external-bridge content script
- `packages/extension/webpack.config.js` - 加入 external-bridge entry point
- `packages/app/src/firefox-auth-storage.ts` (新增) - Firefox 專用的 Auth Storage
- `packages/app/src/browser.ts` - 加入 `isFirefox` 檢測
- `packages/app/src/auth-config.ts` - Firefox 使用 `FirefoxAppAuthStorage`
- `packages/app/src/extension.ts` - `canExtensionBeInstalled` 加入 Firefox

### Phase 4: 測試 ⏳ 待進行

在 Firefox 載入測試：
1. 開啟 `about:debugging`
2. 點擊「This Firefox」
3. 點擊「Load Temporary Add-on...」
4. 選擇 `packages/extension/dist-firefox/manifest.json`

---

## 一、Chrome Extension 原始碼位置

本專案的 Chrome Extension 採用模組化架構，分散在多個 packages 中：

### 主要套件

| 套件 | 路徑 | 說明 |
|------|------|------|
| extension | `packages/extension/` | 主要進入點，Webpack 打包設定 |
| extension-popup | `packages/extension-popup/` | Angular 彈出視窗 UI |
| extension-content-script | `packages/extension-content-script/` | Content Script 邏輯 |
| extension-content-ui | `packages/extension-content-ui/` | Stencil Web Components UI |
| extension-service-worker | `packages/extension-service-worker/` | Service Worker 邏輯 |
| extension-messages | `packages/extension-messages/` | 訊息傳遞抽象層 (Hermes) |
| extension-stay-alive | `packages/extension-stay-alive/` | Service Worker 保活機制 |
| extension-angular-components | `packages/extension-angular-components/` | Angular 共用元件 |

### 關鍵檔案

- **Manifest**: `packages/extension/src/manifest.json.txt`
- **Service Worker**: `packages/extension/src/service-worker.ts`
- **Content Script**: `packages/extension/src/content-script.ts`
- **Browser API 抽象**: `packages/extension/src/browserEnv.ts`
- **Webpack 設定**: `packages/extension/webpack.config.js`

---

## 二、可行性評估

### 結論：**可行** ✅

此專案已具備部分跨瀏覽器相容設計，轉換工作量屬於**中等偏低**。

### 有利因素

1. **已有 `browserEnv` 抽象層**
   ```typescript
   // packages/extension/src/browserEnv.ts
   if (typeof chrome !== 'undefined') {
     browserEnv = chrome;
   } else if (typeof browser !== 'undefined') {
     browserEnv = browser;
   }
   ```
   多數 API 呼叫已透過此抽象層，減少直接依賴 Chrome API。

2. **使用 Manifest V3**
   Firefox 已支援 MV3（自 Firefox 109 起），manifest 結構大致相容。

3. **Offscreen API 已有 Fallback**
   ```typescript
   // packages/extension-content-script/src/playAudioPronunciation.ts
   const canPlayOffScreen = await api.canPlayOffScreen();
   if (canPlayOffScreen) {
     return api.playAudioPronunciation(payload);
   }
   // Fallback: 直接在 content script 播放
   ```

4. **模組化架構**
   各功能獨立封裝，方便針對特定模組進行 Firefox 適配。

### 需解決的問題

| 問題 | 嚴重程度 | 說明 |
|------|----------|------|
| `externally_connectable` | 🔴 高 | Firefox 不支援此 manifest 欄位 |
| `offscreen` 權限 | 🟡 中 | Firefox 不支援 Offscreen API |
| 部分程式碼直接使用 `chrome.*` | 🟡 中 | 未經過 `browserEnv` 抽象層 |
| Service Worker 生命週期 | 🟡 中 | Firefox SW 行為略有差異 |
| `chrome.runtime.OnInstalledReason` | 🟢 低 | 需改用字串比對 |

---

## 三、詳細問題分析

### 3.1 `externally_connectable` 不支援

**現況**：
```json
"externally_connectable": {
  "matches": ["https://app.vocably.pro/*"]
}
```

**影響**：無法讓外部網頁（如 app.vocably.pro）直接與擴充套件通訊。

**解決方案**：
- 使用 Content Script 注入目標頁面
- 透過 `window.postMessage` + Content Script 作為中介橋接

### 3.2 `offscreen` API 不支援

**現況**：
```json
"permissions": ["storage", "offscreen", "contextMenus"]
```

**影響**：Offscreen document 用於在背景播放音訊，Firefox 不支援此功能。

**解決方案**：
- 已有 fallback 機制（在 content script 直接播放）
- 移除 `offscreen` 權限，強制使用 fallback 路徑

### 3.3 直接使用 `chrome.*` API

**問題位置**：

1. `packages/extension/src/service-worker.ts`:
   ```typescript
   chrome.runtime.onInstalled.addListener(...)  // Line 39
   chrome.runtime.setUninstallURL(...)          // Line 47
   chrome.storage.sync.clear()                  // Line 51
   ```

2. `packages/extension-stay-alive/src/index.ts`:
   ```typescript
   chrome.runtime.lastError      // Line 22
   chrome.runtime.onInstalled    // Line 40
   chrome.windows.onCreated      // Line 54
   ```

**解決方案**：統一改用 `browserEnv` 抽象層。

### 3.4 `OnInstalledReason` 列舉

**現況**：
```typescript
if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
```

**Firefox 相容寫法**：
```typescript
if (details.reason === 'install') {
```

---

## 四、轉換步驟規劃

### Phase 1: 基礎相容性修改 ✅

#### Step 1.1: 建立 Firefox Manifest ✅
- [x] 複製 `manifest.json.txt` 為 `manifest.firefox.json.txt`
- [x] 移除 `externally_connectable` 欄位
- [x] 移除 `offscreen` 權限
- [x] 新增 Firefox 特有欄位：
  ```json
  "browser_specific_settings": {
    "gecko": {
      "id": "{{ process.env.FIREFOX_EXTENSION_ID }}",
      "strict_min_version": "109.0"
    }
  }
  ```

#### Step 1.2: 統一 Browser API 抽象 ✅
- [x] 修改 `packages/extension/src/service-worker.ts`
  - 將 `chrome.runtime.onInstalled` 改為 `browserEnv.runtime.onInstalled`
  - 將 `chrome.runtime.setUninstallURL` 改為 `browserEnv.runtime.setUninstallURL`
  - 將 `chrome.storage.sync` 改為 `browserEnv.storage.sync`
  - 將 `chrome.runtime.OnInstalledReason.INSTALL` 改為字串 `'install'`

- [x] 修改 `packages/extension-stay-alive/src/index.ts`
  - 將所有 `chrome.*` 呼叫改為 `browserEnv`

#### Step 1.3: Offscreen API 適配 ✅
- [x] 確認 `hasOffscreen` 檢查已正確實作（檢查 `browserEnv['offscreen']` 是否存在）
- [x] 確認 `canPlayOffScreen` 邏輯在 Firefox 正確運作（Firefox 會回傳 `false`，自動使用 fallback）

### Phase 2: External Communication 替代方案

#### Step 2.1: 建立 Content Script Bridge
- [ ] 新增 `packages/extension/src/external-bridge.ts`
- [ ] 實作 `window.postMessage` 監聽
- [ ] 建立安全的訊息驗證機制（檢查 origin）

#### Step 2.2: 更新目標網頁
- [ ] 修改 app.vocably.pro 與擴充套件的通訊方式
- [ ] 使用 `postMessage` 取代 `chrome.runtime.sendMessage`

### Phase 3: 建置流程調整 ✅

#### Step 3.1: 修改 Webpack 設定 ✅
- [x] 新增 Firefox 建置目標
- [x] 建立環境變數切換機制 (`TARGET_BROWSER=firefox`)
- [x] 新增 `dist-firefox/` 到 `.gitignore`

```javascript
// webpack.config.js (已實作)
const targetBrowser = process.env.TARGET_BROWSER || 'chrome';
const isFirefox = targetBrowser === 'firefox';
const manifestFile = isFirefox ? 'manifest.firefox.json.txt' : 'manifest.json.txt';
const outputDir = isFirefox ? 'dist-firefox' : 'dist';
```

#### Step 3.2: 新增建置指令 ✅
- [x] 在 `package.json` 新增：
  ```json
  {
    "scripts": {
      "build:firefox": "TARGET_BROWSER=firefox webpack --env production",
      "start:firefox": "TARGET_BROWSER=firefox webpack --watch --env development"
    }
  }
  ```

### Phase 4: 測試與發布

#### Step 4.1: 功能測試
- [ ] Content Script 注入測試
- [ ] Service Worker 生命週期測試
- [ ] 音訊播放功能測試（使用 fallback）
- [ ] 右鍵選單功能測試
- [ ] 彈出視窗功能測試
- [ ] 與 app.vocably.pro 通訊測試（如適用）

#### Step 4.2: 相容性測試
- [ ] Firefox 109+ 測試
- [ ] Firefox ESR 測試
- [ ] Firefox Android 測試（如需要）

#### Step 4.3: 發布準備
- [ ] 準備 Firefox Add-ons 商店資料
- [ ] 截圖與描述文案
- [ ] 隱私權政策確認
- [ ] 提交審核

---

## 五、預估工作量

| 階段 | 預估複雜度 | 主要任務 |
|------|-----------|----------|
| Phase 1 | 低 | Manifest 修改、API 抽象統一 |
| Phase 2 | 中 | External communication 替代方案 |
| Phase 3 | 低 | 建置流程調整 |
| Phase 4 | 中 | 完整測試 |

---

## 六、替代方案：使用 WebExtension Polyfill

可考慮使用 Mozilla 的 [webextension-polyfill](https://github.com/AntonyDalmiere/webextension-polyfill) 簡化跨瀏覽器開發：

```bash
npm install webextension-polyfill
```

```typescript
import browser from 'webextension-polyfill';
// 統一使用 browser.* API，自動相容 Chrome 和 Firefox
```

**優點**：
- Promise-based API（Chrome 原本是 callback-based）
- 自動處理大部分跨瀏覽器差異

**缺點**：
- 新增依賴
- 需要重構現有 `browserEnv` 抽象

---

## 七、結論

本專案轉換為 Firefox Extension 是**可行且工作量可控**的。主要工作集中在：

1. **Manifest 調整** - 移除 Firefox 不支援的欄位
2. **統一 API 呼叫** - 將遺漏的 `chrome.*` 改為抽象層
3. **External Communication 替代** - 若需要 `externally_connectable` 功能

建議優先完成 Phase 1，即可產出可運作的 Firefox 版本，再根據實際需求決定是否實作 Phase 2。

## Debugging

### 1. 載入暫時附加元件錯誤
```
安裝暫用附加元件時發生錯誤。
錯誤詳細資訊

Extension is invalid

Reading manifest: Error processing browser_specific_settings.gecko.id: Value "{{ process.env.FIREFOX_EXTENSION_ID }}" must either: match the pattern /^\{[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\}$/i, or match the pattern /^[a-z0-9-._]*@[a-z0-9-._]+$/i
```

**原因**：`FIREFOX_EXTENSION_ID` 環境變數未設定，模板字串未被替換。

**解決**：將 `manifest.firefox.json.txt` 中的 `gecko.id` 改為固定值：
```json
"browser_specific_settings": {
  "gecko": {
    "id": "vocably-extension@vocably.pro",
    "strict_min_version": "109.0"
  }
}
```

Firefox extension ID 必須符合以下格式之一：
- UUID: `{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`
- Email-like: `name@domain`

### 2. background.service_worker is currently disabled

**原因**：Firefox MV3 使用 `background.scripts` 而非 Chrome 的 `background.service_worker`。

**解決**：修改 `manifest.firefox.json.txt`：
```json
// Chrome (manifest.json.txt)
"background": {
  "service_worker": "service-worker.js"
}

// Firefox (manifest.firefox.json.txt)
"background": {
  "scripts": ["service-worker.js"]
}
```

### 3. content_scripts.0.exclude_matches

> Extension is invalid
>
> Reading manifest: Error processing content_scripts.0.exclude_matches: Array requires at least 1 items; you have 0

**原因**：`CONTENT_SCRIPT_EXCLUDED_MATCHES` 環境變數未設定，產生空陣列 `[]`。Firefox 不允許空的 `exclude_matches`。

**解決**：從 Firefox manifest 移除 `exclude_matches` 欄位：
```json
"content_scripts": [
  {
    "matches": ["*://*/*"],
    "js": ["content-script.js", "play-audio.js"],
    "all_frames": true
  }
]
```

### 4. 登入導到開發頁面
<sup>20251216 8:00</sup> 來測試 Claude 做好的初版！
1. 工具列按鈕可以用！
2. 可以導到登入頁面！
3. 登入卻是空頁面 → https://app.dev.env.vocably.pro/welcome 是因為這是開發版嗎？而且，工具列按鈕也沒有變成已登入的狀態

**原因**：Popup 使用 `npm run build-dev` 建置，導致環境變數指向開發環境 (`app.dev.env.vocably.pro`)。

查看 `packages/extension-popup/package.json` 中的建置指令：
```json
"build-dev": "ng build --configuration development",
"build-prod": "ng build --configuration production"
```

開發環境的設定檔 (`packages/extension-popup/src/environments/environmentLocal.ts`) 使用：
```typescript
appBaseUrl: 'https://app.dev.env.vocably.pro'
```

**解決**：使用 production 建置指令重新編譯 popup：
```bash
cd packages/extension-popup && npm run build-prod && cd ../..
cd packages/extension && npm run build:firefox
```

這樣 popup 會使用 `environment.prod.ts` 中正確的 production URL (`https://app.vocably.pro`)。

### 5. 順利導到 production 頁面登入，但工具列按鈕沒有變成已登入的狀態

**原因**：

**可能原因**：

Chrome 與 Firefox 的 `storage.sync` 和 background script 行為差異：

1. **Background Script 類型差異**：
   - Chrome MV3: 使用 `service_worker`，每次啟動都是全新的執行環境
   - Firefox: 使用 `background.scripts`，可能保持較長的生命週期
   
2. **Storage.sync API 差異**：
   - Firefox 的 `browser.storage.sync` 需要額外權限或配置
   - Chrome 的 `chrome.storage.sync` 會自動與 Google 帳號同步
   - Firefox 可能需要 Firefox Account 登入或使用 `storage.local` 替代

3. **AWS Amplify Auth 狀態儲存問題**：
   - `registerExtensionStorage('sync')` 使用 `storage.sync` 儲存 AWS Cognito tokens
   - Firefox 的 `storage.sync` 可能無法正確寫入或讀取 auth tokens
   - Auth session 無法正確恢復，導致 `Auth.currentSession()` 失敗

4. **`isLoggedIn$` Observable 輪詢機制**：
   ```typescript
   export const isLoggedIn$: Observable<boolean> = timer(0, 2000).pipe(
     switchMap(async () => {
       return await Auth.currentSession()
         .then(() => true)
         .catch(() => false);
     }),
     distinctUntilChanged()
   );
   ```
   每 2 秒檢查一次登入狀態，但如果 storage 無法正確讀取，會一直回傳 `false`。

**調查步驟**：

1. 開啟 Firefox DevTools → Storage → Extension Storage，檢查是否有 AWS Cognito 相關的 keys
2. 查看 service-worker console 是否有錯誤訊息
3. 測試 `browser.storage.sync` vs `browser.storage.local` 的讀寫

**建議解決方案**：

#### 方案 A：改用 `storage.local`（推薦）

修改 `packages/extension/src/service-worker.ts`：

```typescript
// 將 'sync' 改為 'local'
const storage = registerExtensionStorage('local');
```

Firefox 的 `storage.local` 更穩定，且不需要額外的同步帳號配置。

#### 方案 B：確保 Firefox 支援 `storage.sync`

在 `manifest.firefox.json.txt` 中確認 `storage` 權限已正確設定：

```json
"permissions": [
  "storage",
  "contextMenus"
]
```

並在 Firefox 中測試 storage.sync 是否可用：

```javascript
// 在 service-worker console 測試
await browser.storage.sync.set({ test: 'value' });
const result = await browser.storage.sync.get('test');
console.log(result); // 應該顯示 { test: 'value' }
```

#### 方案 C：建立 Firefox 專用的 storage 配置

建立條件判斷，根據瀏覽器選擇 storage 類型：

```typescript
const isFirefox = typeof browser !== 'undefined' && typeof chrome === 'undefined';
const storage = registerExtensionStorage(isFirefox ? 'local' : 'sync');
```

**驗證方法**：

登入後，在 service-worker console 執行：
```javascript
Auth.currentSession()
  .then(session => console.log('✅ Logged in:', session))
  .catch(err => console.error('❌ Not logged in:', err));
```

**✅ 已實作方案 A** <sup>20251216 8:26</sup>

修改檔案：
- `packages/extension/src/service-worker.ts` (Line 5, 51)
  - 將 `registerExtensionStorage('sync')` 改為 `registerExtensionStorage('local')`
  - 更新 `clearStorage()` debug 函數使用 `storage.local.clear()`

建置指令：
```bash
npm run build --workspace=@vocably/extension-service-worker
cd packages/extension && npm run build:firefox
```

建置輸出：`packages/extension/dist-firefox/` (2.04 MB service-worker.js)

**測試步驟**：

1. **移除舊的暫時附加元件**：
   - 開啟 `about:debugging#/runtime/this-firefox`
   - 移除舊版 Vocably extension

2. **載入新版本**：
   - 點擊「Load Temporary Add-on...」
   - 選擇 `packages/extension/dist-firefox/manifest.json`

3. **測試登入流程**：
   - 點擊工具列的 Vocably 按鈕
   - 執行登入
   - 登入成功後，**不要關閉 Firefox**
   - 檢查工具列按鈕是否顯示已登入狀態

4. **測試持久化**：
   - 關閉所有 Firefox 視窗
   - 重新開啟 Firefox
   - 點擊工具列按鈕，應該**仍保持登入狀態**

5. **Debug 驗證**：
   - 開啟 `about:debugging#/runtime/this-firefox`
   - 點擊 Vocably → 「Inspect」
   - 在 console 執行：
     ```javascript
     // 檢查 storage
     browser.storage.local.get().then(console.log);
     
     // 檢查登入狀態
     Auth.currentSession()
       .then(session => console.log('✅ Logged in:', session))
       .catch(err => console.error('❌ Not logged in:', err));
     ```

- ✅ 登入後工具列按鈕立即更新狀態
- ✅ 重啟 Firefox 後登入狀態保持
- ✅ Storage 中可見 AWS Cognito tokens (以 `CognitoIdentityServiceProvider` 開頭的 keys)

---

**❌ 方案 A 測試結果：無效** <sup>20251216 12:38</sup>

用戶回報重新載入和移除重裝都無法解決問題。

**根本原因調查**：

檢查 `@vocably/pontis` (v1.0.1) 的實作發現：

```javascript
// node_modules/@vocably/pontis/dist/esm/register-extension-storage.js:13
export const registerExtensionStorage = (storageType) => {
    const extensionStorage = chrome.storage[storageType];  // ← 問題在這裡！
    // ...
}
```

**真正的問題**：
1. `@vocably/pontis` 是外部 npm 套件，使用 `chrome.storage` 而非 `browserEnv`
2. 即使我們改 `service-worker.ts` 的 source code，編譯後仍使用 node_modules 中的舊程式碼
3. Firefox 中 `chrome.storage` 可能未正確初始化或與 `browser.storage` 行為不同

**✅ 方案 A 修正版：加入 Storage API Patch** <sup>20251216 12:40</sup>

新增檔案：
- `packages/extension/src/browserEnvPatch.ts`
  - 在 Firefox 中將 `chrome.storage` alias 到 `browser.storage`
  - 確保 `@vocably/pontis` 可以正確存取 storage API

修改檔案：
- `packages/extension/src/service-worker.ts`
  - 在最頂端加入 `import './browserEnvPatch';`
  - 必須在 `registerExtensionStorage` 之前載入

```typescript
// browserEnvPatch.ts
import { browserEnv } from './browserEnv';

if (typeof browser !== 'undefined' && typeof chrome !== 'undefined') {
  // Firefox has both 'browser' and 'chrome' namespaces
  // Ensure chrome.storage points to browser.storage
  if (!chrome.storage || !chrome.storage.local) {
    // @ts-ignore
    chrome.storage = browser.storage;
  }
}

export { browserEnv };
```

建置指令：
```bash
cd packages/extension && npm run build:firefox
```

**新的測試步驟**：

1. **開啟 service-worker console 檢查**：
   - `about:debugging#/runtime/this-firefox`
   - 找到 Vocably 擴充元件卡片
   - 點擊「Inspect」按鈕（會開啟 DevTools）
   - 在 console 執行：
     ```javascript
     // 檢查 chrome.storage 是否存在
     console.log('chrome.storage:', chrome.storage);
     console.log('browser.storage:', browser.storage);
     
     // 測試寫入
     await browser.storage.local.set({ test: 'hello' });
     const result = await browser.storage.local.get('test');
     console.log('Storage test:', result);
     ```

2. **重新載入擴充元件**：
   - 在 `about:debugging` 點擊「Reload」

3. **測試登入並檢查 storage**：
   - 執行登入
   - 在 service-worker console 執行：
     ```javascript
     // 查看所有 storage keys
     browser.storage.local.get().then(data => {
       console.log('All storage keys:', Object.keys(data));
       console.log('Auth keys:', Object.keys(data).filter(k => k.includes('Auth')));
     });
     ```

4. **驗證登入狀態**：
   ```javascript
   Auth.currentSession()
     .then(session => console.log('✅ Session:', session))
     .catch(err => console.error('❌ Error:', err));
   ```

- `chrome.storage` 和 `browser.storage` 應該指向同一個物件
- Storage 測試應成功寫入和讀取
- 登入後應看到多個 `@Auth_CognitoIdentityServiceProvider.` 開頭的 keys
- `Auth.currentSession()` 應成功回傳 session 物件

---

**✅ 真正的修正：加入 storage.sync() 初始化** <sup>20251216 15:45</sup>

**根本原因分析**：

用戶回報登入成功（Welcome 頁面有 tokens），但 extension storage 完全沒有 tokens！

檢查發現：
1. ✅ Tokens 存在 web page 的 localStorage
2. ❌ Extension storage 完全是空的
3. 原因：`ExtensionAuthStorage` 使用 in-memory cache (`dataMemory`)
4. `getItem()` 只從記憶體讀取，**不查 browser.storage**
5. 沒有呼叫 `sync()` → `dataMemory` 是空的 `{}`
6. AWS Amplify Auth 讀不到 tokens → fallback 到 localStorage

```javascript
// ExtensionAuthStorage 的問題
getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key)
        ? dataMemory[key]
        : undefined;  // ← 如果 dataMemory 是空的，永遠返回 undefined
}
```

**解決方案**：

在 `Auth.configure()` **之前**呼叫 `storage.sync()` 載入已存在的 tokens。

修改檔案：
- `packages/extension/src/service-worker.ts`
  - 將整個初始化包在 async IIFE 中
  - 在 `registerServiceWorker()` 之前呼叫 `await storage.sync()`

```typescript
// Initialize storage and sync before configuring Auth
(async () => {
  const storage = registerExtensionStorage('local');
  
  // CRITICAL: Sync storage before Auth.configure()
  // This loads existing tokens from browser.storage into memory
  // Without this, Auth falls back to localStorage
  await storage.sync();

  registerServiceWorker({
    auth: {
      // ... 配置
      storage,
    },
    // ...
  });
})();
```

建置指令：
```bash
cd packages/extension && npm run build:firefox
```

**測試步驟**：

1. **重新載入擴充元件**：
   - `about:debugging` → 點擊「Reload」

2. **執行登入**：
   - 點擊工具列按鈕 → 登入

3. **檢查 extension storage**：
   - 開啟 service-worker console (Inspect)
   - 執行：
     ```javascript
     browser.storage.local.get().then(data => {
       const authKeys = Object.keys(data).filter(k => k.includes('Auth'));
       console.log('Auth keys in extension storage:', authKeys);
       console.log('Auth keys count:', authKeys.length);
     });
     ```

4. **觀察工具列按鈕**：
   - 應該在登入後立即變成已登入狀態
   - 重啟 Firefox 後應保持登入狀態

- ✅ Extension storage 中有多個 `@Auth_CognitoIdentityServiceProvider.` keys
- ✅ 工具列按鈕正確顯示登入狀態
- ✅ 重啟 Firefox 後登入狀態保持（因為 tokens 現在存在 extension storage）

---

**❌ 新錯誤：setting getter-only property "window"** <sup>20251216 15:59</sup>

用戶回報登入後仍然 Auth keys = 0，console 顯示錯誤：
```
Uncaught TypeError: setting getter-only property "window"
    fixAuth.js:4
```

**原因**：
`fixAuth.ts` 試圖設定 `self.window` 為 AWS Amplify Auth 提供 `crypto` 物件，但 Firefox 的 `self.window` 是 getter-only property，無法被覆寫。

**✅ 修正：Firefox 相容性檢查** <sup>20251216 16:05</sup>

修改檔案：
- `packages/extension-service-worker/src/fixAuth.ts`
  - 加入條件判斷：只在 `self.window` 是 undefined 時才設定
  - Firefox 中 `self.window` 已存在，跳過設定

```typescript
// Before (Chrome only)
self.window = {
  crypto: crypto,
};

// After (Chrome + Firefox compatible)
if (typeof self.window === 'undefined') {
  try {
    self.window = {
      crypto: crypto,
    };
  } catch (e) {
    console.log('Cannot set self.window (Firefox):', (e as Error).message);
  }
}
```

建置指令：
```bash
npm run build --workspace=@vocably/extension-service-worker
cd packages/extension && npm run build:firefox
```

**測試步驟**：

1. **重新載入擴充元件** (Reload)

2. **檢查 console**：
   - 應該**不會**再有 "setting getter-only property" 錯誤

3. **執行登入**

4. **檢查 Auth keys**：
   ```javascript
   browser.storage.local.get().then(data => {
     const authKeys = Object.keys(data).filter(k => k.includes('Auth'));
     console.log('Auth keys:', authKeys.length);
     if (authKeys.length > 0) {
       console.log('✅ SUCCESS! Tokens stored in extension storage');
     } else {
       console.log('❌ FAILED: Still no tokens');
     }
   });
   ```

**預期結果**：
- ❌ 沒有 fixAuth 錯誤
- ✅ Auth keys > 0
- ✅ 工具列按鈕顯示已登入

### 結果
還是不行

```
Promise { <state>: "pending" }

Auth keys: 0
```

---

### 🔴 根本原因分析 (Claude Opus 4.5) <sup>20251216 21:00</sup>

經過深入調查，這是一個**架構層級的問題**，不是簡單的 API 差異。

#### 問題的本質

**Chrome 的登入流程**：
```
1. Popup → 開啟 app.vocably.pro/page/welcome
2. 用戶在網頁上完成 OAuth 登入
3. 網頁透過 chrome.runtime.sendMessage(extensionId, ...) 把 tokens 傳給 extension
4. Extension 的 onMessageExternal listener 接收 tokens 並存入 chrome.storage
5. Auth.currentSession() 從 extension storage 讀取 tokens → 登入成功
```

**Firefox 的問題**：
```
1. Popup → 開啟 app.vocably.pro/page/welcome
2. 用戶在網頁上完成 OAuth 登入
3. 網頁嘗試呼叫 chrome.runtime.sendMessage(extensionId, ...) → ❌ 失敗！
   - Firefox 不支援 externally_connectable
   - Firefox 不支援 onMessageExternal
4. Tokens 只存在網頁的 localStorage，永遠無法傳到 extension storage
5. Auth.currentSession() 找不到 tokens → 登入失敗
```

#### 技術細節

1. **`@vocably/pontis` 的 `AppAuthStorage`** (用於網頁端)：
   ```javascript
   // packages/app 使用這個 storage
   setItem(key, value) {
     this.localStorage.setItem(key, value);
     // 這行在 Firefox 永遠失敗（靜默失敗）：
     setItem(this.extensionId, { key, value }).catch(() => { });
   }
   ```

2. **`@vocably/hermes` 的 `createExternalMessage`**：
   ```javascript
   // 使用 onMessageExternal - Firefox 不支援！
   browserEnv.runtime.onMessageExternal.addListener(...)
   ```

3. **Chrome manifest 中的 `externally_connectable`**：
   ```json
   "externally_connectable": {
     "matches": ["https://app.vocably.pro/*"]
   }
   ```
   Firefox 會忽略此設定。

#### 結論

**這不是 bug，而是 Firefox 缺少 Chrome 的 `externally_connectable` 功能。**

要在 Firefox 實現相同的登入流程，必須實作 **Phase 2: Content Script Bridge**。

---

## Phase 2: Content Script Bridge 實作方案

### 方案概述

由於 Firefox 不支援 `externally_connectable`，需要透過 Content Script 作為網頁與 Extension 之間的橋樑：

```
網頁 (app.vocably.pro)
    ↓ window.postMessage
Content Script (注入到 app.vocably.pro)
    ↓ browser.runtime.sendMessage
Service Worker
    ↓ 儲存 tokens
browser.storage.local
```

### 實作步驟

#### Step 2.1: 建立 Content Script Bridge

新增檔案 `packages/extension/src/external-bridge.ts`：

```typescript
/**
 * Content Script Bridge for Firefox
 *
 * Bridges communication between app.vocably.pro and the extension
 * since Firefox doesn't support externally_connectable.
 */

import { browserEnv } from './browserEnv';

const ALLOWED_ORIGINS = [
  'https://app.vocably.pro',
  'https://app.dev.env.vocably.pro' // for development
];

// Listen for messages from the web page
window.addEventListener('message', async (event) => {
  // Security: Only accept messages from allowed origins
  if (!ALLOWED_ORIGINS.includes(event.origin)) {
    return;
  }

  // Check if this is a message for the extension
  const data = event.data;
  if (!data || data.target !== 'vocably-extension') {
    return;
  }

  try {
    // Forward the message to the service worker
    const response = await browserEnv.runtime.sendMessage({
      identifier: data.identifier,
      data: data.payload
    });

    // Send the response back to the web page
    window.postMessage({
      target: 'vocably-extension-response',
      requestId: data.requestId,
      response
    }, event.origin);
  } catch (error) {
    window.postMessage({
      target: 'vocably-extension-response',
      requestId: data.requestId,
      error: error.message
    }, event.origin);
  }
});

// Notify the page that the extension bridge is ready
window.postMessage({
  target: 'vocably-extension-ready'
}, window.location.origin);
```

#### Step 2.2: 更新 Firefox Manifest

修改 `packages/extension/src/manifest.firefox.json.txt`：

```json
"content_scripts": [
  {
    "matches": ["*://*/*"],
    "js": ["content-script.js", "play-audio.js"],
    "all_frames": true
  },
  {
    "matches": [
      "https://app.vocably.pro/*",
      "https://app.dev.env.vocably.pro/*"
    ],
    "js": ["external-bridge.js"],
    "run_at": "document_start"
  }
]
```

#### Step 2.3: 更新 Webpack 設定

在 `packages/extension/webpack.config.js` 新增 entry point：

```javascript
entry: {
  'content-script': './src/content-script.ts',
  'service-worker': './src/service-worker.ts',
  'play-audio': './src/play-audio.ts',
  'external-bridge': './src/external-bridge.ts', // 新增
},
```

#### Step 2.4: 修改 `@vocably/pontis` 或建立 Wrapper

有兩個選項：

**選項 A: Fork `@vocably/pontis`**
修改 `AppAuthStorage` 和 `@vocably/hermes` 支援 `postMessage` 方式。

**選項 B: 建立 Firefox-specific wrapper**（推薦）
在 `packages/app` 建立 Firefox 相容的 storage wrapper：

```typescript
// packages/app/src/firefox-auth-storage.ts
export class FirefoxAppAuthStorage {
  private localStorage = window.localStorage;

  private sendToExtension(identifier: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const requestId = Math.random().toString(36);

      const handler = (event: MessageEvent) => {
        if (event.data?.target !== 'vocably-extension-response') return;
        if (event.data?.requestId !== requestId) return;

        window.removeEventListener('message', handler);

        if (event.data.error) {
          reject(new Error(event.data.error));
        } else {
          resolve(event.data.response);
        }
      };

      window.addEventListener('message', handler);

      window.postMessage({
        target: 'vocably-extension',
        identifier,
        payload: data,
        requestId
      }, window.location.origin);

      // Timeout after 5 seconds
      setTimeout(() => {
        window.removeEventListener('message', handler);
        reject(new Error('Extension communication timeout'));
      }, 5000);
    });
  }

  setItem(key: string, value: string) {
    this.localStorage.setItem(key, value);
    this.sendToExtension('authStorage.setItem', { key, value }).catch(() => {});
  }

  getItem(key: string) {
    return this.localStorage.getItem(key);
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
    this.sendToExtension('authStorage.removeItem', key).catch(() => {});
  }

  clear() {
    this.localStorage.clear();
    this.sendToExtension('authStorage.clear', undefined).catch(() => {});
  }

  sync() {
    return this.sendToExtension('authStorage.getAll', undefined)
      .then((data: Record<string, string>) => {
        Object.entries(data).forEach(([key, value]) => {
          this.localStorage.setItem(key, value);
        });
      })
      .catch(() => {});
  }
}
```

#### Step 2.5: 在 app 偵測 Firefox 並使用正確的 Storage

修改 `packages/app/src/auth-config.ts`：

```typescript
import { AppAuthStorage } from '@vocably/pontis';
import { FirefoxAppAuthStorage } from './firefox-auth-storage';

const isFirefox = navigator.userAgent.includes('Firefox');

const storage = isFirefox
  ? new FirefoxAppAuthStorage()
  : new AppAuthStorage(extensionId);

export const authConfig = {
  storage,
  // ...
};
```

### 預估工作量

| 任務 | 複雜度 | 說明 |
|------|--------|------|
| 建立 external-bridge.ts | 低 | 約 50 行程式碼 |
| 更新 Firefox manifest | 低 | 新增 content_scripts entry |
| 更新 Webpack | 低 | 新增 entry point |
| 建立 FirefoxAppAuthStorage | 中 | 約 80 行程式碼 |
| 修改 app auth-config | 低 | 條件判斷 |
| 測試與 debug | 中 | 需要完整測試登入流程 |

### 替代方案

#### 方案 B: Firefox Identity API

使用 `browser.identity.launchWebAuthFlow()` 讓 extension 直接處理 OAuth 流程，不需要透過網頁。

優點：
- 不需要 content script bridge
- 登入流程完全在 extension 內部

缺點：
- 需要大幅修改登入 UI
- 需要處理 OAuth redirect URI 設定

#### 方案 C: 暫時不支援 Firefox 登入持久化

用戶每次開啟 Firefox 都需要重新登入，但核心翻譯功能可用。

這是**不推薦**的方案，因為使用體驗太差。