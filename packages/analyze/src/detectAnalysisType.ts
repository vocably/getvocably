import { DirectAnalyzePayload, GoogleLanguage, Result } from '@vocably/model';

type ContextAnalysisRequest = {
  type: 'context-analysis';
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  source: string;
  context: string;
};

type UnitOfSpeechAnalysisRequest = {
  type: 'unit-of-speech-analysis';
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  source: string;
};

type SentenceAnalysisRequest = {
  type: 'sentence-analysis';
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  detectedLanguage: GoogleLanguage;
  source: string;
  translatedSentence: string;
};

type ReverseAnalysisRequest = {
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
  | ReverseAnalysisRequest;

export const fastAnalyze = async (
  payload: DirectAnalyzePayload
): Promise<Result<TranslationRequestType>> => {};
