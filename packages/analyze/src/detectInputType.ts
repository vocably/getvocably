import { DirectAnalyzePayload, GoogleLanguage, Result } from '@vocably/model';
import { detectInputTypeGemini, InputAnalysis } from './detectInputTypeGemini';

const nonTokenizableLanguages: GoogleLanguage[] = [
  'zh',
  'zh-TW',
  'ja',
  'vi',
  'th',
  'km',
  'lo',
];

export type ContextAnalysisRequest = {
  type: 'context-analysis';
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  source: string;
  context: string;
  inputType: InputAnalysis['type'];
  isDirect: boolean;
};

export type UnitOfSpeechAnalysisRequest = {
  type: 'unit-of-speech-analysis';
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  source: string;
  inputType: InputAnalysis['type'];
  isDirect: boolean;
};

export type SentenceAnalysisRequest = {
  type: 'sentence-analysis';
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  source: string;
  inputType: InputAnalysis['type'];
  isDirect: boolean;
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
  | ReverseAnalysisRequest;

export const detectInputType = async (
  payload: DirectAnalyzePayload
): Promise<Result<AnalysisType>> => {
  if (payload.source && payload.target) {
    return {
      success: true,
      value: {
        type: 'reverse-translate',
        source: payload.source,
        target: payload.target ?? payload.source,
        sourceLanguage: payload.sourceLanguage,
        targetLanguage: payload.targetLanguage,
        partOfSpeech: payload.partOfSpeech,
        transcript: payload.transcript,
        lemma: payload.lemma,
        lemmaPos: payload.lemmaPos,
      },
    };
  }

  const detectedTypeResult = await detectInputTypeGemini({
    language: payload.sourceLanguage,
    source: payload.source,
  });

  if (detectedTypeResult.success === false) {
    return detectedTypeResult;
  }

  if (payload.context && payload.context.length > payload.source.length) {
    return {
      success: true,
      value: {
        type: 'context-analysis',
        source: payload.source,
        context: payload.context,
        sourceLanguage: payload.sourceLanguage,
        targetLanguage: payload.targetLanguage,
        inputType: detectedTypeResult.value.type,
        isDirect: detectedTypeResult.value.isDirect,
      },
    };
  }

  if (
    ['word', 'phrasal verb', 'idiom', 'compound word'].includes(
      detectedTypeResult.value.type
    )
  ) {
    return {
      success: true,
      value: {
        type: 'unit-of-speech-analysis',
        source: payload.source,
        sourceLanguage: payload.sourceLanguage,
        targetLanguage: payload.targetLanguage,
        inputType: detectedTypeResult.value.type,
        isDirect: detectedTypeResult.value.isDirect,
      },
    };
  }

  return {
    success: true,
    value: {
      type: 'sentence-analysis',
      source: payload.source,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      inputType: detectedTypeResult.value.type,
      isDirect: detectedTypeResult.value.isDirect,
    },
  };
};
