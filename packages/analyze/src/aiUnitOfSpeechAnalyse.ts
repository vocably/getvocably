import { createUserContent, GoogleGenAI } from '@google/genai';
import { parseJson } from '@vocably/api';
import {
  chatGptRequest,
  GPT_4O,
  nodeFetchS3File,
  nodePutS3File,
} from '@vocably/lambda-shared';
import {
  GoogleLanguage,
  isTense,
  languageList,
  Result,
  resultify,
  Tense,
} from '@vocably/model';
import { isSafeObject, sanitizeTranscript } from '@vocably/sulna';
import { isArray, omit } from 'lodash-es';
import { ChatModel } from 'openai/resources';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';
import { config } from './config';
import { fallback } from './fallback';
import { getTranscriptionName } from './getTranscriptionName';
import { sanitizePartOfSpeech } from './sanitizePartOfSpeech';
import { secureSource } from './secureSource';
import { transformSource } from './transformSource';
import { validateSource } from './validateSource';

const genderLanguages: Partial<Record<GoogleLanguage, string[]>> = {
  ar: ['masculine', 'feminine'], // Arabic
  fr: ['masculine', 'feminine'], // French
  es: ['masculine', 'feminine'], // Spanish
  it: ['masculine', 'feminine'], // Italian
  pt: ['masculine', 'feminine'], // Portuguese
  'pt-PT': ['masculine', 'feminine'], // Portuguese
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

const caseInsensitiveLanguages: GoogleLanguage[] = [
  'am',
  'ar',
  'bn',
  'fa',
  'gu',
  'he',
  'hi',
  'ja',
  'ka',
  'km',
  'kn',
  'ko',
  'lo',
  'ml',
  'mr',
  'my',
  'ne',
  'or',
  'pa',
  'ps',
  'sd',
  'si',
  'ta',
  'te',
  'th',
  'ug',
  'ur',
  'yi',
  'zh',
  'zh-TW',
];

export type AiAnalysis = {
  source: string;
  definitions: string[];
  examples: string[];
  lemma: string;
  lemmaPos: string;
  synonyms: string[];
  transcript: string;
  number: string;
  gender?: string;
  tense?: Tense;
  exists?: boolean;
  pastTenses?: string;
  pluralForm?: string;
};

const isAiAnalysis = (result: any): result is AiAnalysis => {
  if (!isSafeObject(result)) {
    return false;
  }
  return (
    'source' in result &&
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

type InternalAiAnalysis = Omit<AiAnalysis, 'source'> & {
  headword: string;
};

const isInternalAiAnalysis = (result: any): result is InternalAiAnalysis => {
  if (!isSafeObject(result)) {
    return false;
  }
  return (
    'headword' in result &&
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

const convertInternalToExternal = (
  internal: InternalAiAnalysis
): AiAnalysis => {
  return {
    ...omit(internal, 'headword'),
    source: internal.headword,
  };
};

type AiAnalysePayload = {
  source: string;
  partOfSpeech: string;
  sourceLanguage: GoogleLanguage;
};

const numberlessLanguages: GoogleLanguage[] = [
  'zh',
  'zh-TW',
  'ja',
  'ko',
  'vi',
  'th',
  'id',
  'ms',
  'km',
  'lo',
  'my',
];

const pluralsWithArticles: GoogleLanguage[] = [
  'es',
  'fr',
  'it',
  'pt',
  'ca',
  'ro',
  'gl',
  'de',
  'sv',
  'da',
  'no',
  'is',
  'fy',
  'yi',
  'af',
  'ar',
  'he',
  'mt',
  'el',
  'bg',
  'mk',
  'sq',
  'eu',
  'hu',
  'hy',
];

type InflectionKey = 'pastTenses' | 'tense' | 'pluralForm';

const tensesPrompts: Partial<Record<GoogleLanguage, string>> = {
  'pt-PT': 'past simple and past perfect tense with necessary auxiliary verbs',
  pt: 'past simple and past perfect tense with necessary auxiliary verbs',
  nl: 'past simple and past perfect tense with necessary auxiliary verbs',
  da: 'past simple and past perfect tense with necessary auxiliary verbs',
  no: 'past simple and past perfect tense with necessary auxiliary verbs',
  it: 'past simple and past perfect tense with necessary auxiliary verbs',
  fr: 'past simple and past perfect tense with necessary auxiliary verbs',
  es: 'past simple and past perfect tense with necessary auxiliary verbs',
  de: 'past simple and past perfect tense with necessary auxiliary verbs',
  sv: 'past simple and past perfect tense with necessary auxiliary verbs',
  en: 'past tenses',
  'en-GB': 'past tenses',
};

export const getInfectionsPrompt = ({
  partOfSpeech,
  sourceLanguage,
}: AiAnalysePayload): Partial<Record<InflectionKey, string>> => {
  const infections: Partial<Record<InflectionKey, string>> = {};
  if (partOfSpeech.includes('verb') && tensesPrompts[sourceLanguage]) {
    infections.pastTenses = `comma separated list of ${tensesPrompts[sourceLanguage]} of the provided ${partOfSpeech}`;
    infections.tense = 'present, past, or future. English only';
  }

  if (
    partOfSpeech.includes('noun') &&
    !numberlessLanguages.includes(sourceLanguage)
  ) {
    infections.pluralForm = `plural form${
      pluralsWithArticles.includes(sourceLanguage)
        ? ' with the appropriate article'
        : ''
    }`;
  }

  return infections;
};

export const sanitizeAiAnalyseResult = (
  language: GoogleLanguage,
  partOfSpeech: string,
  result: AiAnalysis
): AiAnalysis => {
  const genders = genderLanguages[language] ?? [];

  const output: AiAnalysis = {
    source: transformSource({
      source: result.source,
      sourceLanguage: language,
      partOfSpeech,
    }),
    number: result.number,
    lemma: result.lemma,
    lemmaPos: sanitizePartOfSpeech(result.lemmaPos ?? ''),
    definitions: result.definitions,
    examples: result.examples,
    synonyms: result.synonyms,
    transcript: sanitizeTranscript(result.transcript ?? ''),
  };

  if (genders.includes(result.gender ?? '')) {
    output.gender = result.gender;
  }

  if (isTense(result.tense)) {
    output.tense = result.tense;
  }

  if (result.pastTenses) {
    output.pastTenses = result.pastTenses;
  }

  if (result.pluralForm) {
    output.pluralForm = result.pluralForm;
  }

  if (result.pluralForm) {
    output.pluralForm = result.pluralForm;
  }

  return output;
};

// ChatGPT
type GptAnalyseChatGptBody = {
  messages: Array<ChatCompletionMessageParam>;
  model: ChatModel;
};

export const getGptAnalyseChatGptBody = ({
  source,
  partOfSpeech,
  sourceLanguage,
}: AiAnalysePayload): GptAnalyseChatGptBody => {
  const isTranscriptionNeeded = source.length <= 20;
  const languageName = languageList[sourceLanguage];

  const genders = genderLanguages[sourceLanguage] ?? [];

  const transcriptionType = getTranscriptionName(sourceLanguage);

  const inflections = getInfectionsPrompt({
    source,
    partOfSpeech,
    sourceLanguage,
  });

  const prompt = [
    `You are a smart language dictionary.`,
    `User provides a word in ${languageName} and its part of speech.`,
    `Only respond in JSON format with an object containing the following properties:`,
    isTranscriptionNeeded ? `transcript - ${transcriptionType}` : ``,
    `headword - word provided by user. Capitalize only when appropriate.`,
    `definitions - list of definitions in ${languageName}.${
      partOfSpeech.includes('verb')
        ? ` Consider tense of the provided word.`
        : ''
    }`,
    `examples - list of extremely concise examples in ${languageName} with the headword used as a ${partOfSpeech}.`,
    `lemma - lemma or infinitive`,
    `lemmaPos - part of speech of the lemma in English`,
    `synonyms - list of synonyms`,
    `number - plural or singular English only`,
    ...Object.entries(inflections).map(([key, value]) => `${key} - ${value}`),
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

type GptAnalyseResultPayload = {
  sourceLanguage: GoogleLanguage;
  partOfSpeech: string;
  response: any;
};

export const getGptAnalyseResult = ({
  response,
}: GptAnalyseResultPayload): Result<AiAnalysis> => {
  if (!isInternalAiAnalysis(response)) {
    return {
      success: false,
      reason: 'The GPT request responded with the malformed response',
      extra: { response },
    };
  }

  return {
    success: true,
    value: convertInternalToExternal(response),
  };
};

export const gptAnalyse = async ({
  source,
  partOfSpeech,
  sourceLanguage,
}: AiAnalysePayload): Promise<Result<AiAnalysis>> => {
  const responseResult = await chatGptRequest({
    ...getGptAnalyseChatGptBody({ source, partOfSpeech, sourceLanguage }),
    timeoutMs: 100000,
  });

  if (!responseResult.success) {
    return responseResult;
  }

  return getGptAnalyseResult({
    sourceLanguage,
    partOfSpeech,
    response: responseResult.value,
  });
};

// End Of ChatGPT

// Gemini

export const geminiAnalyse = async ({
  source,
  partOfSpeech,
  sourceLanguage,
}: AiAnalysePayload): Promise<Result<AiAnalysis>> => {
  const genAI = new GoogleGenAI({
    apiKey: config.geminiApiKey,
  });

  const isTranscriptionNeeded = source.length <= 20;
  const languageName = languageList[sourceLanguage];

  const genders = genderLanguages[sourceLanguage] ?? [];

  const transcriptionType = getTranscriptionName(sourceLanguage);

  const securedSource = secureSource(source);

  const isCaseSensitive = !caseInsensitiveLanguages.includes(sourceLanguage);

  const inflections = getInfectionsPrompt({
    source,
    partOfSpeech,
    sourceLanguage,
  });

  const result = await resultify(
    genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: createUserContent([source]),
      config: {
        systemInstruction: [
          `You are a language dictionary.`,
          `User provides a ${partOfSpeech} in ${languageName}.${
            isCaseSensitive
              ? ' The provided word can be in any case (e.g., uppercase, lowercase, or mixed case).'
              : ''
          }`,
          `Take the fact that the provided word is ${partOfSpeech} very seriously`,
          `Only respond in JSON format with an object containing the following properties:`,
          isTranscriptionNeeded ? `transcript - ${transcriptionType}` : ``,
          `headword - ${partOfSpeech} provided by user.${
            isCaseSensitive
              ? ' Convert to lowercase, unless it is a word that strictly requires capitalization, then capitalize it.'
              : ''
          }`,
          `exists - does the ${partOfSpeech} "${securedSource}" exist in ${languageName}? true or false`,
          `definitions - list of concise definitions of the ${partOfSpeech} "${securedSource}". Should be in ${languageName}.${
            partOfSpeech.includes('verb')
              ? ` Consider tense of the provided ${partOfSpeech}.`
              : ''
          }`,
          `examples - list of extremely concise examples with "${securedSource}" used as ${partOfSpeech}. Omit translations.${
            isCaseSensitive && partOfSpeech.includes('noun')
              ? ' Uppercase when appropriate.'
              : ''
          }`,
          `lemma - lemma or infinitive of the provided ${partOfSpeech}`,
          `lemmaPos - part of speech of the lemma in English`,
          `synonyms - short list of synonyms`,
          `number - plural or singular English only`,
          ...Object.entries(inflections).map(
            ([key, value]) => `${key} - ${value}`
          ),
          genders.length > 0 ? `gender - ${genders.join(', ')}, or other` : ``,
        ].filter((s) => s.length > 0),
        thinkingConfig: {
          thinkingBudget: 0, // Disables thinking
        },
        temperature: 0,
        responseMimeType: 'application/json',
      },
    }),
    {
      reason: 'Unable to perform Gemini analyse.',
    }
  );

  if (result.success === false) {
    return result;
  }

  const parseResult = parseJson(result.value.text ?? '');
  if (parseResult.success === false) {
    return parseResult;
  }

  if (!isInternalAiAnalysis(parseResult.value)) {
    return {
      success: false,
      reason: 'The Gemini request responded with the malformed response',
      extra: parseResult.value,
    };
  }

  return {
    success: true,
    value: convertInternalToExternal(parseResult.value),
  };
};

// End of Gemini

export const getAnalyseCacheFileName = (
  sourceLanguage: GoogleLanguage,
  source: string,
  partOfSpeech: string
): string => {
  return `${sourceLanguage.toLowerCase()}/units-of-speech/${source
    .toLowerCase()
    .replace(/\//g, '-')}/${partOfSpeech
    .toLowerCase()
    .replace(/\//g, '-')}.json`;
};

export const aiAnalyse = async (
  payload: AiAnalysePayload
): Promise<Result<AiAnalysis>> => {
  const isSourceValid = validateSource({
    source: payload.source,
    partOfSpeech: payload.partOfSpeech,
  });
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

    if (parseResult.success && isAiAnalysis(parseResult.value)) {
      return {
        success: true,
        value: sanitizeAiAnalyseResult(
          payload.sourceLanguage,
          payload.partOfSpeech,
          parseResult.value
        ),
      };
    }
  }

  const analyseResult = await fallback(geminiAnalyse(payload), () =>
    gptAnalyse(payload)
  );

  if (!analyseResult.success) {
    return analyseResult;
  }

  if (!analyseResult.value.exists) {
    return {
      success: false,
      reason: 'The requested word does not exist in the language',
      errorCode: 'WORD_NOT_EXIST',
    };
  }

  const sanitizedAiAnalyzeResult = sanitizeAiAnalyseResult(
    payload.sourceLanguage,
    payload.partOfSpeech,
    analyseResult.value
  );

  if (
    isSourceValid &&
    !analyseResult.fallenBack &&
    analyseResult.value.exists === true
  ) {
    const putResult = await nodePutS3File(
      config.unitsOfSpeechBucket,
      fileName,
      JSON.stringify(sanitizedAiAnalyzeResult)
    );

    if (!putResult.success) {
      console.error('Failed to put GPT analyse the result to S3', putResult);
    }
  }

  return {
    success: true,
    value: sanitizedAiAnalyzeResult,
  };
};
