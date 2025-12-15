import { Translation } from '@vocably/model';
import { AnalyseAndTranslatePayload } from './analyseAndTranslate';
import { PartOfSpeech } from './getPartsOfSpeech';
type Payload = {
  translation: Translation;
  partsOfSpeech: PartOfSpeech[];
};

export const buildDirectAnalyseBatch = ({
  translation,
  partsOfSpeech,
}: Payload): AnalyseAndTranslatePayload[] => {
  return partsOfSpeech.reduce<AnalyseAndTranslatePayload[]>(
    (acc, partOfSpeech) => {
      if (
        'lemma' in partOfSpeech &&
        (partOfSpeech.partOfSpeech.toLowerCase() !==
          partOfSpeech.lemmaPos.toLowerCase() ||
          partOfSpeech.lemma.toLowerCase() !==
            partOfSpeech.headword.toLowerCase())
      ) {
        return [
          ...acc,
          {
            source: partOfSpeech.headword,
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
          source: partOfSpeech.headword,
          partOfSpeech: partOfSpeech.partOfSpeech,
          sourceLanguage: translation.sourceLanguage,
          targetLanguage: translation.targetLanguage,
        },
      ];
    },
    []
  );
};
