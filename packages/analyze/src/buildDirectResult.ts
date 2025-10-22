import {
  DirectAnalysis,
  DirectAnalyzePayload,
  Result,
  ValidAnalysisItems,
} from '@vocably/model';
import { trimArticle } from '@vocably/sulna';
import { analyseAndTranslate } from './analyseAndTranslate';
import { getPartsOfSpeech } from './gptAnalyse';
import { isLexeme } from './isLexeme';
import { sanitizePayload } from './sanitizePayload';
import { translate } from './translate';
import { translationToAnalysisItem } from './translationToAnalyzeItem';

type Options = {
  payload: DirectAnalyzePayload;
};

export const buildDirectResult = async ({
  payload: rawPayload,
}: Options): Promise<Result<DirectAnalysis>> => {
  const payload = sanitizePayload(rawPayload);

  const payloadWithoutArticle = {
    ...payload,
    source: trimArticle(payload.sourceLanguage, payload.source).source,
  };

  const [translationResult, partsOfSpeechResult] = await Promise.all([
    translate(payloadWithoutArticle),
    getPartsOfSpeech({
      source: payloadWithoutArticle.source,
      language: payload.sourceLanguage,
    }),
  ]);

  if (translationResult.success === false) {
    return translationResult;
  }

  if (
    !isLexeme(translationResult.value.partOfSpeech ?? '') ||
    !translationResult.value.lemma
  ) {
    return {
      success: true,
      value: {
        source: payload.source,
        targetLanguage: payload.targetLanguage,
        sourceLanguage: payload.sourceLanguage,
        translation: translationResult.value,
        items: [translationToAnalysisItem(translationResult.value)],
      },
    };
  }

  const sourceAnalyse = analyseAndTranslate({
    source: translationResult.value.source,
    sourceLanguage: translationResult.value.sourceLanguage,
    targetLanguage: translationResult.value.targetLanguage,
    partOfSpeech: translationResult.value.partOfSpeech ?? '',
  });

  if (
    translationResult.value.source.toLowerCase() ===
      translationResult.value.lemma?.toLowerCase() &&
    partsOfSpeechResult.success &&
    partsOfSpeechResult.value.length === 1
  ) {
    const sourceAnalyseResult = await sourceAnalyse;
    const resultItems: ValidAnalysisItems = [
      translationToAnalysisItem(translationResult.value),
    ];

    if (sourceAnalyseResult.success === true) {
      resultItems[0] = sourceAnalyseResult.value;
    }

    return {
      success: true,
      value: {
        source: payload.source,
        targetLanguage: payload.targetLanguage,
        sourceLanguage: payload.sourceLanguage,
        translation: translationResult.value,
        items: resultItems,
      },
    };
  }

  const lemmasRequests = (
    partsOfSpeechResult.success
      ? partsOfSpeechResult.value
      : [translationResult.value.partOfSpeech ?? '']
  )
    .filter((partOfSpeech) => {
      if (
        partOfSpeech === translationResult.value.partOfSpeech &&
        translationResult.value.source.toLowerCase() ===
          translationResult.value.lemma?.toLowerCase()
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (a === translationResult.value.partOfSpeech) {
        return -1;
      }

      if (b === translationResult.value.partOfSpeech) {
        return 1;
      }

      return 0;
    })
    .map(async (partOfSpeech) => {
      return analyseAndTranslate({
        source: translationResult.value.lemma ?? '',
        sourceLanguage: translationResult.value.sourceLanguage,
        targetLanguage: translationResult.value.targetLanguage,
        partOfSpeech,
      });
    });

  const sourceAnalyseResult = await sourceAnalyse;
  const lemmaAnalyseResults = await Promise.all(lemmasRequests);

  const resultItems: ValidAnalysisItems = [
    translationToAnalysisItem(translationResult.value),
  ];

  if (sourceAnalyseResult.success === true) {
    resultItems[0] = sourceAnalyseResult.value;
  }

  lemmaAnalyseResults.forEach((lemmaAnalyseResult) => {
    if (lemmaAnalyseResult.success === true) {
      resultItems.push(lemmaAnalyseResult.value);
    }
  });

  return {
    success: true,
    value: {
      source: payload.source,
      targetLanguage: payload.targetLanguage,
      sourceLanguage: payload.sourceLanguage,
      translation: translationResult.value,
      items: resultItems,
    },
  };
};
