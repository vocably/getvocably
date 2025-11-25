import { DirectAnalyzePayload, GoogleLanguage } from '@vocably/model';
import { trimArticle } from '@vocably/sulna';

const nonTokenizableLanguages: GoogleLanguage[] = [
  'zh',
  'zh-TW',
  'ja',
  'vi',
  'th',
  'km',
  'lo',
];

const isSentence = (source: string, language: GoogleLanguage): boolean => {
  return trimArticle(language, source).source.split(/ +/).length > 3;
};

export type ContextAnalysisRequest = {
  type: 'context-analysis';
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  source: string;
  isSentence: boolean;
  context: string;
};

export type UnitOfSpeechAnalysisRequest = {
  type: 'unit-of-speech-analysis';
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  source: string;
};

export type NonTokenizableLanguageAnalysisRequest = {
  type: 'non-tokenizable-language-analysis';
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  source: string;
};

export type SentenceAnalysisRequest = {
  type: 'sentence-analysis';
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  source: string;
};

export type ReverseAnalysisRequest = {
  type: 'reverse-translate';
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  source: string;
  target: string;
  transcript?: string;
  partOfSpeech?: string;
  lemma?: string;
  lemmaPos?: string;
};

type AnalysisType =
  | ContextAnalysisRequest
  | UnitOfSpeechAnalysisRequest
  | SentenceAnalysisRequest
  | ReverseAnalysisRequest
  | NonTokenizableLanguageAnalysisRequest;

export const detectAnalysisType = (
  payload: DirectAnalyzePayload
): AnalysisType => {
  if (payload.source && payload.target) {
    return {
      type: 'reverse-translate',
      source: payload.source,
      target: payload.target ?? payload.source,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      partOfSpeech: payload.partOfSpeech,
      transcript: payload.transcript,
      lemma: payload.lemma,
      lemmaPos: payload.lemmaPos,
    };
  }

  if (payload.context && payload.context.length > payload.source.length) {
    return {
      type: 'context-analysis',
      source: payload.source,
      context: payload.context,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      isSentence:
        !nonTokenizableLanguages.includes(payload.sourceLanguage) &&
        isSentence(payload.source, payload.sourceLanguage),
    };
  }

  if (nonTokenizableLanguages.includes(payload.sourceLanguage)) {
    return {
      type: 'non-tokenizable-language-analysis',
      source: payload.source,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
    };
  }

  if (isSentence(payload.source, payload.sourceLanguage)) {
    return {
      type: 'sentence-analysis',
      source: payload.source,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
    };
  }

  return {
    type: 'unit-of-speech-analysis',
    source: payload.source,
    sourceLanguage: payload.sourceLanguage,
    targetLanguage: payload.targetLanguage,
  };
};
