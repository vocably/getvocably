import { postOnboardingAction } from '@vocably/api';
import { Result, resultify } from '@vocably/model';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import { get } from 'lodash-es';
import { usePostHog } from 'posthog-react-native';
import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import * as asyncAppStorage from '../asyncAppStorage';
import { Sentry } from '../BetterSentry';
import { facility } from '../facility';
import { Loader } from '../loaders/Loader';
import { notificationsIdentifyUser } from '../notificationsIdentifyUser';
import { useAsync } from '../useAsync';
import { getFlatAttributes } from './getFlatAttributes';

export type AuthStatus =
  | {
      status: 'undefined';
    }
  | {
      status: 'not-logged-in';
    }
  | {
      status: 'logged-in';
      sub: string;
      email: string;
      isPaidGroup: boolean;
    };

type AuthErrorCode =
  | 'UNABLE_TO_GET_ATTRIBUTES'
  | 'UNABLE_TO_REFRESH_TOKEN'
  | 'UNABLE_TO_FETCH_AUTH_SESSION'
  | 'FETCHED_SESSION_HAS_NO_TOKENS';

export type AuthStatusWithError = {
  error: AuthErrorCode | null;
} & AuthStatus;

export const AuthContext = createContext<AuthStatusWithError>({
  status: 'undefined',
  error: null,
});

const getAttributes = async (): Promise<
  Result<{
    sub: string;
    email: string;
  }>
> => {
  try {
    const flatAttributes = await getFlatAttributes();

    if (!flatAttributes || !flatAttributes['sub'] || !flatAttributes['email']) {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason: 'The flat attributes have no sufficient data',
        extra: flatAttributes,
      };
    }

    return {
      success: true,
      value: {
        sub: flatAttributes.sub,
        email: flatAttributes.email,
      },
    };
  } catch (error) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'Unable to get flat attributes.',
      extra: error,
    };
  }
};

const loadAuthStatusFromStorage = async (): Promise<AuthStatus> => {
  const status = await asyncAppStorage.getItem('vocablyAuthStatus');

  if (!status) {
    return {
      status: 'undefined',
    };
  }

  return JSON.parse(status);
};

const saveAuthStatusToStorage = async (status: AuthStatus) => {
  await asyncAppStorage.setItem('vocablyAuthStatus', JSON.stringify(status));
};

export const AuthContainer: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const [authStatusResult, setAuthStatus] = useAsync(
    loadAuthStatusFromStorage,
    saveAuthStatusToStorage
  );

  const [error, setError] = useState<AuthErrorCode | null>(null);

  const posthog = usePostHog();

  const defineAuthStatus = async () => {
    const currentUserResult = await resultify(getCurrentUser(), {
      errorCode: 'FUCKING_ERROR',
      reason: 'Unable to get current user.',
    });

    setError(null);

    if (!currentUserResult.success) {
      await setAuthStatus({
        status: 'not-logged-in',
      });
      return;
    }

    const fetchSessionResult = await resultify(
      fetchAuthSession({
        forceRefresh: false,
      }),
      {
        errorCode: 'FUCKING_ERROR',
        reason: 'Unable to fetch auth session.',
      }
    );

    if (!fetchSessionResult.success) {
      setError('UNABLE_TO_FETCH_AUTH_SESSION');
      return;
    }

    if (!fetchSessionResult.value.tokens) {
      setError('FETCHED_SESSION_HAS_NO_TOKENS');
      return;
    }

    const attributesResult = await getAttributes();

    if (!attributesResult.success) {
      setError('UNABLE_TO_GET_ATTRIBUTES');
      return;
    }

    await setAuthStatus({
      status: 'logged-in',
      sub: attributesResult.value.sub,
      email: attributesResult.value.email,
      isPaidGroup: (
        get(
          fetchSessionResult.value,
          'tokens.accessToken.payload.cognito:groups',
          []
        ) as string[]
      ).includes('paid'),
    });
  };

  useEffect(() => {
    if (authStatusResult.status !== 'loaded') {
      return;
    }

    if (authStatusResult.value.status === 'logged-in') {
      posthog.identify(authStatusResult.value.sub, {
        email: authStatusResult.value.email,
      });
    }

    if (authStatusResult.value.status === 'undefined') {
      defineAuthStatus();
    }
  }, [authStatusResult]);

  useEffect(() => {
    return Hub.listen('auth', async (event) => {
      console.log('Auth event', event);

      if (event.payload.event === 'tokenRefresh_failure') {
        //@ts-ignore
        posthog.capture('tokenRefreshFailure', { ...event.payload });
        //@ts-ignore
        Sentry.captureMessage('tokenRefreshFailure', { ...event.payload });
        setError('UNABLE_TO_REFRESH_TOKEN');
        return;
      }

      if (event.payload.event === 'tokenRefresh') {
        setError(null);
        return;
      }

      if (event.payload.event === 'signedOut') {
        setError(null);
        await setAuthStatus({
          status: 'undefined',
        });
        return;
      }

      if (event.payload.event !== 'signedIn') {
        return;
      }

      await notificationsIdentifyUser();
      const fetchSessionResult = await resultify(
        fetchAuthSession({
          forceRefresh: false,
        }),
        {
          errorCode: 'FUCKING_ERROR',
          reason: 'Unable to fetch auth session.',
        }
      );

      if (!fetchSessionResult.success) {
        setError('UNABLE_TO_FETCH_AUTH_SESSION');
        return;
      }

      if (!fetchSessionResult.value.tokens) {
        setError('FETCHED_SESSION_HAS_NO_TOKENS');
        return;
      }

      const attributesResult = await getAttributes();

      if (!attributesResult.success) {
        setError('UNABLE_TO_GET_ATTRIBUTES');
        return;
      }

      await setAuthStatus({
        status: 'logged-in',
        sub: attributesResult.value.sub,
        email: attributesResult.value.email,
        isPaidGroup: (
          get(
            fetchSessionResult.value,
            'tokens.accessToken.payload.cognito:groups',
            []
          ) as string[]
        ).includes('paid'),
      });
      setError(null);

      await postOnboardingAction({
        name: 'userLoggedIn',
        payload: {
          facility,
        },
      });
    });
  }, []);

  if (authStatusResult.status !== 'loaded') {
    return <Loader>Authenticating...</Loader>;
  }

  return (
    <AuthContext.Provider
      value={{
        ...authStatusResult.value,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
