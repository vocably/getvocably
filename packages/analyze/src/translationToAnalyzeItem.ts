import { AnalysisItem, Translation } from '@vocably/model';
import { sanitizeTranscript } from './sanitizeTranscript';

export const translationToAnalysisItem = (
  translation: Translation
): AnalysisItem => {
  return {
    source: translation.source,
    translation: translation.target,
    partOfSpeech: translation.partOfSpeech,
    ipa: sanitizeTranscript(translation.transcript ?? ''),
    definitions: [],
    examples: [],
  };
};
