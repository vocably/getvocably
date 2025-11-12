import { useEffect, useRef } from 'react';
import * as asyncAppStorage from '../asyncAppStorage';
import { LanguageDeckTransformation } from '../deckTransformations';
import { useAsync } from '../useAsync';

type TransformationsCollection = {
  [language: string]: LanguageDeckTransformation[];
};

const loadTransformationsFromStorage =
  async (): Promise<TransformationsCollection> => {
    const collection = await asyncAppStorage.getItem('languageTransformations');

    if (!collection) {
      return {};
    }

    return JSON.parse(collection);
  };

const saveTransformationsToStorage = async (
  collection: TransformationsCollection
) => {
  await asyncAppStorage.setItem(
    'languageTransformations',
    JSON.stringify(collection)
  );
};

type Return = {
  areLoaded: boolean;
  getTransformations: (language: string) => LanguageDeckTransformation[];
  saveTransformations: () => Promise<void>;
  deleteTransformations: (language: string) => Promise<void>;
};

export const useLanguageTransformations = (): Return => {
  const [transformationsResult] = useAsync(loadTransformationsFromStorage);
  const transformationsRef = useRef<TransformationsCollection>({});

  useEffect(() => {
    if (transformationsResult.status === 'loaded') {
      transformationsRef.current = {
        ...transformationsRef.current,
        ...transformationsResult.value,
      };
    }
  }, [transformationsResult.status]);

  return {
    areLoaded: transformationsResult.status === 'loaded',
    getTransformations: (language: string) => {
      if (!transformationsRef.current[language]) {
        transformationsRef.current[language] = [];
      }

      return transformationsRef.current[language];
    },
    saveTransformations: () =>
      saveTransformationsToStorage(transformationsRef.current),
    deleteTransformations: (language: string) => {
      transformationsRef.current[language] = [];
      return saveTransformationsToStorage(transformationsRef.current);
    },
  };
};
