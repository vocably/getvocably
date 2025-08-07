import {
  ChatWithCardPayload,
  ChatWithCardResult,
  Result,
} from '@vocably/model';
import { request } from './restClient';

export const chatWithCard = async (
  payload: ChatWithCardPayload,
  abortController?: AbortController
): Promise<Result<ChatWithCardResult>> => {
  try {
    return await request('/chat-with-card', {
      method: 'POST',
      body: JSON.stringify(payload),
      signal: abortController?.signal,
    });
  } catch (e) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'The mnemonic generation request has failed.',
      extra: e,
    };
  }
};
