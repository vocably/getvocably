import { createUserContent, GoogleGenAI } from '@google/genai';
import { parseJson } from '@vocably/api';
import { chatGptRequest, GPT_4O } from '@vocably/lambda-shared';
import {
  GoogleLanguage,
  languageList,
  Result,
  resultify,
  Translation,
} from '@vocably/model';
import { isSafeObject } from '@vocably/sulna';
import { get, isArray } from 'lodash-es';
import { config } from './config';
import { fallback } from './fallback';
import { getTranscriptionName } from './getTranscriptionName';
import { sanitizePartOfSpeech } from './sanitizePartOfSpeech';
import { sanitizeTranscript } from './sanitizeTranscript';

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

type AiTranslationResult = [AiTranslationVariant, ...AiTranslationVariant[]];
type ValidTranslations = [Translation, ...Translation[]];

export const truncateText = (text: string, length: number): string => {
  return text.replace(/[<>]/gm, '').slice(0, length);
};

const translateWithGemini = async (
  payload: Payload
): Promise<Result<AiTranslationResult>> => {
  const genAI = new GoogleGenAI({
    apiKey: config.geminiApiKey,
  });

  const target = truncateText(payload.target, 100);

  const result = await resultify(
    genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: createUserContent(target),
      config: {
        systemInstruction: [
          `User provides a word or phrase in ${
            languageList[payload.targetLanguage]
          }.`,
          `Provide all the possible translations into ${
            languageList[payload.sourceLanguage]
          }.`,
          `Response JSON array. Each item:`,
          `- translation - the translation of the word/phrase`,
          `- partOfSpeech - the part of speech of the translation in English`,
          `- transcript - ${getTranscriptionName(payload.sourceLanguage)}`,
          `- lemma - lemma of translation`,
          `- lemmaPos - part of speech of lemma in English`,
        ],
        thinkingConfig: {
          thinkingBudget: 0, // Disables thinking
        },
        responseMimeType: 'application/json',
      },
    }),
    {
      reason: 'Unable to perform Gemini translation.',
    }
  );

  if (!result.success) {
    return result;
  }

  const parseResult = parseJson(result.value.text ?? '');

  if (!parseResult.success) {
    return parseResult;
  }

  return sanitizeModelResponse(parseResult.value);
};

const translateWithChatGpt = async (
  payload: Payload
): Promise<Result<AiTranslationResult>> => {
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

  return sanitizeModelResponse(translationData);
};

export const aiReverseTranslate = async (
  payload: Payload
): Promise<Result<ValidTranslations>> => {
  const result = await fallback(translateWithGemini(payload), () =>
    translateWithChatGpt(payload)
  );

  if (!result.success) {
    return result;
  }

  const translations = result.value
    .map(sanitizeTranslationVariant(payload))
    .map((translationVariant) => ({
      source: payload.target,
      sourceLanguage: payload.targetLanguage,
      targetLanguage: payload.sourceLanguage,
      target: translationVariant.translation,
      partOfSpeech: sanitizePartOfSpeech(translationVariant.partOfSpeech ?? ''),
      transcript: sanitizeTranscript(translationVariant.transcript),
      lemma: translationVariant.lemma,
      lemmaPos: sanitizePartOfSpeech(translationVariant.lemmaPos ?? ''),
    }));

  return {
    success: true,
    value: [translations[0], ...translations.slice(1)],
  };
};

const sanitizeModelResponse = (data: any): Result<AiTranslationResult> => {
  const translationCandidates = isArray(data)
    ? data
    : get(data, 'translations');

  if (!isArray(translationCandidates)) {
    return {
      success: false,
      reason: `The provided result is not an array`,
      extra: { data },
    };
  }

  const translationVariants =
    translationCandidates.filter(isTranslationVariant);

  if (translationCandidates.length === 0) {
    return {
      success: false,
      reason: `There are no valid translation variants`,
      extra: { data },
    };
  }

  return {
    success: true,
    value: [translationVariants[0], ...translationVariants.slice(1)],
  };
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
        transcript: translationVariant.transcript.replace(/tu /i, ''),
      };
    }

    return translationVariant;
  };
