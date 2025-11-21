import { DirectAnalysis, Result, Translation } from '@vocably/model';

import { SentenceAnalysisRequest } from '../detectAnalysisType';
import { detectInputTypeGemini } from '../detectInputTypeGemini';
import { googleTranslate } from '../googleTranslate';
import { translationToAnalysisItem } from '../translationToAnalyzeItem';

export const sentenceAnalysis = async ({
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

  const translation: Translation = {
    source: languageVerificationResult.value.target,
    target: translationResult.value.target,
    sourceLanguage: sourceLanguage,
    targetLanguage: targetLanguage,
  };

  const inputTypeResult = await detectInputTypeGemini({
    source: translation.source,
    language: translation.sourceLanguage,
  });

  const pos =
    inputTypeResult.success === true
      ? inputTypeResult.value === 'other'
        ? ''
        : inputTypeResult.value
      : '';

  return {
    success: true,
    value: {
      source: source,
      sourceLanguage: translation.sourceLanguage,
      targetLanguage: translation.targetLanguage,
      translation,
      items: [translationToAnalysisItem(translation)],
    },
  };
};
