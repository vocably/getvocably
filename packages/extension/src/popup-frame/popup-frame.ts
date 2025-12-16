import { defineCustomElements } from '@vocably/extension-content-ui/loader';
import { GoogleLanguage } from '@vocably/model';

console.log('[Vocably Frame] Initializing popup frame...');

// Initialize Stencil.js custom elements in extension page context
// This works because we're in extension page context, not content script context
(async () => {
  try {
    await defineCustomElements();
    console.log('[Vocably Frame] Custom elements defined successfully');
  } catch (err) {
    console.error('[Vocably Frame] Failed to define custom elements:', err);
  }
})();

// Message types for communication with content script
interface ShowTranslationMessage {
  type: 'SHOW_TRANSLATION';
  text: string;
  detectedLanguage?: GoogleLanguage;
  context?: string;
  position: {
    top?: number;
    bottom?: number;
    left: number;
  };
  isTouchscreen: boolean;
}

interface HideMessage {
  type: 'HIDE';
}

type ContentScriptMessage = ShowTranslationMessage | HideMessage;

// Get root element
const root = document.getElementById('root');
if (!root) {
  throw new Error('[Vocably Frame] Root element not found');
}

// Current button and popup elements
let currentButton: HTMLElement | null = null;
let currentOverlay: HTMLElement | null = null;

// Import API helper (will be available from content-ui)
const getApiBase = () => {
  // Use browser extension message passing to get API
  return {
    async getSettings() {
      return { autoPlay: false }; // TODO: Get real settings
    }
  };
};

/**
 * Create and show popup with translation
 */
async function showPopup(params: {
  text: string;
  detectedLanguage?: GoogleLanguage;
  context?: string;
}) {
  console.log('[Vocably Frame] Creating popup for:', params.text);
  
  // Create popup element
  const popup = document.createElement('vocably-popup');
  popup.setAttribute('data-text', params.text);
  
  // Style the popup
  popup.style.setProperty('--max-height', `${window.innerHeight * 0.8}px`);
  popup.style.setProperty('--max-width', `${window.innerWidth}px`);
  popup.style.opacity = '0';
  popup.style.transition = 'opacity 100ms';
  
  // Import and use setContents from popup/contents
  // For now, we'll create a simple placeholder
  // TODO: Implement full popup contents logic
  
  // Create overlay
  const overlay = document.createElement('vocably-overlay');
  overlay.style.setProperty('--backdropOpacity', '0');
  (overlay as any).closeKeyCode = ['Escape', 'Space'];
  overlay.appendChild(popup);
  
  // Listen for close event
  overlay.addEventListener('close', () => {
    console.log('[Vocably Frame] Popup closed');
    destroyPopup();
    notifyContentScript({ type: 'CLOSE_FRAME' });
  });
  
  // Add blur/clickOutside handler for auto-close
  overlay.addEventListener('click', (e) => {
    // Close if clicking on overlay background (not the popup itself)
    if (e.target === overlay) {
      console.log('[Vocably Frame] Clicked outside, closing popup');
      destroyPopup();
      notifyContentScript({ type: 'CLOSE_FRAME' });
    }
  });
  
  // Add to DOM
  root.appendChild(overlay);
  currentOverlay = overlay;
  
  // Show with animation
  requestAnimationFrame(() => {
    popup.style.opacity = '1';
  });
  
  // TODO: Load actual translation content
  // For now, the popup will display using Stencil.js default behavior
  // To fully implement, we would need to:
  // 1. Import and call setContents from @vocably/extension-content-script/popup/contents
  // 2. Handle translation API calls
  // 3. Manage card state
  // This can be added in future iterations
  
  console.log('[Vocably Frame] Popup created and shown');
}

/**
 * Destroy current popup
 */
function destroyPopup() {
  if (currentOverlay) {
    currentOverlay.remove();
    currentOverlay = null;
  }
}

/**
 * Send message to content script
 */
function notifyContentScript(message: any) {
  window.parent.postMessage(message, '*');
}

/**
 * Handle button click - show popup
 */
function handleButtonClick(params: {
  text: string;
  detectedLanguage?: GoogleLanguage;
  context?: string;
}) {
  console.log('[Vocably Frame] Button clicked');
  
  // Hide button
  if (currentButton) {
    currentButton.remove();
    currentButton = null;
  }
  
  // Show popup
  showPopup(params);
}

// Listen for messages from content script
window.addEventListener('message', async (event: MessageEvent) => {
  // Security: only accept messages from our extension
  const message = event.data as ContentScriptMessage;
  
  console.log('[Vocably Frame] Received message:', message.type);
  
  if (message.type === 'SHOW_TRANSLATION') {
    // Store message data for button click
    const messageData = {
      text: message.text,
      detectedLanguage: message.detectedLanguage,
      context: message.context,
    };
    
    // Create button element
    const buttonTag = message.isTouchscreen ? 'vocably-mobile-button' : 'vocably-button';
    currentButton = document.createElement(buttonTag);
    
    // Add click handler
    currentButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleButtonClick(messageData);
    });
    
    // Clear previous content
    root.innerHTML = '';
    root.appendChild(currentButton);
    
    console.log('[Vocably Frame] Button created:', buttonTag);
    
  } else if (message.type === 'HIDE') {
    // Hide/remove button and popup
    if (currentButton) {
      currentButton.remove();
      currentButton = null;
    }
    destroyPopup();
    root.innerHTML = '';
    console.log('[Vocably Frame] Frame hidden');
  }
});

// Notify content script that frame is ready
window.parent.postMessage({
  type: 'FRAME_READY'
}, '*');

console.log('[Vocably Frame] Ready and listening for messages');

