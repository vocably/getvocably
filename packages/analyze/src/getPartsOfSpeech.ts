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
};

export type PartOfSpeech = PartOfSpeechGemini | PartOfSpeechGpt;

export const getPartsOfSpeech = async (
  payload: GetPartsOfSpeechPayload
): Promise<Result<PartOfSpeech[]>> => {
  return fallback(getPartsOfSpeechGemini(payload), async () => {
    const gptResult = await getPartsOfSpeechGpt(payload);
    if (gptResult.success === false) {
      return gptResult;
    }

    return {
      success: true,
      value: gptResult.value.map((partOfSpeech) => ({
        source: payload.source,
        partOfSpeech,
      })),
    };
  });
};
