import { UserStaticMetadata } from '@vocably/model';
import { useContext, useEffect, useState } from 'react';
import { usePremium } from './usePremium';
import { UserMetadataContext } from './UserMetadataContainer';

const getCardsLimit = (
  userStaticMetadata: UserStaticMetadata,
  isPremium: boolean
): number | 'unlimited' => {
  if (isPremium) {
    return 'unlimited';
  }

  return userStaticMetadata.max_cards;
};

export const useCardsLimit = (): number | 'unlimited' => {
  const isPremium = usePremium();
  const { userStaticMetadata } = useContext(UserMetadataContext);

  const [cardsLimit, setCardsLimit] = useState<number | 'unlimited'>(
    getCardsLimit(userStaticMetadata, isPremium)
  );

  useEffect(() => {
    if (isPremium) {
      setCardsLimit('unlimited');
      return;
    }

    setCardsLimit(getCardsLimit(userStaticMetadata, isPremium));
  }, [userStaticMetadata, isPremium]);

  return cardsLimit;
};
