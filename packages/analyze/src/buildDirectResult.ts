import {
  DirectAnalysis,
  DirectAnalyzePayload,
  isAiTranslation,
  Result,
  Translation,
  ValidAnalysisItems,
} from '@vocably/model';
import { trimArticle } from '@vocably/sulna';
import { analyseAndTranslate } from './analyseAndTranslate';
import { buildDirectAnalyseBatch } from './buildDirectAnalyseBatch';
import { contextAnalysis } from './buildDirectResult/contextAnalysis';
import { reverseAnalysis } from './buildDirectResult/reverseAnalysis';
import { sentenceAnalysis } from './buildDirectResult/sentenceAnalysis';
import { detectAnalysisType } from './detectAnalysisType';
import { getPartsOfSpeechGpt } from './getPartsOfSpeechGpt';
import { isIndependentUnitOfSpeech } from './isIndependentUnitOfSpeech';
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

  const detectedAnalysisType = detectAnalysisType(payload);

  if (detectedAnalysisType.type === 'reverse-translate') {
    return reverseAnalysis(detectedAnalysisType);
  }

  if (detectedAnalysisType.type === 'context-analysis') {
    return contextAnalysis(detectedAnalysisType);
  }

  if (detectedAnalysisType.type === 'sentence-analysis') {
    return sentenceAnalysis(detectedAnalysisType);
  }

  if (detectedAnalysisType.type === 'unit-of-speech-analysis') {
  }

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
      : getPartsOfSpeechGpt({
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
    !isAiTranslation(translationResult.value) ||
    !isIndependentUnitOfSpeech(translationResult.value.partOfSpeech)
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

  const analyseResults = await Promise.all(
    buildDirectAnalyseBatch({
      translation: translationResult.value,
      partsOfSpeech: partsOfSpeechResult.success
        ? partsOfSpeechResult.value
        : [],
    }).map((payload) => analyseAndTranslate(payload))
  );

  const resultItems: ValidAnalysisItems = [
    translationToAnalysisItem(translationResult.value),
  ];

  if (analyseResults[0].success === true) {
    resultItems[0] = analyseResults[0].value;
  }

  analyseResults.slice(1).forEach((result) => {
    if (result.success === false) {
      return;
    }

    resultItems.push(result.value);
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
