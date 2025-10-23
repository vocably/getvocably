import {
  DirectAnalyzePayload,
  isChatGPTLanguage,
  Translation,
} from '@vocably/model';
import { translatePartOfSpeech } from './translatePartOfSpeech';
import { translateUnitOfSpeech } from './translateUnitOfSpeech';

type TranslateOptions = {
  source: string;
  partOfSpeech: string;
  originalTranslation: Translation;
  payload: DirectAnalyzePayload;
  definitions: string[];
};
export const translateWordDictionaryItem = async ({
  source,
  partOfSpeech,
  originalTranslation,
  payload,
  definitions,
}: TranslateOptions): Promise<string> => {
  if (payload.sourceLanguage === payload.targetLanguage) {
    return '';
  }

  if (
    definitions.length > 0 &&
    isChatGPTLanguage(payload.sourceLanguage) &&
    isChatGPTLanguage(payload.targetLanguage)
  ) {
    const translationResult = await translateUnitOfSpeech({
      // @ts-ignore
      sourceLanguage: payload.sourceLanguage,
      // @ts-ignore
      targetLanguage: payload.targetLanguage,
      source,
      partOfSpeech,
      definitions,
    });

    if (translationResult.success === true) {
      return translationResult.value.join(', ');
    }
  }

  const translationResult = await translatePartOfSpeech({
    source,
    partOfSpeech,
    originalTranslation: originalTranslation,
  });

  if (translationResult.success === false) {
    return '';
  }

  return translationResult.value.target;
};
