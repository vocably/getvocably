import { get } from 'lodash-es';

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

export const getTranscriptionName = (language: string): string => {
  return get(transcriptionName, language, 'IPA');
};
