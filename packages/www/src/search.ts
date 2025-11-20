import { defineCustomElements } from '@vocably/extension-content-ui/loader';
import { SearchValues } from '@vocably/extension-content-ui/src/components/search-form/types';
import {
  Analysis,
  AnalyzePayload,
  GoogleLanguage,
  Result,
  TranslationCard,
  TranslationCards,
} from '@vocably/model';
import { join } from '@vocably/sulna';
import { isObject } from 'lodash-es';
import { analyze } from './search/analyze';
import { playAudioPronunciation } from './search/playAudioPronunciation';

document.body.classList.add('vocably-extension-disabled');
defineCustomElements();

const isSearchValues = (value: any): value is SearchValues => {
  return (
    isObject(value) &&
    'sourceLanguage' in value &&
    'targetLanguage' in value &&
    'text' in value &&
    'isReversed' in value
  );
};

const searchValuesToAnalyzePayload = (values: SearchValues): AnalyzePayload => {
  if (values.isReversed) {
    return {
      target: values.text,
      sourceLanguage: values.sourceLanguage as GoogleLanguage,
      targetLanguage: values.targetLanguage as GoogleLanguage,
    };
  } else {
    return {
      source: values.text,
      sourceLanguage: values.sourceLanguage as GoogleLanguage,
      targetLanguage: values.targetLanguage as GoogleLanguage,
    };
  }
};

const getInitialSearchValues = (): SearchValues => {
  const params = new URLSearchParams(window.location.search);
  return {
    sourceLanguage: params.get('sourceLanguage') || 'de',
    targetLanguage: params.get('targetLanguage') || 'en',
    text: params.get('text') || '',
    isReversed: params.get('isReversed') === 'true',
  };
};

const saveSearchValues = (searchValues: SearchValues) => {
  const params = new URLSearchParams(window.location.search);
  params.set('sourceLanguage', searchValues.sourceLanguage);
  params.set('targetLanguage', searchValues.targetLanguage);
  params.set('text', searchValues.text);
  params.set('isReversed', searchValues.isReversed.toString());
  window.history.replaceState(
    {},
    '',
    `${window.location.pathname}?${params.toString()}`
  );
};

const searchContainer = document.getElementById('search');
const resultsContainer = document.createElement('div');
resultsContainer.classList.add('results-container');
const searchForm = document.createElement(
  'vocably-search-form'
) as HTMLVocablySearchFormElement;

searchForm.values = getInitialSearchValues();
searchContainer.appendChild(searchForm);
searchContainer.appendChild(resultsContainer);

searchForm.addEventListener('valuesChange', (e) => {
  if (isSearchValues(e.detail)) {
    searchForm.values = e.detail;
  }
});

const createTranslationCards = (
  analyzeResult: Result<Analysis>
): Result<TranslationCards> => {
  if (analyzeResult.success === false) {
    return analyzeResult;
  }

  return {
    success: true,
    value: {
      source: analyzeResult.value.source,
      translation: analyzeResult.value.translation,
      tags: [],
      cards: analyzeResult.value.items.map<TranslationCard>((item) => ({
        data: {
          source: item.source,
          translation: item.translation,
          partOfSpeech: item.partOfSpeech,
          definition: join(item.definitions),
          example: join(item.examples ?? []),
          ipa: item.ipa,
          g: item.g,
          tags: [],
          language: analyzeResult.value.sourceLanguage,
        },
      })),
      explanation: '',
      collectionLength: 0,
      lastAdded: 0,
    },
  };
};

const loadSearchValues = async (searchValues: SearchValues) => {
  resultsContainer.innerHTML = `<div class="text-center" style="font-size:16px;">Generating <vocably-inline-loader></vocably-inline-loader></div>`;

  const analyzeResult = await analyze(
    searchValuesToAnalyzePayload(searchValues)
  );

  const translation = document.createElement(
    'vocably-translation'
  ) as HTMLVocablyTranslationElement;
  translation.classList.add('search-results');
  translation.isLightweight = true;
  translation.showLanguages = false;
  translation.hideChatGpt = true;
  translation.result = createTranslationCards(analyzeResult);
  translation.loading = false;
  translation.playAudioPronunciation = playAudioPronunciation;

  resultsContainer.innerHTML = '';
  resultsContainer.appendChild(translation);
};

searchForm.addEventListener('formSubmit', async (e) => {
  if (isSearchValues(e.detail)) {
    saveSearchValues(e.detail);
  }

  await loadSearchValues(e.detail);
});

searchForm.addEventListener('retry', () => {
  if (isSearchValues(searchForm.values)) {
    loadSearchValues(searchForm.values).then();
  }
});

if (searchForm.values.text.length) {
  loadSearchValues(searchForm.values).then();
}
