import { createUserContent, GoogleGenAI } from '@google/genai';
import { parseJson } from '@vocably/api';
import {
  AiTranslation,
  ChatGPTLanguage,
  GoogleLanguage,
  languageList,
  Result,
  resultify,
} from '@vocably/model';
import { get } from 'lodash-es';
import { config } from './config';
import { InputAnalysis } from './detectInputTypeGemini';
import { mapPartOfSpeech } from './getPartsOfSpeechGpt';

type Payload = {
  source: string;
  context: string;
  sourceLanguage: ChatGPTLanguage;
  targetLanguage: GoogleLanguage;
  inputType: InputAnalysis['type'];
  isDirect: boolean;
};

type ContextTranslation = {
  source: string;
  target: string;
  lemma: string;
  lemmaPos: string;
  partOfSpeech?: string;
  transcript?: string;
};

const isContextTranslation = (o: any): o is ContextTranslation => {
  return !(!o || !o.target || !o.source || !o.lemma || !o.lemmaPos);
};

const transcriptionName = {
  zh: 'pinyin',
  'zh-TW': 'pinyin',
  ja: 'romaji',
  ko: 'hangul',
  vi: 'vietnamese',
  th: 'thai',
  id: 'indonesian',
  ms: 'malay',
  my: 'burmese',
  hi: 'hindi',
  ar: 'arabic',
};

export const translateFromContext = async (
  payload: Payload
): Promise<Result<AiTranslation>> => {
  const isTranscriptionNeeded = payload.source.length <= 20;

  const genAI = new GoogleGenAI({
    apiKey: config.geminiApiKey,
  });

  const safeSourceLanguage = languageList[payload.sourceLanguage];
  const safeTargetLanguage = languageList[payload.targetLanguage];

  const result = await resultify(
    genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: createUserContent([payload.context, payload.source]),
      config: {
        systemInstruction: [
          `You are a smart language dictionary.`,
          `User provides two inputs:`,
          `The first input is context`,
          `The second input is a ${payload.inputType}`,
          `Only respond in JSON format with an object containing the following properties:`,
          `- source - ${payload.inputType} translated in ${safeSourceLanguage}`,
          `- target - ${payload.inputType} in ${safeTargetLanguage}`,
          `- partOfSpeech - part of speech in English`,
          `- lemma - ${safeSourceLanguage} lemma or infinitive`,
          `- lemmaPos - part of speech of the lemma in English`,
          isTranscriptionNeeded
            ? `- transcript - the ${get(
                transcriptionName,
                payload.sourceLanguage,
                'IPA'
              )} transcription of the ${safeSourceLanguage} ${
                payload.inputType
              }`
            : '',
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

  if (!result.success) {
    return result;
  }

  const parseResult = parseJson(result.value.text ?? '');
  if (!parseResult.success) {
    return parseResult;
  }

  if (!isContextTranslation(parseResult.value)) {
    return {
      success: false,
      errorCode: 'OPENAI_UNEXPECTED_RESPONSE',
      reason: `Unexpected response from analyzer: ${result.value.text}`,
    };
  }

  return {
    success: true,
    value: {
      source: parseResult.value.source,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      target: parseResult.value.target,
      partOfSpeech: mapPartOfSpeech(parseResult.value.partOfSpeech ?? ''),
      transcript: parseResult.value.transcript ?? '',
      lemma: parseResult.value.lemma,
      lemmaPos: mapPartOfSpeech(parseResult.value.lemmaPos ?? ''),
    },
  };
};

export const truncateAsIs = (text: string, length: number): string => {
  return text.replace(/[<>]/gm, '').slice(0, length);
};
