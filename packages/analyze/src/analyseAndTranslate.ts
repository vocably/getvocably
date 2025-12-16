import {
  AnalysisItem,
  GoogleLanguage,
  languageList,
  Result,
} from '@vocably/model';
import { sanitizeTranscript } from '@vocably/sulna';
import { addArticle } from './addArticle';
import { aiAnalyse } from './aiUnitOfSpeechAnalyse';
import { translateDefinitionsAndExamples } from './translateDefinitionsAndExamples';
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
  let definitions = aiAnalyseResult.value.definitions;
  let examples = aiAnalyseResult.value.examples;

  if (payload.sourceLanguage !== payload.targetLanguage) {
    const [translationResult, definitionsAndExamplesTranslationResult] =
      await Promise.all([
        translateUnitOfSpeech({
          source: payload.source,
          sourceLanguage: payload.sourceLanguage,
          targetLanguage: payload.targetLanguage,
          partOfSpeech: payload.partOfSpeech,
          definitions: aiAnalyseResult.value.definitions,
        }),
        translateDefinitionsAndExamples({
          definitions,
          examples,
          sourceLanguage: payload.sourceLanguage,
          targetLanguage: payload.targetLanguage,
        }),
      ]);

    if (translationResult.success === false) {
      return translationResult;
    }

    translation = translationResult.value.join(', ');

    if (definitionsAndExamplesTranslationResult.success === true) {
      definitions = definitionsAndExamplesTranslationResult.value.definitions;
      examples = definitionsAndExamplesTranslationResult.value.examples;
    }
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
      definitions: definitions,
      examples: examples,
      partOfSpeech: payload.partOfSpeech,
      ipa: sanitizeTranscript(aiAnalyseResult.value.transcript),
      g: aiAnalyseResult.value.gender,
    },
  };
};
