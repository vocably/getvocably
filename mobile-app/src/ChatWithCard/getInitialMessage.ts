import { ChatCard } from '@vocably/model';

export const getInitialMessage = (card: ChatCard): string => {
  return `You can ask ChatGPT anything about${
    card.partOfSpeech ? ` the ${card.partOfSpeech}` : ''
  } **${card.source}**, like:

  * explain the meaning
  * provide examples
  * help to remember

This is a beta feature.`;
};
