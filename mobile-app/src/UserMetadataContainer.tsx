import {
  fetchStudyStreak,
  getUserMetadata as apiGetUserMetadata,
  getUserStaticMetadata as apiGetUserStaticMetadata,
  putStudyStreak,
  saveUserMetadata as apiSaveUserMetadata,
} from '@vocably/api';
import {
  defaultStudyStreak,
  defaultUserMetadata,
  defaultUserStaticMetadata,
  mergeUserMetadata,
  PartialUserMetadata,
  StudyStreak,
  UserMetadata,
  UserStaticMetadata,
} from '@vocably/model';
import { setStreak } from '@vocably/model-operations';
import { dateToString } from '@vocably/sulna';
import { createContext, FC, PropsWithChildren, useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { getTimeZone } from 'react-native-localize';
import * as asyncAppStorage from './asyncAppStorage';
import { Loader } from './loaders/Loader';
import { useAsync } from './useAsync';

type UserMetadataContextValues = {
  userMetadata: UserMetadata;
  userStaticMetadata: UserStaticMetadata;
  studyStreak: StudyStreak;
  updateUserMetadata: (metadata: PartialUserMetadata) => Promise<unknown>;
  increaseStudyStreak: () => Promise<unknown>;
  refresh: () => Promise<unknown>;
};

export const UserMetadataContext = createContext<UserMetadataContextValues>({
  userMetadata: defaultUserMetadata,
  userStaticMetadata: defaultUserStaticMetadata,
  studyStreak: defaultStudyStreak,
  updateUserMetadata: () => Promise.resolve(),
  increaseStudyStreak: () => Promise.resolve(),
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

export const loadStudyStreakFromStorage = async (): Promise<StudyStreak> => {
  const studyStreak = await asyncAppStorage.getItem('studyStreak');

  if (!studyStreak) {
    return defaultStudyStreak;
  }

  return JSON.parse(studyStreak);
};

const saveStudyStreakToStorage = async (studyStreak: StudyStreak) => {
  await asyncAppStorage.setItem('studyStreak', JSON.stringify(studyStreak));
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

  const [studyStreakState, setStudyStreakState] = useAsync(
    loadStudyStreakFromStorage,
    saveStudyStreakToStorage
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

  const isStudyStreakSyncingRef = useRef(false);

  const syncStudyStreak = async () => {
    if (studyStreakState.status !== 'loaded') {
      return;
    }

    if (isStudyStreakSyncingRef.current) {
      return;
    }

    isStudyStreakSyncingRef.current = true;

    // We use storage metadata so it is not staled
    const storageStreak = await loadStudyStreakFromStorage();
    const loadResult = await fetchStudyStreak();

    if (loadResult.success === false) {
      isStudyStreakSyncingRef.current = false;
      return;
    }

    if (loadResult.value.lastStudyDay > storageStreak.lastStudyDay) {
      await setStudyStreakState(loadResult.value);
      isStudyStreakSyncingRef.current = false;
      return;
    }

    await putStudyStreak(storageStreak);
    isStudyStreakSyncingRef.current = false;
  };

  const refresh = async () => {
    if (
      userMetadataState.status !== 'loaded' ||
      userStaticMetadataState.status !== 'loaded' ||
      studyStreakState.status !== 'loaded'
    ) {
      return;
    }

    await Promise.all([
      syncUserMetadata(),
      syncUserStaticMetadata(),
      syncStudyStreak(),
    ]);
  };

  useEffect(() => {
    if (
      userMetadataState.status !== 'loaded' ||
      userStaticMetadataState.status !== 'loaded' ||
      studyStreakState.status !== 'loaded'
    ) {
      return;
    }

    refresh();
  }, [
    userMetadataState.status,
    userStaticMetadataState.status,
    studyStreakState.status,
  ]);

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

  const increaseStudyStreak = async () => {
    if (studyStreakState.status !== 'loaded') {
      return;
    }

    const today = dateToString(new Date());
    const toBeSaved = setStreak(studyStreakState.value, today, getTimeZone());

    await setStudyStreakState(toBeSaved);
    syncStudyStreak();
  };

  if (
    userMetadataState.status !== 'loaded' ||
    userStaticMetadataState.status !== 'loaded' ||
    studyStreakState.status !== 'loaded'
  ) {
    return <Loader>Loading user metadata...</Loader>;
  }

  return (
    <UserMetadataContext.Provider
      value={{
        userMetadata: userMetadataState.value,
        userStaticMetadata: userStaticMetadataState.value,
        studyStreak: studyStreakState.value,
        increaseStudyStreak,
        updateUserMetadata,
        refresh,
      }}
    >
      {children}
    </UserMetadataContext.Provider>
  );
};
