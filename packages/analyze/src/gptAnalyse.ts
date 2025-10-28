import { parseJson } from '@vocably/api';
import {
  chatGptRequest,
  GPT_4O,
  nodeFetchS3File,
  nodePutS3File,
  OpenAiModel,
} from '@vocably/lambda-shared';
import { GoogleLanguage, languageList, Result } from '@vocably/model';
import { isSafeObject } from '@vocably/sulna';
import { isArray } from 'lodash-es';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';
import { config } from './config';

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
  lemmaPos: string;
  synonyms: string[];
  transcript: string;
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
    'lemmaPos' in result &&
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

type GptAnalyseChatGptBody = {
  messages: Array<ChatCompletionMessageParam>;
  model: OpenAiModel;
};

export const getGptAnalyseChatGptBody = ({
  source,
  partOfSpeech,
  sourceLanguage,
}: GptAnalysePayload): GptAnalyseChatGptBody => {
  const isTranscriptionNeeded = source.length <= 20;
  const languageName = languageList[sourceLanguage];

  const genders = genderLanguages[sourceLanguage] ?? [];

  const transcriptionType = transcriptionName[sourceLanguage] ?? 'IPA';

  const prompt = [
    `You are a smart language dictionary.`,
    `User provides a word in ${languageName} and its part of speech.`,
    `Only respond in JSON format with an object containing the following properties:`,
    isTranscriptionNeeded ? `transcript - ${transcriptionType}` : ``,
    `definitions - list of definitions in ${languageName}.${
      partOfSpeech.includes('verb')
        ? ` Consider tense of the provided word.`
        : ''
    }`,
    `examples - list of extremely concise examples`,
    `lemma - lemma or infinitive`,
    `lemmaPos - part of speech of the lemma`,
    `synonyms - list of synonyms`,
    `number - plural or singular English only`,
    genders.length > 0 ? `gender - ${genders.join(', ')}, or other` : ``,
  ]
    .filter((s) => !!s)
    .join('\n');

  return {
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: source },
      { role: 'user', content: partOfSpeech },
    ],
    model: GPT_4O,
  };
};

export const getGptAnalyseResult = (
  sourceLanguage: GoogleLanguage,
  response: any
): Result<GptAnalyseResult> => {
  if (!isGptAnalyseResult(response)) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'The GPT request responded with the malformed response',
      extra: { response },
    };
  }

  const genders = genderLanguages[sourceLanguage] ?? [];

  return {
    success: true,
    value: {
      number: response.number,
      lemma: response.lemma,
      lemmaPos: response.lemmaPos,
      definitions: response.definitions,
      examples: response.examples,
      synonyms: response.synonyms,
      transcript: (response.transcript ?? '').replace(/\//gm, ''),
      ...(genders.includes(response.gender ?? '')
        ? {
            gender: response.gender,
          }
        : {}),
    },
  };
};

export const gptAnalyseNoCache = async ({
  source,
  partOfSpeech,
  sourceLanguage,
}: GptAnalysePayload): Promise<Result<GptAnalyseResult>> => {
  const responseResult = await chatGptRequest({
    ...getGptAnalyseChatGptBody({ source, partOfSpeech, sourceLanguage }),
    timeoutMs: 100000,
  });

  if (!responseResult.success) {
    return responseResult;
  }

  return getGptAnalyseResult(sourceLanguage, responseResult.value);
};

export const getAnalyseCacheFileName = (
  sourceLanguage: GoogleLanguage,
  source: string,
  partOfSpeech: string
): string => {
  return `analyze/${sourceLanguage.toLowerCase()}/${source.toLowerCase()}/${partOfSpeech.toLowerCase()}.json`;
};

export const gptAnalyse = async (
  payload: GptAnalysePayload
): Promise<Result<GptAnalyseResult>> => {
  const fileName = getAnalyseCacheFileName(
    payload.sourceLanguage,
    payload.source,
    payload.partOfSpeech
  );
  const s3FetchResult = await nodeFetchS3File(
    config.unitsOfSpeechBucket,
    fileName
  );

  if (s3FetchResult.success && s3FetchResult.value !== null) {
    const parseResult = parseJson(s3FetchResult.value);

    if (parseResult.success && isGptAnalyseResult(parseResult.value)) {
      return {
        success: true,
        value: parseResult.value,
      };
    }
  }

  const analyseResult = await gptAnalyseNoCache(payload);

  if (!analyseResult.success) {
    return analyseResult;
  }

  const putResult = await nodePutS3File(
    config.unitsOfSpeechBucket,
    fileName,
    JSON.stringify(analyseResult.value)
  );

  if (!putResult.success) {
    console.error('Failed to put GPT analyse the result to S3', putResult);
  }

  return analyseResult;
};
