import {
  chatGptRequest,
  GPT_4O,
  GPT_4O_MINI,
  OpenAiModel,
} from '@vocably/lambda-shared';
import {
  ChatGPTLanguage,
  GoogleLanguage,
  languageList,
  Result,
  Translation,
} from '@vocably/model';
import { get } from 'lodash-es';
import { isAiTranslation } from './aiDirectTranslateConstants';
import { fallback } from './fallback';

type Payload = {
  source: string;
  sourceLanguage: ChatGPTLanguage;
  targetLanguage: GoogleLanguage;
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

const internalAiDirectTranslate = async (
  payload: Payload,
  model: OpenAiModel
): Promise<Result<Translation>> => {
  const source = truncateAsIs(payload.source, 500);

  const transcriptionIsNeeded = payload.source.length <= 20;

  const prompt = [
    `You are a smart language dictionary.`,
    `Only respond in JSON format with an object containing the following properties:`,
    `- source - the user input in ${
      languageList[payload.sourceLanguage]
    } spelling fixed.`,
    `- target - the user input translated into${
      languageList[payload.targetLanguage]
    }`,
    `- partOfSpeech`,
    `- lemma - ${languageList[payload.sourceLanguage]} lemma or infinitive`,
    `- lemmaPos - part of speech of the lemma`,
    transcriptionIsNeeded
      ? `- transcript - the ${get(
          transcriptionName,
          payload.sourceLanguage,
          'IPA'
        )} transcription of the ${languageList[payload.sourceLanguage]} source`
      : null,
    `User provides a string in any language.`,
  ]
    .filter((s) => !!s)
    .join('\n');

  const responseResult = await chatGptRequest({
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: source },
    ],
    model,
    timeoutMs: 3000,
  });

  if (!responseResult.success) {
    return responseResult;
  }

  const response = responseResult.value;

  if (!isAiTranslation(response)) {
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
      target: response.target,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      partOfSpeech: response.partOfSpeech,
      transcript: response.transcript,
      lemma: response.lemma,
      lemmaPos: response.lemmaPos,
    },
  };
};

export const aiDirectTranslate = async (
  payload: Payload
): Promise<Result<Translation>> => {
  return fallback(internalAiDirectTranslate(payload, GPT_4O), () =>
    internalAiDirectTranslate(payload, GPT_4O_MINI)
  );
};

export const truncateAsIs = (text: string, length: number): string => {
  return text.replace(/[<>]/gm, '').slice(0, length);
};
