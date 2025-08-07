import { Card } from '@vocably/model';

export const getInitialMessage = (card: Card): string => {
  return `You can ask anything about${
    card.partOfSpeech ? ` the ${card.partOfSpeech}` : ''
  } **${card.source}**.

This is a beta feature of Vocably. I don't know how it will work in the future.`;
};
