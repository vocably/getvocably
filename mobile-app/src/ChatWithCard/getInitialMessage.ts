import { ChatCard } from '@vocably/model';

export const getInitialMessage = (card: ChatCard): string => {
  return `You can ask ChatGPT anything about${
    card.partOfSpeech ? ` the ${card.partOfSpeech}` : ''
  } **${card.source}**, like:

  * provide examples
  * explain the meaning
  * help to remember

This is a beta feature.`;
};
