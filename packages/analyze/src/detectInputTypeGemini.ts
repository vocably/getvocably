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

const inputTypes = [
  'word',
  'phrase',
  'phrasal verb',
  'sentence',
  'idiom',
  'other',
] as const;
type InputType = typeof inputTypes[number];

export const detectInputTypeGemini = async ({
  source,
  language,
}: Payload): Promise<Result<InputType>> => {
  const genAI = new GoogleGenAI({
    apiKey: config.geminiApiKey,
  });

  const result = await resultify(
    genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: createUserContent([source]),
      config: {
        systemInstruction: [
          `User provides an input in ${trimLanguage(languageList[language])}`,
          `Detect it's type`,
          `Response variants: word, phrase, phrasal verb, sentence, idiom, other`,
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

  if (
    inputTypes.includes(result.value.text.toLowerCase() as InputType) === false
  ) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason:
        'Unsupported input type returned from Gemini: ' +
        result.value.text +
        '. Supported types: ' +
        inputTypes.join(', '),
    };
  }

  return {
    success: true,
    value: result.value.text.toLowerCase() as InputType,
  };
};
