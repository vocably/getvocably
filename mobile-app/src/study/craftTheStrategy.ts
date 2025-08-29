import { CardItem, StudyStrategy } from '@vocably/model';
import { spreadStrategy } from '@vocably/srs/dist/esm/spreadStrategy';
import { getMultiChoice } from './getMultiChoice';
import { isSuitableForArrangingByLetters } from './isSuitableForArrangingByLetters';

type SwipeFront = {
  step: 'sf';
};

type SwipeBack = {
  step: 'sb';
};

type MultiChoiceFront = {
  step: 'mf';
  multiChoice: [CardItem, CardItem, ...CardItem[]];
};

type MultiChoiceBack = {
  step: 'mb';
  multiChoice: [CardItem, CardItem, ...CardItem[]];
};

type ArrangeByLetters = {
  step: 'ab';
};

type ImmediateStep =
  | SwipeFront
  | SwipeBack
  | MultiChoiceFront
  | MultiChoiceBack
  | ArrangeByLetters;

type Options = {
  isMultiChoiceEnabled: boolean;
  preferMultiChoiceEnabled: boolean;
  card: CardItem;
  allCards: CardItem[];
  prerenderedCards: CardItem[];
};

type ReturnType = {
  strategy: StudyStrategy;
  immediateStep: ImmediateStep;
};

export const craftTheStrategy = ({
  isMultiChoiceEnabled,
  preferMultiChoiceEnabled,
  card,
  allCards,
  prerenderedCards,
}: Options): ReturnType => {
  // @ts-ignore
  const swipeStrategy: StudyStrategy = [
    { step: 'sf', allowedFailures: null },
    { step: 'ab', allowedFailures: null },
    { step: 'sb', allowedFailures: 0 },
  ].filter((strategy) => {
    if (strategy.step === 'ab' && !isSuitableForArrangingByLetters(card)) {
      return false;
    }

    return true;
  });

  if (
    !isMultiChoiceEnabled ||
    (!card.data.translation && !card.data.definition)
  ) {
    const { currentState } = spreadStrategy(card.data.state, swipeStrategy);
    return {
      strategy: swipeStrategy,
      immediateStep: {
        step:
          currentState.s === 'sf' ||
          currentState.s === 'sb' ||
          currentState.s === 'ab'
            ? currentState.s
            : 'sf',
      },
    };
  }

  const multiChoiceItems =
    getMultiChoice(card, allCards) ?? getMultiChoice(card, prerenderedCards);

  if (multiChoiceItems === null) {
    const { currentState } = spreadStrategy(card.data.state, swipeStrategy);
    return {
      strategy: swipeStrategy,
      immediateStep: {
        step:
          currentState.s === 'sf' ||
          currentState.s === 'sb' ||
          currentState.s === 'ab'
            ? currentState.s
            : 'sf',
      },
    };
  }

  if (preferMultiChoiceEnabled) {
    const strategy: StudyStrategy = [
      { step: 'mf', allowedFailures: null },
      { step: 'mb', allowedFailures: null },
    ];

    const { currentState } = spreadStrategy(card.data.state, strategy);
    return {
      strategy,
      immediateStep: {
        step:
          currentState.s === 'mf' || currentState.s === 'mb'
            ? currentState.s
            : 'mf',
        multiChoice: multiChoiceItems,
      },
    };
  }

  // @ts-ignore
  const strategy: StudyStrategy = [
    { step: 'mf', allowedFailures: null },
    { step: 'sf', allowedFailures: 0 },
    { step: 'mb', allowedFailures: null },
    { step: 'ab', allowedFailures: null },
    { step: 'sb', allowedFailures: 0 },
  ].filter((strategy) => {
    if (strategy.step === 'ab' && !isSuitableForArrangingByLetters(card)) {
      return false;
    }

    return true;
  });

  const { currentState } = spreadStrategy(card.data.state, strategy);
  return {
    strategy,
    immediateStep: {
      step: currentState.s,
      multiChoice: multiChoiceItems as [CardItem, CardItem, ...CardItem[]],
    },
  };
};
