import { chatGptRequest, GPT_4O_MINI } from '@vocably/lambda-shared';
import {
  ChatGPTLanguage,
  ChatGPTLanguages,
  GoogleLanguage,
  languageList,
  Result,
  Translation,
} from '@vocably/model';
import { tokenize } from '@vocably/sulna';
import { get } from 'lodash-es';

type Payload = {
  source: string;
  context: string;
  sourceLanguage: ChatGPTLanguage;
  targetLanguage: GoogleLanguage;
};

type ContextTranslation = {
  source: string;
  target: string;
  partOfSpeech?: string;
  transcript?: string;
};

const isContextTranslation = (o: any): o is ContextTranslation => {
  return !(!o || !o.target || !o.source);
};

export const isContextPayload = (o: any): o is Payload => {
  return (
    !(
      !o ||
      !o.source ||
      !o.context ||
      !o.sourceLanguage ||
      !o.targetLanguage
    ) && ChatGPTLanguages.includes(o.sourceLanguage)
  );
};

export const itMakesSense = (p: Payload): boolean => {
  const source = tokenize(p.source);
  const context = tokenize(p.context);

  if (source.length === 0 || context.length === 0) {
    return false;
  }

  if (source.length > 3) {
    return false;
  }

  return true;
};

const transcriptionName = {
  zh: 'pinyin',
  'zh-TW': 'pinyin',
  ja: 'romaji',
  ko: 'hangul',
  vi: 'vietnamese',
  th: 'thai',
  id: 'indonesian',
  ms: 'malay',
  my: 'burmese',
  hi: 'hindi',
  ar: 'arabic',
};

export const translateFromContext = async (
  payload: Payload
): Promise<Result<Translation>> => {
  const source = truncateAsIs(payload.source, 400);
  const context = truncateAsIs(payload.context, 400).replace(/\n/g, ' ');

  const prompt = [
    `You are a smart language dictionary.`,
    `Use provides a substring and its context separated by new line character.`,
    `Only respond in JSON format with an object containing the following properties:`,
    `- source - the substring translated into ${
      languageList[payload.sourceLanguage]
    }`,
    `- target - the substring translated into${
      languageList[payload.targetLanguage]
    }`,
    `- partOfSpeech`,
    `- transcript - the ${get(
      transcriptionName,
      payload.sourceLanguage,
      'IPA'
    )} transcription of the ${languageList[payload.sourceLanguage]} source`,
  ].join('\n');

  const responseResult = await chatGptRequest({
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: `${source}\n${context}` },
    ],
    model: GPT_4O_MINI,
    timeoutMs: 5000,
  });

  if (!responseResult.success) {
    return responseResult;
  }

  const response = responseResult.value;

  if (!isContextTranslation(response)) {
    return {
      success: false,
      errorCode: 'OPENAI_UNEXPECTED_RESPONSE',
      reason: `Unexpected response from analyzer: ${JSON.stringify(response)}`,
    };
  }

  return {
    success: true,
    value: {
      source: response.source,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      target: response.target,
      partOfSpeech: response.partOfSpeech,
      transcript: response.transcript,
    },
  };
};

export const truncateAsIs = (text: string, length: number): string => {
  return text.replace(/[<>]/gm, '').slice(0, length);
};
