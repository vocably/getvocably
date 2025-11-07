import { AnalysisItem, GoogleLanguage, Result } from '@vocably/model';
import { addArticle } from './addArticle';
import { gptAnalyse } from './gptAnalyse';
import { translateUnitOfSpeech } from './translateUnitOfSpeech';

export type AnalyseAndTranslatePayload = {
  source: string;
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  partOfSpeech: string;
};

export const analyseAndTranslate = async (
  payload: AnalyseAndTranslatePayload
): Promise<Result<AnalysisItem>> => {
  const gptAnalyseResult = await gptAnalyse(payload);
  if (gptAnalyseResult.success === false) {
    return gptAnalyseResult;
  }

  let translation = '';

  if (payload.sourceLanguage !== payload.targetLanguage) {
    const translationResult = await translateUnitOfSpeech({
      source: payload.source,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      partOfSpeech: payload.partOfSpeech,
      definitions: gptAnalyseResult.value.definitions,
    });

    if (translationResult.success === false) {
      return translationResult;
    }

    translation = translationResult.value.join(', ');
  }

  return {
    success: true,
    value: {
      source: addArticle(
        payload.sourceLanguage as GoogleLanguage,
        gptAnalyseResult.value.source,
        payload.partOfSpeech,
        gptAnalyseResult.value
      ),
      translation: translation,
      definitions: gptAnalyseResult.value.definitions,
      examples: gptAnalyseResult.value.examples,
      partOfSpeech: payload.partOfSpeech,
      ipa: gptAnalyseResult.value.transcript,
      g: gptAnalyseResult.value.gender,
    },
  };
};
