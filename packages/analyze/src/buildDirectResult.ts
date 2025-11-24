import { DirectAnalysis, DirectAnalyzePayload, Result } from '@vocably/model';
import { contextAnalysis } from './buildDirectResult/contextAnalysis';
import { reverseAnalysis } from './buildDirectResult/reverseAnalysis';
import { sentenceAnalysis } from './buildDirectResult/sentenceAnalysis';
import { unitOfSpeechAnalysis } from './buildDirectResult/unitOfSpeechAnalysis';
import { detectAnalysisType } from './detectAnalysisType';
import { sanitizePayload } from './sanitizePayload';

type Options = {
  payload: DirectAnalyzePayload;
};

export const buildDirectResult = async ({
  payload: rawPayload,
}: Options): Promise<Result<DirectAnalysis>> => {
  const payload = sanitizePayload(rawPayload);

  const detectedAnalysisType = detectAnalysisType(payload);

  if (detectedAnalysisType.type === 'reverse-translate') {
    return reverseAnalysis(detectedAnalysisType);
  }

  if (detectedAnalysisType.type === 'context-analysis') {
    return contextAnalysis(detectedAnalysisType);
  }

  if (detectedAnalysisType.type === 'sentence-analysis') {
    return sentenceAnalysis(detectedAnalysisType);
  }

  if (detectedAnalysisType.type === 'unit-of-speech-analysis') {
  }

  return unitOfSpeechAnalysis({
    ...detectedAnalysisType,
    type: 'unit-of-speech-analysis',
  });
};
