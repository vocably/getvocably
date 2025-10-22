import {
  DirectAnalysis,
  DirectAnalyzePayload,
  Result,
  Translation,
  ValidAnalysisItems,
} from '@vocably/model';
import { trimArticle } from '@vocably/sulna';
import { analyseAndTranslate } from './analyseAndTranslate';
import { gptGetPartsOfSpeech } from './gptGetPartsOfSpeech';
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
    payload.partOfSpeech
      ? Promise.resolve({
          success: true,
          value: [payload.partOfSpeech],
        })
      : gptGetPartsOfSpeech({
          source: payloadWithoutArticle.source,
          language: payload.sourceLanguage,
        }),
  ]);

  if (translationResult.success === false) {
    return translationResult;
  }

  // This is needed to output good results in the browser extension
  // when a user looks up from a language that they don't learn
  const directTranslation: Translation =
    trimArticle(payload.sourceLanguage, payload.source).source.toLowerCase() ===
    trimArticle(
      payload.sourceLanguage,
      translationResult.value.source
    ).source.toLowerCase()
      ? translationResult.value
      : {
          ...translationResult.value,
          source: payload.source,
          target: translationResult.value.source,
        };

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
        translation: directTranslation,
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
        translation: directTranslation,
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
        source:
          translationResult.value.partOfSpeech === partOfSpeech
            ? translationResult.value.lemma ?? ''
            : translationResult.value.source,
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
      translation: directTranslation,
      items: resultItems,
    },
  };
};
