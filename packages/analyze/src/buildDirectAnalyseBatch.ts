import { Translation } from '@vocably/model';
import { AnalyseAndTranslatePayload } from './analyseAndTranslate';
import { PartOfSpeech } from './getPartsOfSpeech';

export const buildDirectAnalyseBatch = (
  translation: Translation,
  partsOfSpeech: PartOfSpeech[]
): AnalyseAndTranslatePayload[] => {
  return partsOfSpeech.reduce<AnalyseAndTranslatePayload[]>(
    (acc, partOfSpeech) => {
      if ('lemma' in partOfSpeech) {
        return [
          ...acc,
          {
            source: partOfSpeech.source,
            partOfSpeech: partOfSpeech.partOfSpeech,
            sourceLanguage: translation.sourceLanguage,
            targetLanguage: translation.targetLanguage,
          },
          {
            source: partOfSpeech.lemma,
            partOfSpeech: partOfSpeech.lemmaPos,
            sourceLanguage: translation.sourceLanguage,
            targetLanguage: translation.targetLanguage,
          },
        ];
      }

      return [
        ...acc,
        {
          source: partOfSpeech.source,
          partOfSpeech: partOfSpeech.partOfSpeech,
          sourceLanguage: translation.sourceLanguage,
          targetLanguage: translation.targetLanguage,
        },
      ];
    },
    []
  );
};
