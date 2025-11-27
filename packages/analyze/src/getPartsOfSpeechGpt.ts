import { chatGptRequest, GPT_4O } from '@vocably/lambda-shared';
import { languageList, Result } from '@vocably/model';
import { isArray } from 'lodash-es';
import { GetPartsOfSpeechPayload, PartOfSpeechGpt } from './getPartsOfSpeech';

const isGptPartOfSpeech = (v: any): v is PartOfSpeechGpt => {
  return (
    typeof v['source'] === 'string' &&
    typeof v['partOfSpeech'] === 'string' &&
    typeof v['lemma'] === 'string' &&
    typeof v['lemmaPos'] === 'string'
  );
};

export const mapPartOfSpeech = (pos: string): string => {
  const prepared = pos.trim().replace(/^-/, '').trim().toLowerCase();

  if (/substantiv[^,]*/i.test(prepared)) {
    return 'noun';
  }

  return prepared;
};

export const getPartsOfSpeechGpt = async ({
  source,
  language,
}: GetPartsOfSpeechPayload): Promise<Result<PartOfSpeechGpt[]>> => {
  const prompt = [
    `You are a smart ${languageList[language]} dictionary`,
    `User provides a word`,
    `Detect the possible parts of speech of the word and response with an array`,
    `Each element of array is a json object that must contain the following fields:`,
    `- source - the word or phrase in ${languageList[language]} spelling fixed.`,
    `- partOfSpeech - the part of speech of the word or phrase in English`,
    `- lemma - lemma of the word or phrase`,
    `- lemmaPos - part of speech of the lemma in English`,
  ]
    .filter((s) => !!s)
    .join('\n');

  const responseResult = await chatGptRequest({
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: source },
    ],
    model: GPT_4O,
    timeoutMs: 5000,
    responseFormat: {
      type: 'json_object',
    },
  });

  if (!responseResult.success) {
    return responseResult;
  }

  if (isGptPartOfSpeech(responseResult.value)) {
    return {
      success: true,
      value: [responseResult.value],
    };
  }

  if (!isArray(responseResult.value)) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'The GPT request responded with the malformed response',
    };
  }

  const analysisItems = responseResult.value.filter(isGptPartOfSpeech);
  if (analysisItems.length === 0) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'No valid analysis items returned from Gemini',
    };
  }

  return {
    success: true,
    value: analysisItems,
  };
};
