/**
 * Message types for communication between content script and popup frame
 */

// Messages from Content Script → iframe
export interface ShowTranslationMessage {
  type: 'SHOW_TRANSLATION';
  text: string;
  detectedLanguage?: string;
  context?: string;
  position: {
    top?: number;
    bottom?: number;
    left: number;
  };
  isTouchscreen: boolean;
}

export interface HideMessage {
  type: 'HIDE';
}

export type ContentScriptToFrameMessage = ShowTranslationMessage | HideMessage;

// Messages from iframe → Content Script
export interface FrameReadyMessage {
  type: 'FRAME_READY';
}

export interface SaveCardMessage {
  type: 'SAVE_CARD';
  card: any; // TODO: Define proper card type
}

export interface CloseFrameMessage {
  type: 'CLOSE_FRAME';
}

export type FrameToContentScriptMessage = 
  | FrameReadyMessage 
  | SaveCardMessage 
  | CloseFrameMessage;
