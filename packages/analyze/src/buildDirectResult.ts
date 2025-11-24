import { DirectAnalysis, DirectAnalyzePayload, Result } from '@vocably/model';
import { contextAnalysis } from './buildDirectResult/contextAnalysis';
import { reverseAnalysis } from './buildDirectResult/reverseAnalysis';
import { sentenceAnalysis } from './buildDirectResult/sentenceAnalysis';
import { unitOfSpeechAnalysis } from './buildDirectResult/unitOfSpeechAnalysis';
import { detectInputType } from './detectInputType';
import { sanitizePayload } from './sanitizePayload';

type Options = {
  payload: DirectAnalyzePayload;
};

export const buildDirectResult = async ({
  payload: rawPayload,
}: Options): Promise<Result<DirectAnalysis>> => {
  const payload = sanitizePayload(rawPayload);

  const detectedAnalysisTypeResult = await detectInputType(payload);

  if (detectedAnalysisTypeResult.success === false) {
    return detectedAnalysisTypeResult;
  }

  if (detectedAnalysisTypeResult.value.type === 'reverse-translate') {
    return reverseAnalysis(detectedAnalysisTypeResult.value);
  }

  if (detectedAnalysisTypeResult.value.type === 'context-analysis') {
    return contextAnalysis(detectedAnalysisTypeResult.value);
  }

  if (detectedAnalysisTypeResult.value.type === 'sentence-analysis') {
    return sentenceAnalysis(detectedAnalysisTypeResult.value);
  }

  return unitOfSpeechAnalysis({
    ...detectedAnalysisTypeResult.value,
    type: 'unit-of-speech-analysis',
  });
};
