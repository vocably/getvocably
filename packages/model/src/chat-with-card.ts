import { isNumber, isObject } from 'lodash-es';
import { Card } from './language-deck';

export type ChatWithCardPayload = {
  card: Card;
  history: ChatWithCardMessage[];
};

export type ChatWithCardMessage = {
  role: 'user' | 'assistant';
  timestamp: number;
  message: string;
  interfaceMessage?: string;
};

export type ChatWithCardResult = {
  messages: ChatWithCardMessage[];
};

export const isChatWithCardMessage = (
  something: any
): something is ChatWithCardMessage => {
  return (
    isObject(something) &&
    ['user', 'assistant'].includes(something['role']) &&
    isNumber(something['timestamp'])
  );
};

export const isChatWithCardPayload = (
  something: any
): something is ChatWithCardPayload => {
  return (
    isObject(something) &&
    isObject(something['card']) &&
    Array.isArray(something['history']) &&
    something['history'].every(isChatWithCardMessage)
  );
};
