import { chatGptRequest, GPT_4O } from '@vocably/lambda-shared';
import { GoogleLanguage, languageList, Result } from '@vocably/model';
import { uniq } from 'lodash-es';

type PartsOfSpeechPayload = {
  source: string;
  language: GoogleLanguage;
};

export const gptGetPartsOfSpeech = async ({
  source,
  language,
}: PartsOfSpeechPayload): Promise<Result<string[]>> => {
  const prompt = [
    `You are a smart language dictionary`,
    `User provides a word in ${languageList[language]}. Define its possible parts of speech`,
    `Only respond in text format with each part of speech in English on a separate line`,
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
      type: 'text',
    },
  });

  if (!responseResult.success) {
    return responseResult;
  }

  const response = uniq(
    responseResult.value
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
    value: response,
  };
};
