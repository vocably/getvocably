import { DirectAnalysis, Result, Translation } from '@vocably/model';

import { SentenceAnalysisRequest } from '../detectInputType';
import { googleTranslate } from '../googleTranslate';
import { translationToAnalysisItem } from '../translationToAnalyzeItem';

export const sentenceAnalysis = async ({
  source,
  sourceLanguage,
  targetLanguage,
  inputType,
  isDirect,
}: SentenceAnalysisRequest): Promise<Result<DirectAnalysis>> => {
  const [
    translationIntoSourceLanguageResult,
    translationIntoTargetLanguageResult,
  ] = await Promise.all([
    googleTranslate(source, null, sourceLanguage),
    googleTranslate(source, null, targetLanguage),
  ]);

  if (translationIntoSourceLanguageResult.success === false) {
    return translationIntoSourceLanguageResult;
  }

  if (translationIntoTargetLanguageResult.success === false) {
    return translationIntoTargetLanguageResult;
  }

  const translation: Translation = {
    source: source,
    target: isDirect
      ? translationIntoTargetLanguageResult.value.target
      : translationIntoSourceLanguageResult.value.target,
    sourceLanguage: sourceLanguage,
    targetLanguage: targetLanguage,
  };

  return {
    success: true,
    value: {
      source: source,
      sourceLanguage: translation.sourceLanguage,
      targetLanguage: translation.targetLanguage,
      translation,
      items: [
        {
          ...translationToAnalysisItem({
            source: isDirect
              ? source
              : translationIntoSourceLanguageResult.value.target,
            target: translationIntoTargetLanguageResult.value.target,
            sourceLanguage: sourceLanguage,
            targetLanguage: targetLanguage,
          }),
          partOfSpeech: inputType,
        },
      ],
    },
  };
};
