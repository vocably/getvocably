import { AiTranslation } from '@vocably/model';
import { AnalyseAndTranslatePayload } from './analyseAndTranslate';

type Payload = {
  translation: AiTranslation;
  partsOfSpeech: string[];
};

export const buildDirectAnalyseBatch = ({
  translation,
  partsOfSpeech,
}: Payload): AnalyseAndTranslatePayload[] => {
  let payloads: AnalyseAndTranslatePayload[] = [];

  payloads.push({
    source: translation.source,
    sourceLanguage: translation.sourceLanguage,
    targetLanguage: translation.targetLanguage,
    partOfSpeech: translation.partOfSpeech,
  });

  const lemmaMustBeAnalysed =
    translation.source.toLowerCase() !== translation.lemma.toLowerCase();

  if (lemmaMustBeAnalysed) {
    payloads.push({
      source: translation.lemma,
      sourceLanguage: translation.sourceLanguage,
      targetLanguage: translation.targetLanguage,
      partOfSpeech: translation.lemmaPos,
    });
  }

  partsOfSpeech
    .filter((pos) => translation.partOfSpeech !== pos)
    .forEach((pos) => {
      payloads.push({
        source: translation.source,
        sourceLanguage: translation.sourceLanguage,
        targetLanguage: translation.targetLanguage,
        partOfSpeech: pos,
      });
    });

  return payloads;
};
