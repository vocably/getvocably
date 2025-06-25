import { get } from 'lodash-es';
import { AuthStatus } from './auth/AuthContext';

export const isPaid = (authStatus: AuthStatus): boolean => {
  return (
    authStatus.status === 'logged-in' &&
    (
      get(
        authStatus.session,
        'tokens.accessToken.payload.cognito:groups',
        []
      ) as string[]
    ).includes('paid')
  );
};
