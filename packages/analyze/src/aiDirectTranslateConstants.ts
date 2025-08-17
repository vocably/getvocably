import { isSafeObject } from '@vocably/sulna';
import { isString } from 'lodash-es';

export type AiTranslation = {
  source: string;
  target: string;
  partOfSpeech: string;
  transcript?: string;
};

export const isAiTranslation = (value: any): value is AiTranslation => {
  return (
    isSafeObject(value) &&
    isString(value['source']) &&
    isString(value['target']) &&
    isString(value['partOfSpeech'])
  );
};
