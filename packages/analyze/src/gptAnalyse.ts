import { chatGptRequest, GPT_4O } from '@vocably/lambda-shared';
import { GoogleLanguage, languageList, Result } from '@vocably/model';
import { isSafeObject } from '@vocably/sulna';
import { isArray } from 'lodash-es';

const transcriptionName: Partial<Record<GoogleLanguage, string>> = {
  zh: 'pinyin',
  'zh-TW': 'pinyin',
  ja: 'romaji',
  ko: 'hangul',
  vi: 'vietnamese',
  th: 'thai',
  id: 'indonesian',
  ms: 'malay',
  my: 'burmese',
};

const genderLanguages: Partial<Record<GoogleLanguage, string[]>> = {
  ar: ['masculine', 'feminine'], // Arabic
  fr: ['masculine', 'feminine'], // French
  es: ['masculine', 'feminine'], // Spanish
  it: ['masculine', 'feminine'], // Italian
  pt: ['masculine', 'feminine'], // Portuguese
  ro: ['masculine', 'feminine', 'neuter'], // Romanian
  de: ['masculine', 'feminine', 'neuter'], // German
  nl: ['common', 'neuter'], // Dutch
  sv: ['common', 'neuter'], // Swedish
  da: ['common', 'neuter'], // Danish
  no: ['masculine', 'feminine', 'neuter'], // Norwegian
  is: ['masculine', 'feminine', 'neuter'], // Icelandic
  ru: ['masculine', 'feminine', 'neuter'], // Russian
  uk: ['masculine', 'feminine', 'neuter'], // Ukrainian
  pl: [
    'masculine-personal',
    'masculine-animate',
    'masculine-inanimate',
    'feminine',
    'neuter',
  ], // Polish
  cs: ['masculine-animate', 'masculine-inanimate', 'feminine', 'neuter'], // Czech
  sk: ['masculine-animate', 'masculine-inanimate', 'feminine', 'neuter'], // Slovak
  sr: ['masculine', 'feminine', 'neuter'], // Serbian
  hr: ['masculine', 'feminine', 'neuter'], // Croatian
  bs: ['masculine', 'feminine', 'neuter'], // Bosnian
  el: ['masculine', 'feminine', 'neuter'], // Greek
  hi: ['masculine', 'feminine'], // Hindi
  ta: ['masculine', 'feminine', 'neuter'], // Tamil
  ga: ['masculine', 'feminine'], // Irish
  gd: ['masculine', 'feminine'], // Scottish Gaelic
  cy: ['masculine', 'feminine'], // Welsh
  he: ['masculine', 'feminine'], // Hebrew
  am: ['masculine', 'feminine'], // Amharic
  sw: ['noun-class'], // Swahili (nominal classes instead of gender)
};

export type GptAnalyseResult = {
  definitions: string[];
  examples: string[];
  lemma: string;
  transcript: string;
  synonyms: string[];
  number: string;
  gender?: string;
};

const isGptAnalyseResult = (result: any): result is GptAnalyseResult => {
  if (!isSafeObject(result)) {
    return false;
  }
  return (
    'definitions' in result &&
    'examples' in result &&
    'lemma' in result &&
    'transcript' in result &&
    'synonyms' in result &&
    'number' in result &&
    isArray(result['definitions']) &&
    isArray(result['examples']) &&
    isArray(result['synonyms'])
  );
};

type GptAnalysePayload = {
  source: string;
  partOfSpeech: string;
  sourceLanguage: GoogleLanguage;
};
export const gptAnalyse = async (
  payload: GptAnalysePayload
): Promise<Result<GptAnalyseResult>> => {
  const isTranscriptionNeeded = payload.source.length <= 20;
  const languageName = languageList[payload.sourceLanguage];

  const genders = genderLanguages[payload.sourceLanguage] ?? [];

  const transcriptionType = transcriptionName[payload.sourceLanguage] ?? 'IPA';

  const prompt = [
    `You are a smart language dictionary.`,
    `User provides a word in ${languageName} and its part of speech.`,
    `Only respond in JSON format with an object containing the following properties:`,
    isTranscriptionNeeded ? `transcript - ${transcriptionType}` : ``,
    `definitions - list of short definitions in ${languageName}`,
    `examples - list of extremely concise examples`,
    `lemma - lemma or infinitive`,
    `synonyms - list of synonyms`,
    `number - plural or singular`,
    genders.length > 0 ? `gender - ${genders.join(', ')}, or other` : ``,
  ]
    .filter((s) => !!s)
    .join('\n');

  const responseResult = await chatGptRequest({
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: payload.source },
      { role: 'user', content: payload.partOfSpeech },
    ],
    model: GPT_4O,
    timeoutMs: 100000,
  });

  if (!responseResult.success) {
    return responseResult;
  }

  const response = responseResult.value;

  if (!isGptAnalyseResult(response)) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'The GPT request responded with the malformed response',
      extra: { payload, response },
    };
  }

  return {
    success: true,
    value: {
      ...response,
      transcript: response.transcript.replace(/\//gm, ''),
      ...(genders.includes(response.gender ?? '')
        ? {
            gender: response.gender,
          }
        : {}),
    },
  };
};
