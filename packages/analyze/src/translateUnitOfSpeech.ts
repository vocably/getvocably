import { createUserContent, GoogleGenAI } from '@google/genai';
import { parseJson } from '@vocably/api';
import {
  chatGptRequest,
  GPT_4O,
  nodeFetchS3File,
  nodePutS3File,
} from '@vocably/lambda-shared';
import {
  ChatGPTLanguage,
  languageList,
  Result,
  resultify,
} from '@vocably/model';
import { tokenize } from '@vocably/sulna';
import { isArray, uniq } from 'lodash-es';
import { config } from './config';
import { fallback } from './fallback';

type Payload = {
  sourceLanguage: ChatGPTLanguage;
  targetLanguage: ChatGPTLanguage;
  partOfSpeech: string;
  source: string;
  definitions?: string[];
};

export const translateUnitOfSpeechGemini = async ({
  sourceLanguage,
  targetLanguage,
  source,
  partOfSpeech,
  definitions = [],
}: Payload): Promise<Result<string[]>> => {
  const genAI = new GoogleGenAI({
    apiKey: config.geminiApiKey,
  });

  const safeSourceLanguage = languageList[sourceLanguage];
  const safeTargetLanguage = languageList[targetLanguage];

  const result = await resultify(
    genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: createUserContent([source, ...definitions]),
      config: {
        systemInstruction: [
          `You are ${safeSourceLanguage}-${safeTargetLanguage} dictionary`,
          `User provides ${safeSourceLanguage} ${partOfSpeech}${
            definitions?.length > 0 ? ' and its definitions' : ''
          }.`,
          `Give several relevant translations into ${safeTargetLanguage}${
            definitions?.length > 0 ? ' in the context of definitions' : ''
          }.`,
          `Respond in JSON array with each translation on a separate line`,
          partOfSpeech.includes('verb')
            ? `Consider tense of the provided ${partOfSpeech}`
            : '',
          `Omit explanations`,
          `Sort results by commonality`,
        ],
        thinkingConfig: {
          thinkingBudget: 0, // Disables thinking
        },
        temperature: 0,
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

  if (!isArray(parseResult.value)) {
    return {
      success: false,
      reason: `The provided result is not an array`,
      extra: {
        result: result.value.text,
      },
    };
  }

  const translations = uniq(
    parseResult.value.map((r) => r.toString().trim()).filter((r) => !!r)
  ) as string[];

  if (translations.length === 0) {
    return {
      success: false,
      reason: `The translations list is empty`,
      extra: {
        result: result.value.text,
      },
    };
  }

  return {
    success: true,
    value: translations,
  };
};

export const translateUnitOfSpeechChatGpt = async ({
  sourceLanguage,
  targetLanguage,
  source,
  partOfSpeech,
}: Payload): Promise<Result<string[]>> => {
  const safeSource = tokenize(source).join(' ');
  const safeSourceLanguage = languageList[sourceLanguage];
  const safeTargetLanguage = languageList[targetLanguage];

  const prompt = [
    `Give minimum translations of the ${safeSourceLanguage} ${partOfSpeech} "${safeSource}" into ${safeTargetLanguage}`,
    `Only respond in text format with each translation on a separate line`,
    partOfSpeech.includes('verb') ? `Consider tense of the provided word` : '',
    `Omit explanations`,
    `Sort results by commonality`,
  ].join('\n');

  const result = await chatGptRequest({
    messages: [
      {
        role: 'system',
        content:
          'You are a smart language assistant. Only respond to questions about vocabulary and translations.',
      },
      { role: 'user', content: prompt },
    ],
    model: GPT_4O,
    responseFormat: {
      type: 'text',
    },
  });

  if (result.success === false) {
    return result;
  }

  if (!result.success) {
    return result;
  }

  const translations = uniq(
    result.value
      .split('\n')
      .map((s: string) => s.trim().replace(/^-/, '').trim().toLowerCase())
      .map((pos: string) => {
        if (/substantiv[^,]*/i.test(pos)) {
          return 'noun';
        }

        return pos;
      })
  ) as string[];

  return {
    success: true,
    value: translations,
  };
};

export const translateUnitOfSpeechNoCache = async (
  payload: Payload
): Promise<Result<string[]>> => {
  return fallback(translateUnitOfSpeechChatGpt(payload), () =>
    translateUnitOfSpeechGemini(payload)
  );
};

export const translateUnitOfSpeech = async (
  payload: Payload
): Promise<Result<string[]>> => {
  const fileName = `${payload.sourceLanguage.toLowerCase()}/translations/${payload.source.toLowerCase()}/${payload.partOfSpeech.toLowerCase()}/${payload.targetLanguage.toLowerCase()}.txt`;
  const s3FetchResult = await nodeFetchS3File(
    config.unitsOfSpeechBucket,
    fileName
  );

  if (s3FetchResult.success && s3FetchResult.value !== null) {
    const translations = s3FetchResult.value.split('\n').filter((s) => !!s);

    return {
      success: true,
      value: translations,
    };
  }

  const translationResult = await translateUnitOfSpeechNoCache(payload);

  if (!translationResult.success) {
    return translationResult;
  }

  const putResult = await nodePutS3File(
    config.unitsOfSpeechBucket,
    fileName,
    translationResult.value.join('\n')
  );

  if (!putResult.success) {
    console.error('Failed to put the translation result to S3', putResult);
  }

  return translationResult;
};
