import { createUserContent, GoogleGenAI } from '@google/genai';

import { parseJson } from '@vocably/api';
import { languageList, Result, resultify } from '@vocably/model';
import { isObject } from 'lodash-es';
import { config } from './config';
import {
  GetPartsOfSpeechPayload,
  isPartOfSpeech,
  PartOfSpeech,
} from './getPartsOfSpeech';

const fixNulls = (v: any): any => {
  if (!isObject(v)) {
    return v;
  }

  return Object.fromEntries(
    Object.entries(v).map(([k, v]) => [k, v === null ? '' : v])
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
          `You are a ${languageList[language]} dictionary`,
          `User provides a word`,
          `Provide an array parts of speech for the word. Avoid splitting the word.`,
          `Each object of array must contain the following fields:`,
          `- headword - the word or phrase in ${languageList[language]} with spelling fixed`,
          `- exists - true or false`,
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

  const analysisItems = parseResult.value.map(fixNulls).filter(isPartOfSpeech);

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
