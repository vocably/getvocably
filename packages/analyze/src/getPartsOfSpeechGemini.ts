import { createUserContent, GoogleGenAI } from '@google/genai';

import { parseJson } from '@vocably/api';
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
  sourceLanguage: ChatGPTLanguage;
};

type AiAnalysis = {
  source: string;
  partOfSpeech: string;
  lemma: string;
  lemmaPos: string;
};

const isAiAnalysis = (v: any): v is AiAnalysis => {
  return (
    typeof v['source'] === 'string' &&
    typeof v['partOfSpeech'] === 'string' &&
    typeof v['lemma'] === 'string' &&
    typeof v['lemmaPos'] === 'string'
  );
};

export const geminiAnalyzeUnitOfSpeech = async ({
  source,
  sourceLanguage,
}: Payload): Promise<Result<AiAnalysis[]>> => {
  const genAI = new GoogleGenAI({
    apiKey: config.geminiApiKey,
  });

  const result = await resultify(
    genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: createUserContent([source]),
      config: {
        systemInstruction: [
          `You are a smart ${trimLanguage(
            languageList[sourceLanguage]
          )} dictionary`,
          `User provides a word`,
          `Provide an array of possible parts of speech for the word`,
          `Each object of array must contain the following fields:`,
          `- source - the word or phrase in ${trimLanguage(
            languageList[sourceLanguage]
          )} spelling fixed.`,
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
      errorCode: 'FUCKING_ERROR',
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

  const analysisItems = parseResult.value.filter(isAiAnalysis);
  if (analysisItems.length === 0) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'No valid analysis items returned from Gemini',
    };
  }

  return {
    success: true,
    value: analysisItems,
  };
};
