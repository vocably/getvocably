import { chatGptRequest, GPT_4O, GPT_4O_MINI } from '@vocably/lambda-shared';
import { GoogleLanguage, languageList, Result } from '@vocably/model';
import { isSafeObject } from '@vocably/sulna';
import { isArray } from 'lodash-es';

type PartsOfSpeechPayload = {
  source: string;
};

export const partsOfSpeech = async (
  payload: PartsOfSpeechPayload
): Promise<Result<any>> => {
  const prompt = [
    `You are a smart language dictionary`,
    `Return a list of possible parts of speech for the provided word`,
    `Only respond in text format with each part of speech on a separate line`,
  ]
    .filter((s) => !!s)
    .join('\n');

  const responseResult = await chatGptRequest({
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: payload.source },
    ],
    model: GPT_4O_MINI,
    timeoutMs: 5000,
    responseFormat: {
      type: 'text',
    },
  });

  if (!responseResult.success) {
    return responseResult;
  }

  const response = responseResult.value
    .split('\n')
    .map((s: string) => s.trim());

  return {
    success: true,
    value: response,
  };
};

type GptAnalyseResult = {
  definitions: string[];
  examples: string[];
  lemma: string;
  transcript: string;
  synonyms: string[];
};

const isGptAnalyseResult = (result: any): result is GptAnalyseResult => {
  if (!isSafeObject(result)) {
    return false;
  }
  return (
    'definitions' in result &&
    'examples' in result &&
    'lemma' in result &&
    'transcript' in result &&
    'synonyms' in result &&
    isArray(result['definitions']) &&
    isArray(result['examples']) &&
    isArray(result['synonyms'])
  );
};

type GptAnalysePayload = {
  source: string;
  partOfSpeech: string;
  sourceLanguage: GoogleLanguage;
};
export const gptAnalyse = async (
  payload: GptAnalysePayload
): Promise<Result<GptAnalyseResult>> => {
  const isTranscriptionNeeded = payload.source.length <= 20;
  const languageName = languageList[payload.sourceLanguage];

  const prompt = [
    `You are a smart language dictionary.`,
    `User provides a word in ${languageName} and its part of speech.`,
    `Only respond in JSON format with an object containing the following properties:`,
    isTranscriptionNeeded ? `transcript - IPA` : ``,
    `definitions - list of short definitions in ${languageName}`,
    `examples - list of extremely concise examples`,
    `lemma - lemma or infinitive`,
    `synonyms - list of synonyms`,
    `gender - feminine, masculine, neuter, or other`,
  ]
    .filter((s) => !!s)
    .join('\n');

  const responseResult = await chatGptRequest({
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: payload.source },
      { role: 'user', content: payload.partOfSpeech },
    ],
    model: GPT_4O,
    timeoutMs: 100000,
  });

  if (!responseResult.success) {
    return responseResult;
  }

  const response = responseResult.value;

  if (!isGptAnalyseResult(response)) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'The GPT request responded with the malformed response',
      extra: { payload, response },
    };
  }

  return {
    success: true,
    value: response,
  };
};
