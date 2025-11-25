import {
  DirectAnalysis,
  Result,
  Translation,
  ValidAnalysisItems,
} from '@vocably/model';

import { trimArticle } from '@vocably/sulna';
import { analyseAndTranslate } from '../analyseAndTranslate';
import { buildDirectAnalyseBatch } from '../buildDirectAnalyseBatch';
import { buildReverseResult } from '../buildReverseResult';
import { UnitOfSpeechAnalysisRequest } from '../detectInputType';
import { getPartsOfSpeech } from '../getPartsOfSpeech';
import { googleTranslate } from '../googleTranslate';
import { translationToAnalysisItem } from '../translationToAnalyzeItem';

export const unitOfSpeechAnalysis = async ({
  source,
  sourceLanguage,
  targetLanguage,
  isDirect,
}: UnitOfSpeechAnalysisRequest): Promise<Result<DirectAnalysis>> => {
  const trimmedSource = trimArticle(sourceLanguage, source).source;

  if (!isDirect) {
    return buildReverseResult({
      target: source,
      sourceLanguage,
      targetLanguage,
    });
  }

  const translationResult = await googleTranslate(source, null, targetLanguage);

  if (translationResult.success === false) {
    return translationResult;
  }

  const translation: Translation = {
    source: source,
    target: translationResult.value.target,
    sourceLanguage: sourceLanguage,
    targetLanguage: targetLanguage,
    isDirect,
  };

  const partsOfSpeechResult = await getPartsOfSpeech({
    source: trimmedSource,
    language: translation.sourceLanguage,
  });

  const analyseResults = await Promise.all(
    buildDirectAnalyseBatch({
      translation: {
        ...translation,
        source: trimmedSource,
      },
      partsOfSpeech: partsOfSpeechResult.success
        ? partsOfSpeechResult.value
        : [],
    }).map((payload) => analyseAndTranslate(payload))
  );

  const resultItems: ValidAnalysisItems = [
    translationToAnalysisItem(translationResult.value),
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
