import { get } from 'lodash-es';
import { useContext } from 'react';
import { AuthContext, AuthStatus } from './auth/AuthContext';
import {
  CustomerInfoContext,
  CustomerInfoStatus,
} from './CustomerInfoContainer';

const isPremium = (
  authStatus: AuthStatus,
  customerInfoStatus: CustomerInfoStatus
): boolean => {
  if (
    authStatus.status === 'logged-in' &&
    (
      get(
        authStatus.session,
        'tokens.accessToken.payload.cognito:groups',
        []
      ) as string[]
    ).includes('paid')
  ) {
    return true;
  }

  if (
    customerInfoStatus.status === 'loaded' &&
    get(
      customerInfoStatus.customerInformation,
      'entitlements.active.premium',
      false
    )
  ) {
    return true;
  }

  return false;
};

export const usePremium = () => {
  const customerInfoStatus = useContext(CustomerInfoContext);
  const authStatus = useContext(AuthContext);

  return isPremium(authStatus, customerInfoStatus);
};
