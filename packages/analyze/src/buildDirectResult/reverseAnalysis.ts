import {
  DirectAnalysis,
  isAiTranslation,
  Result,
  Translation,
  ValidAnalysisItems,
} from '@vocably/model';
import { analyseAndTranslate } from '../analyseAndTranslate';
import { buildDirectAnalyseBatch } from '../buildDirectAnalyseBatch';
import { ReverseAnalysisRequest } from '../detectInputType';
import { isIndependentUnitOfSpeech } from '../isIndependentUnitOfSpeech';
import { translationToAnalysisItem } from '../translationToAnalyzeItem';

export const reverseAnalysis = async ({
  source,
  target,
  sourceLanguage,
  targetLanguage,
  partOfSpeech,
  transcript,
  lemma,
  lemmaPos,
}: ReverseAnalysisRequest): Promise<Result<DirectAnalysis>> => {
  const translation: Translation = {
    source,
    target,
    sourceLanguage,
    targetLanguage,
    partOfSpeech,
    transcript,
    lemma,
    lemmaPos,
  };

  if (
    !isAiTranslation(translation) ||
    !isIndependentUnitOfSpeech(translation.partOfSpeech)
  ) {
    return {
      success: true,
      value: {
        source: source,
        targetLanguage: targetLanguage,
        sourceLanguage: sourceLanguage,
        translation: translation,
        items: [translationToAnalysisItem(translation)],
      },
    };
  }

  const analyseResults = await Promise.all(
    buildDirectAnalyseBatch({
      translation: translation,
      partsOfSpeech: [
        {
          partOfSpeech: translation.partOfSpeech,
          source: translation.source,
          lemma: translation.lemma,
          lemmaPos: translation.lemmaPos,
        },
      ],
    }).map((payload) => analyseAndTranslate(payload))
  );

  const resultItems: ValidAnalysisItems = [
    translationToAnalysisItem(translation),
  ];

  if (analyseResults[0].success === true) {
    resultItems[0] = analyseResults[0].value;
  }

  analyseResults.slice(1).forEach((result) => {
    if (result.success === false) {
      return;
    }

    resultItems.push(result.value);
  });

  return {
    success: true,
    value: {
      source: source,
      targetLanguage: targetLanguage,
      sourceLanguage: sourceLanguage,
      translation: translation,
      items: resultItems,
    },
  };
};
