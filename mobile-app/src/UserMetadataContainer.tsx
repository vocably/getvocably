import {
  getUserMetadata as apiGetUserMetadata,
  getUserStaticMetadata as apiGetUserStaticMetadata,
  saveUserMetadata as apiSaveUserMetadata,
} from '@vocably/api';
import {
  defaultUserMetadata,
  defaultUserStaticMetadata,
  mergeUserMetadata,
  PartialUserMetadata,
  UserMetadata,
  UserStaticMetadata,
} from '@vocably/model';
import { retry } from '@vocably/model-operations';
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AppState } from 'react-native';
import { AuthContext } from './auth/AuthContext';
import { Sentry } from './BetterSentry';
import { Loader } from './loaders/Loader';

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

type Props = {};

export const UserMetadataContainer: FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const [userMetadata, setUserMetadata] = useState<UserMetadata | null>(null);
  const [userStaticMetadata, setUserStaticMetadata] =
    useState<UserStaticMetadata | null>(null);

  const authContext = useContext(AuthContext);

  const refresh = async () => {
    if (authContext.status !== 'logged-in') {
      setUserMetadata(defaultUserMetadata);
      setUserStaticMetadata(defaultUserStaticMetadata);
      return;
    }

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
  }, [authContext.status]);

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
      if (authContext.status !== 'logged-in') {
        setUserMetadata((currentMetadata) => {
          if (currentMetadata === null) {
            return null;
          }

          return mergeUserMetadata(currentMetadata, metadata);
        });
        return;
      }

      const saveUserMetadataResult = await apiSaveUserMetadata(metadata);

      if (saveUserMetadataResult.success === true) {
        setUserMetadata(saveUserMetadataResult.value);
      }
    },
    [setUserMetadata, authContext.status]
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
