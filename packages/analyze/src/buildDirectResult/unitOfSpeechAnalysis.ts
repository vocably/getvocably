import {
  DirectAnalysis,
  Result,
  Translation,
  ValidAnalysisItems,
} from '@vocably/model';

import { analyseAndTranslate } from '../analyseAndTranslate';
import { buildDirectAnalyseBatch } from '../buildDirectAnalyseBatch';
import { buildReverseResult } from '../buildReverseResult';
import { SentenceAnalysisRequest } from '../detectAnalysisType';
import { getPartsOfSpeech } from '../getPartsOfSpeech';
import { googleTranslate } from '../googleTranslate';

export const unitOfSpeechAnalysis = async ({
  source,
  sourceLanguage,
  targetLanguage,
}: SentenceAnalysisRequest): Promise<Result<DirectAnalysis>> => {
  const [languageVerificationResult, translationResult] = await Promise.all([
    googleTranslate(source, null, sourceLanguage),
    googleTranslate(source, null, targetLanguage),
  ]);

  if (languageVerificationResult.success === false) {
    return languageVerificationResult;
  }

  if (translationResult.success === false) {
    return translationResult;
  }

  if (
    languageVerificationResult.value.target.toLowerCase() !==
    source.toLowerCase()
  ) {
    return buildReverseResult({
      target: source,
      sourceLanguage,
      targetLanguage,
    });
  }

  const translation: Translation = {
    source: languageVerificationResult.value.target,
    target: translationResult.value.target,
    sourceLanguage: sourceLanguage,
    targetLanguage: targetLanguage,
  };

  const partsOfSpeechResult = await getPartsOfSpeech({
    source: translation.source,
    language: translation.sourceLanguage,
  });

  const analyseResults = await Promise.all(
    buildDirectAnalyseBatch(
      translationResult.value,
      partsOfSpeechResult.success ? partsOfSpeechResult.value : []
    ).map((payload) => analyseAndTranslate(payload))
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
