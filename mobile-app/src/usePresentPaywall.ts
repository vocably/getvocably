import { useNavigation } from '@react-navigation/native';
import { usePostHog } from 'posthog-react-native';
import { useRef } from 'react';
import { OfferingId, presentPaywall } from './presentPaywall';

export const usePresentPaywall = () => {
  const navigation = useNavigation();
  const paywallIsPresentRef = useRef(false);
  const posthog = usePostHog();

  return async (offeringId: OfferingId = 'mobile-premium') => {
    if (paywallIsPresentRef.current) {
      return;
    }

    paywallIsPresentRef.current = true;

    posthog.capture('paywall-showed', { offeringId });
    const isPaid = await presentPaywall(offeringId);
    posthog.capture('paywall-closed', { offeringId, isPaid });
    paywallIsPresentRef.current = false;

    if (isPaid) {
      navigation.navigate('PaymentSuccessModal');
    }
  };
};
