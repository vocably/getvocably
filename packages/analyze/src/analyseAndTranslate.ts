import { AnalysisItem, GoogleLanguage, Result } from '@vocably/model';
import { addArticle } from './addArticle';
import { gptAnalyse } from './gptAnalyse';
import { translateUnitOfSpeech } from './translateUnitOfSpeech';

type Payload = {
  source: string;
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  partOfSpeech: string;
};

export const analyseAndTranslate = async (
  payload: Payload
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
        payload.source,
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
