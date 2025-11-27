import { AnalysisItem, GoogleLanguage, Result } from '@vocably/model';
import { addArticle } from './addArticle';
import { aiAnalyse } from './aiUnitOfSpeechAnalyse';
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
  const aiAnalyseResult = await aiAnalyse(payload);
  if (aiAnalyseResult.success === false) {
    return aiAnalyseResult;
  }

  let translation = '';

  if (payload.sourceLanguage !== payload.targetLanguage) {
    const translationResult = await translateUnitOfSpeech({
      source: payload.source,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      partOfSpeech: payload.partOfSpeech,
      definitions: aiAnalyseResult.value.definitions,
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
        aiAnalyseResult.value.source,
        payload.partOfSpeech,
        aiAnalyseResult.value
      ),
      translation: translation,
      definitions: aiAnalyseResult.value.definitions,
      examples: aiAnalyseResult.value.examples,
      partOfSpeech: payload.partOfSpeech,
      ipa: aiAnalyseResult.value.transcript,
      g: aiAnalyseResult.value.gender,
    },
  };
};
