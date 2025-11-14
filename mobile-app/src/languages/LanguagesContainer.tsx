import {
  deleteLanguageDeck,
  listLanguages,
  loadLanguageDeck,
  saveLanguageDeck,
} from '@vocably/api';
import { makeCreate } from '@vocably/crud';
import {
  CardItem,
  LanguageDeck,
  Result,
  SrsCard,
  Tag,
  TagItem,
} from '@vocably/model';
import { isEmpty } from 'lodash-es';
import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AppState } from 'react-native';
import * as asyncAppStorage from '../asyncAppStorage';
import {
  applyTransformation,
  applyTransformations,
  LanguageDeckTransformation,
} from '../deckTransformations';
import { Error } from '../Error';
import { Loader } from '../loaders/Loader';
import { useAsync } from '../useAsync';
import { useLanguageTransformations } from './useLanguageTransformations';

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

  if (!decks) {
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
  syncDecks: () => Promise<unknown>;
  refreshLanguages: () => Promise<void>;
  addLanguage: (language: string) => void;
  addNewLanguage: (language: string) => Promise<Result<unknown>>;
  addCard: (language: string, data: SrsCard) => Promise<Result<CardItem>>;
  updateCard: (
    language: string,
    id: string,
    data: Partial<SrsCard>
  ) => Promise<Result<CardItem>>;
  removeCard: (language: string, id: string) => Promise<Result<unknown>>;
  addTag: (language: string, data: Tag) => Promise<Result<TagItem>>;
  updateTag: (
    language: string,
    id: string,
    data: Partial<Tag>
  ) => Promise<Result<TagItem>>;
  removeTag: (language: string, id: string) => Promise<Result<unknown>>;
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
  selectLanguage: () =>
    Promise.resolve({
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'Select language is not defined',
    }),
  syncDecks: () => Promise.resolve(),
  refreshLanguages: () => Promise.resolve(),
  addLanguage: () => null,
  addNewLanguage: () => Promise.resolve({ success: true, value: null }),
  addCard: async () => ({
    success: false,
    errorCode: 'FUCKING_ERROR',
    reason: 'Add card is not defined',
  }),
  updateCard: async () => ({
    success: false,
    errorCode: 'FUCKING_ERROR',
    reason: 'Update card is not defined',
  }),
  removeCard: async () => ({
    success: false,
    errorCode: 'FUCKING_ERROR',
    reason: 'Remove card is not defined',
  }),
  addTag: async () => ({
    success: false,
    errorCode: 'FUCKING_ERROR',
    reason: 'Add tag is not defined',
  }),
  updateTag: async () => ({
    success: false,
    errorCode: 'FUCKING_ERROR',
    reason: 'Update tag is not defined',
  }),
  removeTag: async () => ({
    success: false,
    errorCode: 'FUCKING_ERROR',
    reason: 'Remove tag is not defined',
  }),
});

type Props = {
  children: ReactNode;
  refreshLanguagesOnActive?: boolean;
};

export const LanguagesContainer: FC<Props> = ({
  children,
  refreshLanguagesOnActive = false,
}) => {
  const [listLoadingStatus, setListLoadingStatus] =
    useState<Languages['status']>('loading');
  const [decks, setDecks] = useAsync(loadDecksFromStorage, saveDecksToStorage);
  const languages = decks.status === 'loaded' ? Object.keys(decks.value) : [];
  const [selectedLanguage, selectLanguage] = useAsync(
    () => loadSelectedLanguageStorage(),
    (payload) => saveSelectedLanguageToStorage(payload)
  );

  const {
    areLoaded: transformationsAreLoaded,
    getTransformations,
    saveTransformations,
    deleteTransformations,
  } = useLanguageTransformations();

  const storeDeck = async (
    deck: LanguageContainerDeck
  ): Promise<Result<unknown>> => {
    if (decks.status !== 'loaded') {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason:
          'Unable to store deck while decks are not loaded from the memory yet.',
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
      status: 'initial',
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
      await deleteTransformations(language);

      return result;
    });

  const isSyncing = useRef(false);

  type SyncOptions = {
    refreshLanguageContainer?: boolean;
  };
  const syncDecks = async () => {
    if (decks.status !== 'loaded') {
      return;
    }

    if (!transformationsAreLoaded) {
      return;
    }

    if (isSyncing.current) {
      return;
    }

    isSyncing.current = true;

    for (let language of Object.keys(decks.value)) {
      const transformations = getTransformations(language);

      if (transformations.length === 0) {
        continue;
      }

      const loadedDeckResult = await loadLanguageDeck(language);
      if (!loadedDeckResult.success) {
        continue;
      }

      const transformationsToBeSynced = [...transformations];

      const deck = applyTransformations(
        loadedDeckResult.value,
        transformationsToBeSynced
      );

      const saveResult = await saveLanguageDeck(deck);

      if (!saveResult.success) {
        continue;
      }

      // We need this mumbo-jumbo because transformations might've been added
      // while saving the deck
      transformations.splice(0, transformationsToBeSynced.length);
      await saveTransformations();
    }

    isSyncing.current = false;
  };

  const refreshLanguages = async () => {
    if (decks.status !== 'loaded') {
      return;
    }

    if (isSyncing.current) {
      return;
    }

    await syncDecks();

    const listResult = await listLanguages();

    if (!listResult.success) {
      if (isEmpty(decks.value)) {
        setListLoadingStatus('error');
      }
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

    const loadedDecks: DecksCollection = loadedLanguageDecks.reduce(
      (acc, loadedLanguageDeck) => {
        const storedDeckContainer = decks.value[loadedLanguageDeck.language];
        const selectedTags = storedDeckContainer?.selectedTags ?? [];
        const deck =
          loadedLanguageDeck.loadResult.success === true
            ? loadedLanguageDeck.loadResult.value
            : storedDeckContainer?.deck ??
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

    // Preserve non-synchronized decks
    const newDecks = Object.entries(decks.value).reduce<DecksCollection>(
      (acc, [language, deckContainer]) => {
        const transformations = getTransformations(language);
        if (transformations.length === 0) {
          return acc;
        }

        return {
          ...acc,
          [language]: deckContainer,
        };
      },
      loadedDecks
    );

    await setDecks(newDecks);
    setListLoadingStatus('loaded');
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
        status: 'initial',
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

    if (!isEmpty(decks.value)) {
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

  const addCard = async (
    language: string,
    card: SrsCard
  ): Promise<Result<CardItem>> => {
    if (decks.status !== 'loaded') {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason:
          'Unable to add card while decks are not loaded from the memory yet.',
      };
    }

    const container = decks.value[language] ?? {
      status: 'initial',
      deck: createDefaultLanguageDeck(language),
      selectedTags: [],
      transformations: [],
    };

    // ToDo: make crud operations immutable and change this
    const cardItem = makeCreate([...container.deck.cards])(card);

    const transformation: LanguageDeckTransformation = {
      type: 'addCard',
      card: cardItem,
    };

    const storeResult = await storeDeck({
      ...container,
      deck: applyTransformation(container.deck, transformation),
    });

    if (!storeResult.success) {
      return storeResult;
    }

    getTransformations(language).push(transformation);
    await saveTransformations();

    syncDecks().catch(() => {
      console.error('Sync failed');
    });

    return {
      success: true,
      value: cardItem,
    };
  };

  const updateCard = async (
    language: string,
    id: string,
    data: Partial<SrsCard>
  ): Promise<Result<CardItem>> => {
    if (decks.status !== 'loaded') {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason:
          'Unable to update card while decks are not loaded from the memory yet.',
      };
    }

    const container = decks.value[language] ?? {
      status: 'initial',
      deck: createDefaultLanguageDeck(language),
      selectedTags: [],
      transformations: [],
    };

    const transformation: LanguageDeckTransformation = {
      type: 'updateCard',
      id,
      data,
    };

    const storeResult = await storeDeck({
      ...container,
      deck: applyTransformation(container.deck, transformation),
    });

    if (!storeResult.success) {
      return storeResult;
    }

    const cardItem = container.deck.cards.find((card) => card.id === id);

    if (!cardItem) {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason: `Unable to find card with id ${id}`,
      };
    }

    getTransformations(language).push(transformation);
    await saveTransformations();

    syncDecks().catch(() => {
      console.error('Sync failed');
    });

    return {
      success: true,
      value: cardItem,
    };
  };

  const removeCard = async (
    language: string,
    id: string
  ): Promise<Result<unknown>> => {
    if (decks.status !== 'loaded') {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason:
          'Unable to remove card while decks are not loaded from the memory yet.',
      };
    }

    const container = decks.value[language] ?? {
      status: 'initial',
      deck: createDefaultLanguageDeck(language),
      selectedTags: [],
    };

    const transformation: LanguageDeckTransformation = {
      type: 'removeCard',
      id,
    };

    const storeResult = await storeDeck({
      ...container,
      deck: applyTransformation(container.deck, transformation),
    });

    if (!storeResult.success) {
      return storeResult;
    }

    getTransformations(language).push(transformation);
    await saveTransformations();

    syncDecks().catch(() => {
      console.error('Sync failed');
    });

    return {
      success: true,
      value: null,
    };
  };

  const addTag = async (
    language: string,
    tag: Tag
  ): Promise<Result<TagItem>> => {
    if (decks.status !== 'loaded') {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason:
          'Unable to add tag while decks are not loaded from the memory yet.',
      };
    }

    const container = decks.value[language] ?? {
      status: 'initial',
      deck: createDefaultLanguageDeck(language),
      selectedTags: [],
      transformations: [],
    };

    // ToDo: make crud operations immutable and change this
    const tagItem = makeCreate([...container.deck.tags])(tag);

    const transformation: LanguageDeckTransformation = {
      type: 'addTag',
      tag: tagItem,
    };

    const storeResult = await storeDeck({
      ...container,
      deck: applyTransformation(container.deck, transformation),
    });

    if (!storeResult.success) {
      return storeResult;
    }

    getTransformations(language).push(transformation);
    await saveTransformations();

    syncDecks().catch(() => {
      console.error('Sync failed');
    });

    return {
      success: true,
      value: tagItem,
    };
  };

  const updateTag = async (
    language: string,
    id: string,
    data: Partial<Tag>
  ): Promise<Result<TagItem>> => {
    if (decks.status !== 'loaded') {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason:
          'Unable to update tag while decks are not loaded from the memory yet.',
      };
    }

    const container = decks.value[language] ?? {
      status: 'initial',
      deck: createDefaultLanguageDeck(language),
      selectedTags: [],
    };

    const transformation: LanguageDeckTransformation = {
      type: 'updateTag',
      id,
      data,
    };

    const storeResult = await storeDeck({
      ...container,
      deck: applyTransformation(container.deck, transformation),
    });

    if (!storeResult.success) {
      return storeResult;
    }

    const tagItem = container.deck.tags.find((tag) => tag.id === id);

    if (!tagItem) {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason: `Unable to find tag with id ${id}`,
      };
    }

    getTransformations(language).push(transformation);
    await saveTransformations();

    syncDecks().catch(() => {
      console.error('Sync failed');
    });

    return {
      success: true,
      value: tagItem,
    };
  };

  const removeTag = async (
    language: string,
    id: string
  ): Promise<Result<unknown>> => {
    if (decks.status !== 'loaded') {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason:
          'Unable to remove tag while decks are not loaded from the memory yet.',
      };
    }

    const container = decks.value[language] ?? {
      status: 'initial',
      deck: createDefaultLanguageDeck(language),
      selectedTags: [],
    };

    const transformation: LanguageDeckTransformation = {
      type: 'removeTag',
      id,
    };

    const storeResult = await storeDeck({
      ...container,
      deck: applyTransformation(container.deck, transformation),
    });

    if (!storeResult.success) {
      return storeResult;
    }

    getTransformations(language).push(transformation);
    await saveTransformations();

    syncDecks().catch(() => {
      console.error('Sync failed');
    });

    return {
      success: true,
      value: null,
    };
  };

  const value: Languages = {
    status: listLoadingStatus,
    languages,
    decks: decks.status === 'loaded' ? decks.value : {},
    storeDeck,
    deleteLanguage,
    selectedLanguage:
      selectedLanguage.status === 'loaded' ? selectedLanguage.value : '',
    selectLanguage,
    syncDecks,
    refreshLanguages,
    addLanguage,
    addNewLanguage,
    addCard,
    updateCard,
    removeCard,
    addTag,
    updateTag,
    removeTag,
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
