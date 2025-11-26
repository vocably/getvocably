import { ChatGPTLanguage, Result } from '@vocably/model';
import { fallback } from './fallback';
import { getPartsOfSpeechGemini } from './getPartsOfSpeechGemini';
import { getPartsOfSpeechGpt } from './getPartsOfSpeechGpt';

export type GetPartsOfSpeechPayload = {
  source: string;
  language: ChatGPTLanguage;
};

export type PartOfSpeechGemini = {
  source: string;
  partOfSpeech: string;
  lemma: string;
  lemmaPos: string;
};

export type PartOfSpeechGpt = {
  source: string;
  partOfSpeech: string;
  lemma: string;
  lemmaPos: string;
};

export type PartOfSpeech = PartOfSpeechGemini | PartOfSpeechGpt;

export const getPartsOfSpeech = async (
  payload: GetPartsOfSpeechPayload
): Promise<Result<PartOfSpeech[]>> => {
  return fallback(getPartsOfSpeechGemini(payload), () =>
    getPartsOfSpeechGpt(payload)
  );
};
