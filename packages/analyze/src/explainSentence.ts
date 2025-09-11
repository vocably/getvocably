import { chatGptRequest, GPT_4O } from '@vocably/lambda-shared';
import {
  ExplainPayload,
  Explanation,
  languageList,
  Result,
} from '@vocably/model';
import { trimLanguage } from '@vocably/sulna';

export const explainSentence = async ({
  targetLanguage,
  sourceLanguage,
  source,
}: ExplainPayload): Promise<Result<Explanation>> => {
  const responseResult = await chatGptRequest({
    messages: [
      {
        role: 'system',
        content: `You are a helpful and knowledgeable language tutor. A user is learning ${trimLanguage(
          languageList[sourceLanguage]
        )}.`,
      },
      {
        role: 'system',
        content: [
          `Shortly explain what to pay attention to for proper understanding of the submitted sentence.`,
          `Provide explanation in ${trimLanguage(
            languageList[targetLanguage]
          )}'`,
        ].join('\n'),
      },
      {
        role: 'user',
        content: source,
      },
    ],
    responseFormat: {
      type: 'text',
    },
    model: GPT_4O,
  });

  if (responseResult.success === false) {
    return responseResult;
  }

  return {
    success: true,
    value: {
      sourceLanguage,
      targetLanguage,
      explanation: responseResult.value,
    },
  };
};
