import { createUserContent, GoogleGenAI } from '@google/genai';
import { chatGptRequest, GPT_4O } from '@vocably/lambda-shared';
import {
  ExplainPayload,
  Explanation,
  languageList,
  Result,
  resultify,
} from '@vocably/model';
import { trimLanguage } from '@vocably/sulna';
import { config } from './config';
import { fallback } from './fallback';

export const explainGemini = async ({
  targetLanguage,
  sourceLanguage,
  source,
}: ExplainPayload): Promise<Result<Explanation>> => {
  const genAI = new GoogleGenAI({
    apiKey: config.geminiApiKey,
  });

  const safeSourceLanguage = languageList[sourceLanguage];
  const safeTargetLanguage = languageList[targetLanguage];

  const result = await resultify(
    genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: createUserContent([source]),
      config: {
        systemInstruction: [
          `You are a helpful and knowledgeable language tutor. A user is learning ${trimLanguage(
            languageList[sourceLanguage]
          )}.`,
          `Shortly explain what to pay attention to for proper understanding of the submitted sentence.`,
          `Provide explanation in ${trimLanguage(
            languageList[targetLanguage]
          )}'`,
          `Avoid introduction.`,
        ],
        thinkingConfig: {
          thinkingBudget: 0, // Disables thinking
        },
        temperature: 0,
        responseMimeType: 'text/plain',
      },
    }),
    {
      errorCode: 'FUCKING_ERROR',
      reason: 'Unable to perform Gemini translation.',
    }
  );

  if (!result.success) {
    return result;
  }

  return {
    success: true,
    value: {
      sourceLanguage,
      targetLanguage,
      explanation: result.value.text ?? '',
    },
  };
};

export const explainGpt = async ({
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
          `Avoid introduction.`,
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

export const explainSentence = async (
  payload: ExplainPayload
): Promise<Result<Explanation>> => {
  return fallback(explainGemini(payload), () => explainGpt(payload));
};
