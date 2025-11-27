import { ChatGPTLanguage, Result } from '@vocably/model';
import { detectInputTypeChatGpt } from './detectInputTypeChatGpt';
import { detectInputTypeGemini } from './detectInputTypeGemini';
import { fallback } from './fallback';

export type DetectInputTypeAiPayload = {
  source: string;
  language: ChatGPTLanguage;
};

export const inputTypes = [
  'word',
  'compound word',
  'phrasal verb',
  'phrase',
  'sentence',
  'idiom',
  'other',
] as const;

export type DetectedInputType = typeof inputTypes[number];

export const unitOfSpeechTypes: DetectedInputType[] = [
  'word',
  'compound word',
  'phrasal verb',
  'idiom',
];

export type InputAnalysis = {
  type: DetectedInputType;
  isDirect: boolean;
};

export const isInputAnalysis = (v: any): v is InputAnalysis => {
  return (
    typeof v['type'] === 'string' &&
    typeof v['isDirect'] === 'boolean' &&
    //@ts-ignore
    inputTypes.includes(v['type'].toLowerCase())
  );
};

export const detectInputTypeAi = async (
  payload: DetectInputTypeAiPayload
): Promise<Result<InputAnalysis>> => {
  return fallback(detectInputTypeGemini(payload), () =>
    detectInputTypeChatGpt(payload)
  );
};
