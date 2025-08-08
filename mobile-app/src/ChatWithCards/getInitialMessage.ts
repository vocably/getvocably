import { Card } from '@vocably/model';

export const getInitialMessage = (card: Card): string => {
  return `You can ask ChatGPT anything about${
    card.partOfSpeech ? ` the ${card.partOfSpeech}` : ''
  } **${card.source}**, like:

  * provide examples
  * explain the meaning
  * help to remember

This is a beta feature.`;
};
