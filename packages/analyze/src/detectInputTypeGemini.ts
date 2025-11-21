import { createUserContent, GoogleGenAI } from '@google/genai';

import {
  ChatGPTLanguage,
  languageList,
  Result,
  resultify,
} from '@vocably/model';
import { trimLanguage } from '@vocably/sulna';
import { config } from './config';

type Payload = {
  source: string;
  language: ChatGPTLanguage;
};

export const getPartsOfSpeechGemini = async ({
  source,
  language,
}: Payload): Promise<Result<string[]>> => {
  const genAI = new GoogleGenAI({
    apiKey: config.geminiApiKey,
  });

  const result = await resultify(
    genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: createUserContent([source]),
      config: {
        systemInstruction: [
          `You are a smart ${trimLanguage(languageList[language])} translator`,
          `User provides an input`,
          `Detect it's type as phrase, sentence, w`,
          `Each part of speech must be on a separate line`,
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

  if (result.success === false) {
    return result;
  }

  if (!result.value.text) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'No text returned from Gemini',
    };
  }

  return {
    success: true,
    value: result.value.text.split('\n').map((s) => s.trim().toLowerCase()),
  };
};
