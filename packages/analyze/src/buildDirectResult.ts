import {
  DirectAnalysis,
  DirectAnalyzePayload,
  Result,
  ValidAnalysisItems,
} from '@vocably/model';
import { trimArticle } from '@vocably/sulna';
import { analyseAndTranslate } from './analyseAndTranslate';
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

  const translationResult = await translate(payloadWithoutArticle);
  if (translationResult.success === false) {
    return translationResult;
  }

  if (!isLexeme(translationResult.value.partOfSpeech ?? '')) {
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
    translationResult.value.lemma?.toLowerCase()
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

  const lemmaAnalyse = analyseAndTranslate({
    source: translationResult.value.lemma ?? '',
    sourceLanguage: translationResult.value.sourceLanguage,
    targetLanguage: translationResult.value.targetLanguage,
    partOfSpeech: translationResult.value.partOfSpeech ?? '',
  });

  const sourceAnalyseResult = await sourceAnalyse;
  const lemmaAnalyseResult = await lemmaAnalyse;

  const resultItems: ValidAnalysisItems = [
    translationToAnalysisItem(translationResult.value),
  ];

  if (sourceAnalyseResult.success === true) {
    resultItems[0] = sourceAnalyseResult.value;
  }

  if (lemmaAnalyseResult.success === true) {
    resultItems.push(lemmaAnalyseResult.value);
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
};
