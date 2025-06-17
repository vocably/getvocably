import {
  getUserMetadata as apiGetUserMetadata,
  getUserStaticMetadata as apiGetUserStaticMetadata,
  saveUserMetadata as apiSaveUserMetadata,
} from '@vocably/api';
import {
  defaultUserMetadata,
  defaultUserStaticMetadata,
  PartialUserMetadata,
  UserMetadata,
  UserStaticMetadata,
} from '@vocably/model';
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { AppState } from 'react-native';
import { Sentry } from './BetterSentry';
import { Loader } from './loaders/Loader';
import { retry } from './retry';

type UserMetadataContextValues = {
  userMetadata: UserMetadata;
  userStaticMetadata: UserStaticMetadata;
  updateUserMetadata: (metadata: PartialUserMetadata) => Promise<void>;
  refresh: () => Promise<unknown>;
};

export const UserMetadataContext = createContext<UserMetadataContextValues>({
  userMetadata: defaultUserMetadata,
  userStaticMetadata: defaultUserStaticMetadata,
  updateUserMetadata: () => Promise.resolve(),
  refresh: () => Promise.resolve(),
});

type UserMetadataContainer = FC<{
  children: ReactNode;
}>;

export const UserMetadataContainer: UserMetadataContainer = ({ children }) => {
  const [userMetadata, setUserMetadata] = useState<UserMetadata | null>(null);
  const [userStaticMetadata, setUserStaticMetadata] =
    useState<UserStaticMetadata | null>(null);

  const refresh = async () => {
    Promise.all([
      retry(() => apiGetUserMetadata()),
      retry(() => apiGetUserStaticMetadata()),
    ]).then(([userMetadataResult, userStaticMetadataResult]) => {
      if (userMetadataResult.success === true) {
        setUserMetadata(userMetadataResult.value);
      } else {
        console.error('Unable to load user metadata', userMetadataResult);
        Sentry.captureMessage('metadataFetchError', {
          ...userMetadataResult,
        });
      }

      if (userStaticMetadataResult.success === true) {
        setUserStaticMetadata(userStaticMetadataResult.value);
      } else {
        console.error(
          'Unable to load user static metadata',
          userStaticMetadataResult
        );

        Sentry.captureMessage('staticMetadataFetchError', {
          ...userStaticMetadataResult,
        });
      }
    });
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    const onAppChangeListener = AppState.addEventListener(
      'change',
      (nextAppState) => {
        if (nextAppState !== 'active') {
          return;
        }

        retry(() => apiGetUserMetadata()).then((result) => {
          if (result.success === true) {
            setUserMetadata(result.value);
          }
        });
      }
    );

    return () => {
      onAppChangeListener.remove();
    };
  }, []);

  const updateUserMetadata = useCallback(
    async (metadata: PartialUserMetadata) => {
      const saveUserMetadataResult = await apiSaveUserMetadata(metadata);

      if (saveUserMetadataResult.success === true) {
        setUserMetadata(saveUserMetadataResult.value);
      }
    },
    [setUserMetadata]
  );

  if (userMetadata === null || userStaticMetadata === null) {
    return <Loader>Loading user metadata...</Loader>;
  }

  return (
    <UserMetadataContext.Provider
      value={{ userMetadata, userStaticMetadata, updateUserMetadata, refresh }}
    >
      {children}
    </UserMetadataContext.Provider>
  );
};
