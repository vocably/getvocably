import { Card } from '@vocably/model';

export const getInitialMessage = (card: Card): string => {
  return `You can ask ChatGPT anything about${
    card.partOfSpeech ? ` the ${card.partOfSpeech}` : ''
  } **${card.source}**.

This is a beta feature.`;
};
