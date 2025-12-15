import { ChatGPTLanguage, Result } from '@vocably/model';
import { fallback } from './fallback';
import { getPartsOfSpeechGemini } from './getPartsOfSpeechGemini';
import { getPartsOfSpeechGpt } from './getPartsOfSpeechGpt';
import { sanitizePartOfSpeech } from './sanitizePartOfSpeech';

export type GetPartsOfSpeechPayload = {
  source: string;
  language: ChatGPTLanguage;
};

export type PartOfSpeech = {
  headword: string;
  partOfSpeech: string;
  lemma: string;
  lemmaPos: string;
  exists: boolean;
};

export const isPartOfSpeech = (v: any): v is PartOfSpeech => {
  return (
    typeof v['headword'] === 'string' &&
    typeof v['partOfSpeech'] === 'string' &&
    typeof v['lemma'] === 'string' &&
    typeof v['lemmaPos'] === 'string' &&
    typeof v['exists'] === 'boolean'
  );
};

export const getPartsOfSpeech = async (
  payload: GetPartsOfSpeechPayload
): Promise<Result<PartOfSpeech[]>> => {
  const partsOfSpeechResult = await fallback(
    getPartsOfSpeechGemini(payload),
    () => getPartsOfSpeechGpt(payload)
  );

  if (partsOfSpeechResult.success === false) {
    return partsOfSpeechResult;
  }

  return {
    success: true,
    value: partsOfSpeechResult.value.map((p) => ({
      ...p,
      partOfSpeech: sanitizePartOfSpeech(p.partOfSpeech),
      lemmaPos: sanitizePartOfSpeech(p.lemmaPos ?? ''),
    })),
  };
};
