import type { ContentScriptToFrameMessage, FrameToContentScriptMessage } from './message-types';

// Use browser API directly to avoid package dependency issues
declare const browser: any;
const browserEnv = typeof browser !== 'undefined' ? browser : (chrome || {});

/**
 * Manages the popup frame lifecycle and communication
 */
class IframeManager {
  private iframe: HTMLIFrameElement | null = null;
  private frameReady = false;
  private messageQueue: ContentScriptToFrameMessage[] = [];

  constructor() {
    // Listen for messages from iframe
    window.addEventListener('message', this.handleFrameMessage.bind(this));
  }

  /**
   * Create and inject iframe into page
   */
  async createFrame(): Promise<void> {
    if (this.iframe) {
      console.log('[IframeManager] Frame already exists');
      return;
    }

    console.log('[IframeManager] Creating iframe...');

    // Get extension URL for popup-frame.html
    const frameUrl = browserEnv.runtime.getURL('popup-frame.html');

    // Create iframe
    this.iframe = document.createElement('iframe');
    this.iframe.id = 'vocably-popup-frame';
    this.iframe.src = frameUrl;
    
    // Style iframe - use absolute positioning so it scrolls with page
    this.iframe.style.position = 'absolute';  // Changed from 'fixed'
    this.iframe.style.border = 'none';
    this.iframe.style.zIndex = '2147483647'; // Maximum z-index
    this.iframe.style.background = 'transparent';
    this.iframe.style.pointerEvents = 'auto';
    
    // Initially hidden and positioned off-screen
    this.iframe.style.display = 'none';
    this.iframe.style.top = '0';
    this.iframe.style.left = '0';
    this.iframe.style.width = '0';
    this.iframe.style.height = '0';

    // Append to body
    document.body.appendChild(this.iframe);

    console.log('[IframeManager] Frame created and injected');
  }

  /**
   * Send message to iframe
   */
  sendToFrame(message: ContentScriptToFrameMessage): void {
    if (!this.iframe?.contentWindow) {
      console.warn('[IframeManager] Cannot send message, iframe not ready');
      return;
    }

    if (!this.frameReady) {
      console.log('[IframeManager] Frame not ready, queueing message');
      this.messageQueue.push(message);
      return;
    }

    console.log('[IframeManager] Sending message to frame:', message.type);
    this.iframe.contentWindow.postMessage(message, '*');
  }

  /**
   * Show translation at specified position
   */
  showTranslation(params: {
    text: string;
    detectedLanguage?: string;
    context?: string;
    position: { top?: number; bottom?: number; left: number };
    isTouchscreen: boolean;
  }): void {
    if (!this.iframe) {
      console.error('[IframeManager] Cannot show translation, frame not created');
      return;
    }

    // Make iframe visible
    this.iframe.style.display = 'block';
    
    // For button display, use smaller size
    // Button is typically small (~40-50px), popup will resize when shown
    const buttonWidth = params.isTouchscreen ? 60 : 50;
    const buttonHeight = params.isTouchscreen ? 60 : 50;
    
    this.iframe.style.width = `${buttonWidth}px`;
    this.iframe.style.height = `${buttonHeight}px`;
    
    // Position directly at selection point
    // Don't adjust too much - button should be right at cursor/selection
    let left = params.position.left;
    let top: number;
    
    // Simple boundary check
    if (left + buttonWidth > window.innerWidth) {
      left = window.innerWidth - buttonWidth - 10;
    }
    left = Math.max(10, left);
    
    // Position vertically based on message
    if (params.position.top !== undefined) {
      top = params.position.top;
    } else if (params.position.bottom !== undefined) {
      top = params.position.bottom - buttonHeight;
    } else {
      top = window.scrollY + window.innerHeight / 2;
    }
    
    // Ensure top is within reasonable bounds
    top = Math.max(window.scrollY + 10, Math.min(top, window.scrollY + window.innerHeight - buttonHeight - 10));
    
    this.iframe.style.left = `${left}px`;
    this.iframe.style.top = `${top}px`;

    // Send message to frame
    this.sendToFrame({
      type: 'SHOW_TRANSLATION',
      ...params,
    });

    console.log('[IframeManager] Translation shown at', { left, top }, 'size:', { buttonWidth, buttonHeight });
  }

  /**
   * Hide frame
   */
  hide(): void {
    if (this.iframe) {
      this.iframe.style.display = 'none';
      this.sendToFrame({ type: 'HIDE' });
      console.log('[IframeManager] Frame hidden');
    }
  }

  /**
   * Destroy frame completely
   */
  destroy(): void {
    if (this.iframe) {
      this.iframe.remove();
      this.iframe = null;
      this.frameReady = false;
      this.messageQueue = [];
      console.log('[IframeManager] Frame destroyed');
    }
  }

  /**
   * Handle messages from iframe
   */
  private handleFrameMessage(event: MessageEvent): void {
    // Security: verify message is from our iframe
    if (!this.iframe || event.source !== this.iframe.contentWindow) {
      return;
    }

    const message = event.data as FrameToContentScriptMessage;
    console.log('[IframeManager] Received message from frame:', message.type);

    switch (message.type) {
      case 'FRAME_READY':
        this.frameReady = true;
        console.log('[IframeManager] Frame is ready');
        
        // Send queued messages
        while (this.messageQueue.length > 0) {
          const queuedMessage = this.messageQueue.shift();
          if (queuedMessage) {
            this.sendToFrame(queuedMessage);
          }
        }
        break;

      case 'CLOSE_FRAME':
        // Hide the entire iframe when user closes popup
        this.hide();
        console.log('[IframeManager] Frame closed by user action');
        break;

      case 'SAVE_CARD':
        // TODO: Handle save card
        console.log('[IframeManager] Save card:', message.card);
        break;
    }
  }
}

// Export singleton instance
export const iframeManager = new IframeManager();
