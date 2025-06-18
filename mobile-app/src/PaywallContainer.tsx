import { useNavigation } from '@react-navigation/native';
import { FC, PropsWithChildren, useEffect } from 'react';

type Props = {};

export const PaywallContainer: FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.navigate('PaymentSuccessModal');
  }, []);
  return <>{children}</>;
};
