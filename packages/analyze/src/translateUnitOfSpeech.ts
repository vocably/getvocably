import {
  chatGptRequest,
  GPT_4O,
  nodeFetchS3File,
  nodePutS3File,
} from '@vocably/lambda-shared';
import { ChatGPTLanguage, languageList, Result } from '@vocably/model';
import { tokenize } from '@vocably/sulna';
import { uniq } from 'lodash-es';
import { config } from './config';

type Payload = {
  sourceLanguage: ChatGPTLanguage;
  targetLanguage: ChatGPTLanguage;
  partOfSpeech: string;
  source: string;
};
export const translateUnitOfSpeechNoCache = async ({
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
    partOfSpeech.includes('verb') ? `Consider tense of the provided word` : '',
  ].join('\n');

  const result = await chatGptRequest({
    messages: [
      {
        role: 'system',
        content: [
          'You are a smart translator.',
          `Only respond in text format with each translation on a separate line`,
          `Omit explanations`,
          `Sort results by commonality`,
        ].join('\n'),
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

export const translateUnitOfSpeech = async (
  payload: Payload
): Promise<Result<string[]>> => {
  const fileName = `translations/${payload.sourceLanguage.toLowerCase()}/${payload.source.toLowerCase()}/${payload.partOfSpeech.toLowerCase()}/${payload.targetLanguage.toLowerCase()}.txt`;
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
