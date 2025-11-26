import { createUserContent, GoogleGenAI } from '@google/genai';
import { parseJson } from '@vocably/api';
import { languageList, Result, resultify } from '@vocably/model';
import { config } from './config';
import {
  DetectInputTypeAiPayload,
  InputAnalysis,
  inputTypes,
  isInputAnalysis,
} from './detectInputTypeAi';

export const detectInputTypeGemini = async ({
  source,
  language,
}: DetectInputTypeAiPayload): Promise<Result<InputAnalysis>> => {
  const genAI = new GoogleGenAI({
    apiKey: config.geminiApiKey,
  });

  const result = await resultify(
    genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: createUserContent([source]),
      config: {
        systemInstruction: [
          `User provides an input`,
          `Respond with an object`,
          `- type - ${inputTypes.join(', ')}`,
          `- isDirect - true if the input is ${languageList[language]}`,
        ],
        thinkingConfig: {
          thinkingBudget: 0, // Disables thinking
        },
        temperature: 0,
        responseMimeType: 'application/json',
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

  const jsonResult = parseJson(result.value.text);

  if (!jsonResult.success) {
    return jsonResult;
  }

  if (!isInputAnalysis(jsonResult.value)) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason:
        'Unsupported input type returned from Gemini: ' + result.value.text,
    };
  }

  return {
    success: true,
    value: jsonResult.value,
  };
};
