import { useNavigation } from '@react-navigation/native';
import { useContext, useRef } from 'react';
import { presentPaywall } from './presentPaywall';
import { UserMetadataContext } from './UserMetadataContainer';

export const usePresentPaywall = () => {
  const navigation = useNavigation();
  const paywallIsPresentRef = useRef(false);
  const { userStaticMetadata } = useContext(UserMetadataContext);

  return async () => {
    if (paywallIsPresentRef.current) {
      return;
    }

    paywallIsPresentRef.current = true;
    const isPaid = await presentPaywall(
      userStaticMetadata.thanks_trial === 'one-year'
        ? 'mobile-premium-1-free'
        : 'mobile-premium'
    );
    paywallIsPresentRef.current = false;

    if (isPaid) {
      navigation.navigate('PaymentSuccessModal');
    }
  };
};
