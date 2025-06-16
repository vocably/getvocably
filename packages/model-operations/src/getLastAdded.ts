import { CardItem } from '@vocably/model';

export const getLastAdded = (cards: CardItem[]): number => {
  let lastAdded = 0;
  for (const card of cards) {
    if (card.created > lastAdded) {
      lastAdded = card.created;
    }
  }
  return lastAdded;
};
