import { chatGptRequest, GPT_4O } from '@vocably/lambda-shared';
import {
  GoogleLanguage,
  languageList,
  Result,
  Translation,
} from '@vocably/model';
import { isSafeObject } from '@vocably/sulna';
import { isArray } from 'lodash-es';
import { mapPartOfSpeech } from './gptGetPartsOfSpeech';

type Payload = {
  target: string;
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
};

type AiTranslationVariant = {
  translation: string;
  partOfSpeech: string;
  transcript: string;
  lemma: string;
  lemmaPos: string;
};

type AiTranslationResult = {
  translations: [AiTranslationVariant, ...AiTranslationVariant[]];
};

type ValidTranslations = [Translation, ...Translation[]];

export const truncateText = (text: string, length: number): string => {
  return text.replace(/[<>]/gm, '').slice(0, length);
};

export const aiReverseTranslate = async (
  payload: Payload
): Promise<Result<ValidTranslations>> => {
  const target = truncateText(payload.target, 100);
  const prompt = [
    `Provide all the possible translations of the ${
      languageList[payload.targetLanguage]
    } word/phrase`,
    `<input>${target}</input>`,
    `into ${languageList[payload.sourceLanguage]}.`,
    `Response in JSON object with translations array. Each item:`,
    `- translation - the translation of the word/phrase`,
    `- partOfSpeech - the part of speech of the translation in English`,
    `- transcript - IPA`,
    `- lemma - lemma of translation`,
    `- lemmaPos - part of speech of lemma in English`,
  ].join('\n');

  const responseResult = await chatGptRequest({
    messages: [
      {
        role: 'system',
        content:
          'You are a smart language assistant. Only respond to questions about vocabulary and translations.',
      },
      { role: 'user', content: prompt },
    ],
    model: GPT_4O,
  });

  if (!responseResult.success) {
    return responseResult;
  }

  const translationData = responseResult.value;

  if (!isValidResult(translationData)) {
    return {
      success: false,
      errorCode: 'OPENAI_UNEXPECTED_RESPONSE',
      reason: `The provided result is not an array of valid AiTranslationVariant objects`,
      extra: translationData,
    };
  }

  const translations = translationData.translations
    .map(sanitizeTranslationVariant(payload))
    .map((translationVariant) => ({
      source: payload.target,
      sourceLanguage: payload.targetLanguage,
      targetLanguage: payload.sourceLanguage,
      target: translationVariant.translation,
      partOfSpeech: mapPartOfSpeech(translationVariant.partOfSpeech ?? ''),
      transcript: translationVariant.transcript,
      lemma: translationVariant.lemma,
      lemmaPos: mapPartOfSpeech(translationVariant.lemmaPos ?? ''),
    }));

  return {
    success: true,
    value: [translations[0], ...translations.slice(1)],
  };
};

const isValidResult = (result: any): result is AiTranslationResult => {
  if (!isSafeObject(result)) {
    return false;
  }

  if (!('translations' in result) || !isArray(result['translations'])) {
    return false;
  }

  return (
    result['translations'].length > 0 &&
    result['translations'].every(isTranslationVariant)
  );
};

const isTranslationVariant = (data: any): data is AiTranslationVariant => {
  return (
    isSafeObject(data) &&
    typeof data['translation'] === 'string' &&
    typeof data['partOfSpeech'] === 'string' &&
    typeof data['lemma'] === 'string' &&
    typeof data['lemmaPos'] === 'string'
  );
};

const sanitizeTranslationVariant =
  (payload: Payload) =>
  (translationVariant: AiTranslationVariant): AiTranslationVariant => {
    if (
      payload.sourceLanguage === 'en' &&
      translationVariant.partOfSpeech === 'verb'
    ) {
      return {
        ...translationVariant,
        translation: translationVariant.translation.replace(/to /i, ''),
        transcript: translationVariant.translation.replace(/tu /i, ''),
      };
    }

    return translationVariant;
  };
