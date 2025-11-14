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
import { createContext, FC, PropsWithChildren, useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import * as asyncAppStorage from './asyncAppStorage';
import { Loader } from './loaders/Loader';
import { useAsync } from './useAsync';

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

const loadUserMetadataFromStorage = async (): Promise<UserMetadata> => {
  const userMetadata = await asyncAppStorage.getItem('userMetadata');

  if (!userMetadata) {
    return defaultUserMetadata;
  }

  return JSON.parse(userMetadata);
};

const saveUserMetadataToStorage = async (userMetadata: UserMetadata) => {
  await asyncAppStorage.setItem('userMetadata', JSON.stringify(userMetadata));
};

const loadUserStaticMetadataFromStorage =
  async (): Promise<UserStaticMetadata> => {
    const userStaticMetadata = await asyncAppStorage.getItem(
      'userStaticMetadata'
    );

    if (!userStaticMetadata) {
      return defaultUserStaticMetadata;
    }

    return JSON.parse(userStaticMetadata);
  };

const saveUserStaticMetadataToStorage = async (
  userStaticMetadata: UserStaticMetadata
) => {
  await asyncAppStorage.setItem(
    'userStaticMetadata',
    JSON.stringify(userStaticMetadata)
  );
};

type Props = {};

export const UserMetadataContainer: FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const [userMetadataState, setUserMetadataState] = useAsync(
    loadUserMetadataFromStorage,
    saveUserMetadataToStorage
  );
  const [userStaticMetadataState, setUserStaticMetadataState] = useAsync(
    loadUserStaticMetadataFromStorage,
    saveUserStaticMetadataToStorage
  );

  const isMetadataSyncingRef = useRef(false);

  const syncUserMetadata = async () => {
    if (userMetadataState.status !== 'loaded') {
      return;
    }

    if (isMetadataSyncingRef.current) {
      return;
    }

    // We use storage metadata so it is not staled
    const storageMetadata = await loadUserMetadataFromStorage();
    const loadResult = await apiGetUserMetadata();

    if (loadResult.success === false) {
      isMetadataSyncingRef.current = false;
      return;
    }

    if (loadResult.value.lastUpdated > storageMetadata.lastUpdated) {
      await setUserMetadataState(loadResult.value);
      isMetadataSyncingRef.current = false;
      return;
    }

    const saveResult = await apiSaveUserMetadata(storageMetadata);

    if (saveResult.success === false) {
      isMetadataSyncingRef.current = false;
      return;
    }

    await setUserMetadataState(saveResult.value);
    isMetadataSyncingRef.current = false;
    return;
  };

  const syncUserStaticMetadata = async () => {
    if (userStaticMetadataState.status !== 'loaded') {
      return;
    }

    const loadResult = await apiGetUserStaticMetadata();
    if (loadResult.success === false) {
      return;
    }

    await setUserStaticMetadataState(loadResult.value);
  };

  const refresh = async () => {
    if (
      userMetadataState.status !== 'loaded' ||
      userStaticMetadataState.status !== 'loaded'
    ) {
      return;
    }

    await Promise.all([syncUserMetadata(), syncUserStaticMetadata()]);
  };

  useEffect(() => {
    if (
      userMetadataState.status !== 'loaded' ||
      userStaticMetadataState.status !== 'loaded'
    ) {
      return;
    }

    refresh();
  }, [userMetadataState.status, userStaticMetadataState.status]);

  useEffect(() => {
    const onAppChangeListener = AppState.addEventListener(
      'change',
      (nextAppState) => {
        if (nextAppState !== 'active') {
          return;
        }

        refresh();
      }
    );

    return () => {
      onAppChangeListener.remove();
    };
  }, []);

  const updateUserMetadata = async (metadata: PartialUserMetadata) => {
    if (userMetadataState.status !== 'loaded') {
      return;
    }
    const toBeSaved = mergeUserMetadata(userMetadataState.value, {
      ...metadata,
      lastUpdated: new Date().getTime(),
    });
    await setUserMetadataState(toBeSaved);
    syncUserMetadata();
  };

  if (
    userMetadataState.status !== 'loaded' ||
    userStaticMetadataState.status !== 'loaded'
  ) {
    return <Loader>Loading user metadata...</Loader>;
  }

  return (
    <UserMetadataContext.Provider
      value={{
        userMetadata: userMetadataState.value,
        userStaticMetadata: userStaticMetadataState.value,
        updateUserMetadata,
        refresh,
      }}
    >
      {children}
    </UserMetadataContext.Provider>
  );
};
