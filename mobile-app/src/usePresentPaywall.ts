import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { presentPaywall } from './presentPaywall';

export const usePresentPaywall = () => {
  const navigation = useNavigation();
  const paywallIsPresentRef = useRef(false);

  return async () => {
    if (paywallIsPresentRef.current) {
      return;
    }

    paywallIsPresentRef.current = true;
    const isPaid = await presentPaywall();
    paywallIsPresentRef.current = false;

    if (isPaid) {
      navigation.navigate('PaymentSuccessModal');
    }
  };
};
