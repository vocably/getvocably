import { chatGptRequest, GPT_4O, GPT_4O_MINI } from '@vocably/lambda-shared';
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
import { mapPartOfSpeech } from './gptGetPartsOfSpeech';

type Payload = {
  source: string;
  context: string;
  sourceLanguage: ChatGPTLanguage;
  targetLanguage: GoogleLanguage;
};

type ContextTranslation = {
  source: string;
  target: string;
  lemma: string;
  lemmaPos: string;
  partOfSpeech?: string;
  transcript?: string;
};

const isContextTranslation = (o: any): o is ContextTranslation => {
  return !(!o || !o.target || !o.source || !o.lemma || !o.lemmaPos);
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

  if (source.length >= context.length) {
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

  const isTranscriptionNeeded = source.length <= 20;

  const prompt = [
    `You are a smart language dictionary.`,
    `Use provides two inputs:`,
    `The first input is context sentence`,
    `The second input is substring in that sentence`,
    `Only respond in JSON format with an object containing the following properties:`,
    `- source - the substring translated into ${
      languageList[payload.sourceLanguage]
    }`,
    `- target - the substring translated into${
      languageList[payload.targetLanguage]
    }`,
    `- partOfSpeech - part of speech in English`,
    `- lemma - ${languageList[payload.sourceLanguage]} lemma or infinitive`,
    `- lemmaPos - part of speech of the lemma in English`,
    isTranscriptionNeeded
      ? `- transcript - the ${get(
          transcriptionName,
          payload.sourceLanguage,
          'IPA'
        )} transcription of the ${languageList[payload.sourceLanguage]} source`
      : null,
  ]
    .filter((s) => !!s)
    .join('\n');

  const responseResult = await chatGptRequest({
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: context },
      { role: 'user', content: source },
    ],
    model: payload.sourceLanguage === 'en' ? GPT_4O_MINI : GPT_4O,
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
      partOfSpeech: mapPartOfSpeech(response.partOfSpeech ?? ''),
      transcript: response.transcript,
      lemma: response.lemma,
      lemmaPos: mapPartOfSpeech(response.lemmaPos ?? ''),
    },
  };
};

export const truncateAsIs = (text: string, length: number): string => {
  return text.replace(/[<>]/gm, '').slice(0, length);
};
