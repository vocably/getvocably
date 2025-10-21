import { AnalysisItem, GoogleLanguage, Result } from '@vocably/model';
import { gptAnalyse } from './gptAnalyse';
import { translateDefinitions } from './translateDefinitions';

type Payload = {
  source: string;
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  partOfSpeech: string;
};

export const analyseAndTranslate = async (
  payload: Payload
): Promise<Result<AnalysisItem>> => {
  const gptAnalyseResult = await gptAnalyse(payload);
  if (gptAnalyseResult.success === false) {
    return gptAnalyseResult;
  }

  const translationResult = await translateDefinitions({
    source: payload.source,
    sourceLanguage: payload.sourceLanguage,
    targetLanguage: payload.targetLanguage,
    partOfSpeech: payload.partOfSpeech,
    definitions: gptAnalyseResult.value.definitions,
  });

  if (translationResult.success === false) {
    return translationResult;
  }

  return {
    success: true,
    value: {
      source: payload.source,
      translation: translationResult.value.join(', '),
      definitions: gptAnalyseResult.value.definitions,
      examples: gptAnalyseResult.value.examples,
      partOfSpeech: payload.partOfSpeech,
      ipa: gptAnalyseResult.value.transcript,
    },
  };
};
