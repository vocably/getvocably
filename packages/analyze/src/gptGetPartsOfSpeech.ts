import {
  chatGptRequest,
  GPT_4O,
  nodeFetchS3File,
  nodePutS3File,
  OpenAiModel,
} from '@vocably/lambda-shared';
import { GoogleLanguage, languageList, Result } from '@vocably/model';
import { uniq } from 'lodash-es';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';
import { config } from './config';

type PartsOfSpeechPayload = {
  source: string;
  language: GoogleLanguage;
};

type PartsOfSpeechChatGptBody = {
  messages: Array<ChatCompletionMessageParam>;
  model: OpenAiModel;
};

export const getPartsOfSpeechGptBody = ({
  source,
  language,
}: PartsOfSpeechPayload): PartsOfSpeechChatGptBody => {
  const prompt = [
    `You are a smart ${languageList[language]} dictionary`,
    `User provides a word in ${languageList[language]}. Provide its parts of speech`,
    `Only respond in text format with each part of speech in English on a separate line`,
  ]
    .filter((s) => !!s)
    .join('\n');

  return {
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: source },
    ],
    model: GPT_4O,
  };
};

export const parsePartsOfSpeechGptResult = (result: string): string[] => {
  return uniq(
    result
      .split('\n')
      .filter((s: string) => s.length < 25)
      .map((s: string) => s.trim().replace(/^-/, '').trim().toLowerCase())
      .map((pos: string) => {
        if (/substantiv[^,]*/i.test(pos)) {
          return 'noun';
        }

        return pos;
      })
  ) as string[];
};

export const gptGetPartsOfSpeechNoCache = async ({
  source,
  language,
}: PartsOfSpeechPayload): Promise<Result<string[]>> => {
  const responseResult = await chatGptRequest({
    ...getPartsOfSpeechGptBody({ source, language }),
    timeoutMs: 5000,
    responseFormat: {
      type: 'text',
    },
  });

  if (!responseResult.success) {
    return responseResult;
  }

  return {
    success: true,
    value: parsePartsOfSpeechGptResult(responseResult.value),
  };
};

export const getPartsOfSpeechCacheFileName = ({
  source,
  language,
}: PartsOfSpeechPayload): string => {
  return `parts-of-speech/${language.toLowerCase()}/${source.toLowerCase()}.txt`;
};

export const gptGetPartsOfSpeech = async ({
  source,
  language,
}: PartsOfSpeechPayload): Promise<Result<string[]>> => {
  const fileName = getPartsOfSpeechCacheFileName({ source, language });

  const s3FetchResult = await nodeFetchS3File(
    config.unitsOfSpeechBucket,
    fileName
  );

  if (s3FetchResult.success && s3FetchResult.value !== null) {
    const partsOfSpeech = s3FetchResult.value
      .split('\n')
      .filter((s) => s.length > 0);
    return {
      success: true,
      value: partsOfSpeech,
    };
  }

  const partsOfSpeechResult = await gptGetPartsOfSpeechNoCache({
    source,
    language,
  });

  if (!partsOfSpeechResult.success) {
    return partsOfSpeechResult;
  }

  const putResult = await nodePutS3File(
    config.unitsOfSpeechBucket,
    fileName,
    partsOfSpeechResult.value.join('\n')
  );

  if (!putResult.success) {
    console.error(
      'Failed to put GPT parts of speech the result to S3',
      putResult
    );
  }

  return partsOfSpeechResult;
};
