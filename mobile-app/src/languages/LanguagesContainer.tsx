import {
  deleteLanguageDeck,
  listLanguages,
  loadLanguageDeck,
} from '@vocably/api';
import { LanguageDeck, Result, TagItem } from '@vocably/model';
import { usePostHog } from 'posthog-react-native';
import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { AppState } from 'react-native';
import * as asyncAppStorage from '../asyncAppStorage';
import { Sentry } from '../BetterSentry';
import { Error } from '../Error';
import { Loader } from '../loaders/Loader';
import { pingGoogle } from '../pingGoogle';
import { useAsync } from '../useAsync';

const selectedLanguageStorageKey = 'languagesContainerSelectedLanguage';

const loadSelectedLanguageStorage = (): Promise<string> =>
  asyncAppStorage.getItem(selectedLanguageStorageKey).then((res) => res ?? '');

const saveSelectedLanguageToStorage = (language: string) =>
  asyncAppStorage.setItem(selectedLanguageStorageKey, language);

export type LanguageContainerDeck = {
  status: 'initial' | 'loading' | 'loaded' | 'error';
  deck: LanguageDeck;
  selectedTags: TagItem[];
};

type DecksCollection = Record<string, LanguageContainerDeck>;

const createDefaultLanguageDeck = (language: string): LanguageDeck => ({
  language,
  cards: [],
  tags: [],
});

const loadDecksFromStorage = async (): Promise<DecksCollection> => {
  const decks = await asyncAppStorage.getItem('languageDecks');

  if (decks === undefined) {
    return {};
  }

  return JSON.parse(decks);
};

const saveDecksToStorage = async (decks: DecksCollection) => {
  await asyncAppStorage.setItem('languageDecks', JSON.stringify(decks));
};

type Languages = {
  status: 'loading' | 'loaded' | 'error';
  languages: string[];
  decks: DecksCollection;
  storeDeck: (deck: LanguageContainerDeck) => void;
  deleteLanguage: (language: string) => Promise<unknown>;
  selectedLanguage: string;
  selectLanguage: (language: string) => Promise<Result<unknown>>;
  refreshLanguages: () => Promise<void>;
  addLanguage: (language: string) => void;
  addNewLanguage: (language: string) => Promise<Result<unknown>>;
};

export const LanguagesContext = createContext<Languages>({
  status: 'loading',
  languages: [],
  decks: {},
  storeDeck: () => Promise<unknown>,
  deleteLanguage: () =>
    Promise.resolve({
      success: true,
      value: null,
    }),
  selectedLanguage: '',
  selectLanguage: () => Promise.resolve(),
  refreshLanguages: () => Promise.resolve(),
  addLanguage: () => null,
  addNewLanguage: () => Promise.resolve({ success: true, value: null }),
});

type Props = {
  children: ReactNode;
  refreshLanguagesOnActive?: boolean;
};

export const LanguagesContainer: FC<Props> = ({
  children,
  refreshLanguagesOnActive = false,
}) => {
  const posthog = usePostHog();
  const [listLoadingStatus, setListLoadingStatus] =
    useState<Languages['status']>('loading');
  const [decks, setDecks] = useAsync(loadDecksFromStorage, saveDecksToStorage);
  const languages = decks.status === 'loaded' ? Object.keys(decks.value) : [];
  const [selectedLanguage, selectLanguage] = useAsync(
    () =>
      loadSelectedLanguageStorage().catch((error) => {
        Sentry.captureMessage('loadSelectedLanguageError', { error: error });
        posthog.capture('loadSelectedLanguageError', { error });
        throw error;
      }),
    (payload) =>
      saveSelectedLanguageToStorage(payload).catch((error) => {
        Sentry.captureMessage('storeSelectedLanguageError', { error: error });
        posthog.capture('storeSelectedLanguageError', { error });
        throw error;
      })
  );

  const storeDeck = async (
    deck: LanguageContainerDeck
  ): Promise<Result<unknown>> => {
    if (decks.status !== 'loaded') {
      return {
        success: true,
        value: null,
      };
    }

    return setDecks({
      ...decks.value,
      [deck.deck.language]: deck,
    });
  };

  const addLanguage = async (language: string): Promise<Result<unknown>> => {
    if (languages.includes(language)) {
      return {
        success: true,
        value: null,
      };
    }

    return storeDeck({
      status: 'loaded',
      deck: createDefaultLanguageDeck(language),
      selectedTags: [],
    });
  };

  const deleteLanguage = async (language: string) =>
    deleteLanguageDeck(language).then(async (result) => {
      if (result.success === false) {
        return result;
      }

      if (decks.status !== 'loaded') {
        return;
      }

      const { [language]: _, ...newDecks } = decks.value;
      await setDecks(newDecks);

      return result;
    });

  const refreshLanguages = async () => {
    if (decks.status !== 'loaded') {
      return;
    }

    const listResult = await listLanguages();

    if (listResult.success === false) {
      Sentry.captureMessage('listLanguagesError', { ...listResult });
      posthog.capture('listLanguagesError', { ...listResult });
      setListLoadingStatus('error');

      pingGoogle().then((status) => {
        Sentry.captureMessage(`pingGoogleStatus_${status}`);
        posthog.capture('pingGoogleStatus', { status });
      });

      return;
    }

    const loadedLanguageDecks = await Promise.all(
      listResult.value.map(async (language) => {
        return {
          language,
          loadResult: await loadLanguageDeck(language),
        };
      })
    );

    const newDecks: DecksCollection = loadedLanguageDecks.reduce(
      (acc, loadedLanguageDeck) => {
        const selectedTags =
          decks.value[loadedLanguageDeck.language]?.selectedTags ?? [];
        const deck =
          loadedLanguageDeck.loadResult.success === true
            ? loadedLanguageDeck.loadResult.value
            : decks.value[loadedLanguageDeck.language]?.deck ??
              createDefaultLanguageDeck(loadedLanguageDeck.language);

        return {
          ...acc,
          [loadedLanguageDeck.language]: {
            status: 'loaded',
            deck,
            selectedTags,
          },
        };
      },
      {}
    );

    await setDecks(newDecks);
  };

  const addNewLanguage = async (language: string): Promise<Result<unknown>> => {
    if (decks.status !== 'loaded') {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason:
          'Unable to add new language while decks are not loaded from the memory yet.',
      };
    }

    if (decks.value[language]) {
      await selectLanguage(language);
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason: 'Unable to add new language because it is already added.',
      };
    }

    const newLanguageDeck = createDefaultLanguageDeck(language);
    const setDecksResult = await setDecks({
      ...decks.value,
      [language]: {
        status: 'loaded',
        deck: newLanguageDeck,
        selectedTags: [],
      },
    });

    if (!setDecksResult.success) {
      return setDecksResult;
    }

    return selectLanguage(language);
  };

  useEffect(() => {
    if (decks.status !== 'loaded') {
      return;
    }

    if (decks.value !== {}) {
      setListLoadingStatus('loaded');
      return;
    }

    refreshLanguages().then();

    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active' && refreshLanguagesOnActive) {
        refreshLanguages().then();
      }
    });

    return () => {
      subscription.remove();
    };
  }, [decks.status]);

  useEffect(() => {
    if (
      selectedLanguage.status !== 'loaded' ||
      listLoadingStatus !== 'loaded'
    ) {
      return;
    }

    if (
      selectedLanguage.value !== '' &&
      languages.includes(selectedLanguage.value)
    ) {
      return;
    }

    if (languages.length > 0) {
      selectLanguage(languages[0]);
      return;
    }

    if (selectedLanguage.value !== '') {
      selectLanguage('');
    }
  }, [selectedLanguage, languages, listLoadingStatus, selectLanguage]);

  const value: Languages = {
    status: listLoadingStatus,
    languages,
    decks: decks.status === 'loaded' ? decks.value : {},
    storeDeck,
    deleteLanguage,
    selectedLanguage:
      selectedLanguage.status === 'loaded' ? selectedLanguage.value : '',
    selectLanguage,
    refreshLanguages,
    addLanguage,
    addNewLanguage,
  };

  return (
    <LanguagesContext.Provider value={value}>
      {(listLoadingStatus === 'loading' ||
        selectedLanguage.status === 'loading' ||
        decks.status === 'loading') && <Loader>Loading languages...</Loader>}
      {(listLoadingStatus === 'error' ||
        selectedLanguage.status === 'failed' ||
        decks.status === 'failed') && (
        <Error onRetry={refreshLanguages}>
          Oops! We're unable to load your languages and cards right now.
        </Error>
      )}
      {listLoadingStatus === 'loaded' &&
        selectedLanguage.status === 'loaded' &&
        decks.status === 'loaded' &&
        children}
    </LanguagesContext.Provider>
  );
};
