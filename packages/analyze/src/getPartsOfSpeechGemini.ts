import { createUserContent, GoogleGenAI } from '@google/genai';

import { parseJson } from '@vocably/api';
import { languageList, Result, resultify } from '@vocably/model';
import { config } from './config';
import { GetPartsOfSpeechPayload, PartOfSpeech } from './getPartsOfSpeech';

const isGeminiPartOfSpeech = (v: any): v is PartOfSpeech => {
  return (
    typeof v['source'] === 'string' &&
    typeof v['partOfSpeech'] === 'string' &&
    typeof v['lemma'] === 'string' &&
    typeof v['lemmaPos'] === 'string'
  );
};

export const getPartsOfSpeechGemini = async ({
  source,
  language,
}: GetPartsOfSpeechPayload): Promise<Result<PartOfSpeech[]>> => {
  const genAI = new GoogleGenAI({
    apiKey: config.geminiApiKey,
  });

  const result = await resultify(
    genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: createUserContent([source]),
      config: {
        systemInstruction: [
          `You are a smart ${languageList[language]} dictionary`,
          `User provides a word`,
          `Provide an array of possible parts of speech for the word`,
          `Each object of array must contain the following fields:`,
          `- source - the word or phrase in ${languageList[language]} spelling fixed.`,
          `- partOfSpeech - the part of speech of the word or phrase in English`,
          `- lemma - lemma of the word or phrase`,
          `- lemmaPos - part of speech of the lemma in English`,
        ],
        thinkingConfig: {
          thinkingBudget: 0, // Disables thinking
        },
        temperature: 0,
        responseMimeType: 'application/json',
      },
    }),
    {
      reason: 'Unable to perform Gemini translation.',
    }
  );

  if (result.success === false) {
    return result;
  }

  const parseResult = parseJson(result.value.text ?? '');
  if (parseResult.success === false) {
    return parseResult;
  }

  const analysisItems = parseResult.value.filter(isGeminiPartOfSpeech);
  if (analysisItems.length === 0) {
    return {
      success: false,
      reason: 'No valid analysis items returned from Gemini',
    };
  }

  return {
    success: true,
    value: analysisItems,
  };
};
