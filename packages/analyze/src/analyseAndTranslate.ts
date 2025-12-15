import {
  AnalysisItem,
  GoogleLanguage,
  languageList,
  Result,
} from '@vocably/model';
import { sanitizeTranscript } from '@vocably/sulna';
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

  if (aiAnalyseResult.value.exists === false) {
    return {
      success: false,
      reason: `The requested word/phrase "${
        payload.source
      }" does not exist in ${
        languageList[payload.sourceLanguage]
      } (according to AI).`,
    };
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
      ipa: sanitizeTranscript(aiAnalyseResult.value.transcript),
      g: aiAnalyseResult.value.gender,
    },
  };
};
