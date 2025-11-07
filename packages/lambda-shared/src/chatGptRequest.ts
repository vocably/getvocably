import { parseJson } from '@vocably/api';
import { Result, resultify } from '@vocably/model';
import { get } from 'lodash';
import { ChatModel } from 'openai/resources';
import type { ChatCompletionMessageParam } from 'openai/resources/chat';
import { ChatCompletionCreateParamsBase } from 'openai/resources/chat/completions';
import { getOpenAiClient } from './openAiClient';

export const GPT_4O_MINI = 'gpt-4o-mini';
export const GPT_4O = 'gpt-4o';
export const GPT_5_MINI = 'gpt-5-mini';
export const GPT_5_NANO = 'gpt-5-nano';

type Options = {
  messages: Array<ChatCompletionMessageParam>;
  model: ChatModel;
  timeoutMs?: number;
  responseFormat?: ChatCompletionCreateParamsBase['response_format'];
  temperature?: number;
};

export const chatGptRequest = async ({
  messages,
  model,
  timeoutMs = 7000,
  responseFormat = {
    type: 'json_object',
  },
  temperature = 0,
}: Options): Promise<Result<any>> => {
  const openai = await getOpenAiClient();

  const abortController = new AbortController();
  if (timeoutMs > 0) {
    setTimeout(() => abortController.abort(), timeoutMs);
  }

  const completionResult = await resultify(
    openai.chat.completions.create(
      {
        messages: messages,
        model: model,
        response_format: responseFormat,
        ...([GPT_5_MINI, GPT_5_NANO].includes(model)
          ? {}
          : { temperature: temperature, top_p: 0 }),
      },
      {
        signal: abortController.signal,
        timeout: timeoutMs,
        maxRetries: 3,
      }
    ),
    {
      errorCode: 'OPENAI_UNSUCCESSFUL_REQUEST',
      reason: 'Unable to perform request to OpenAI',
    }
  );

  if (completionResult.success === false) {
    console.error(
      `Sent prompt ${JSON.stringify(
        messages
      )}. Analyzer responded with: ${JSON.stringify(completionResult)}`
    );
    return completionResult;
  }

  if (responseFormat.type === 'text') {
    return {
      success: true,
      value: get(completionResult, 'value.choices[0].message.content', ''),
    };
  }

  const parseResult = parseJson(
    get(completionResult, 'value.choices[0].message.content', '')
  );

  if (parseResult.success === false) {
    console.error(
      `Sent prompt ${JSON.stringify(
        messages
      )}. Analyzer responded with: ${JSON.stringify(completionResult)}`
    );
    return {
      success: false,
      errorCode: 'OPENAI_UNABLE_TO_PARSE_RESPONSE',
      reason: 'Unable to parse the response from ChatGPT',
      extra: parseResult,
    };
  }

  return {
    success: true,
    value: parseResult.value,
  };
};
