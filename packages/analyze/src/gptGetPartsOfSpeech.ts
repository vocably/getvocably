import { chatGptRequest, GPT_4O, OpenAiModel } from '@vocably/lambda-shared';
import { GoogleLanguage, languageList, Result } from '@vocably/model';
import { uniq } from 'lodash-es';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

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

export const gptGetPartsOfSpeech = async ({
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

  const response = uniq(
    responseResult.value
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

  return {
    success: true,
    value: response,
  };
};
