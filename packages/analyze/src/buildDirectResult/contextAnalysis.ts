import { DirectAnalysis, Result, ValidAnalysisItems } from '@vocably/model';
import { analyseAndTranslate } from '../analyseAndTranslate';

import { trimArticle } from '@vocably/sulna';
import { buildDirectAnalyseBatch } from '../buildDirectAnalyseBatch';
import { ContextAnalysisRequest } from '../detectAnalysisType';
import { translateFromContext } from '../translateFromContext';
import { translationToAnalysisItem } from '../translationToAnalyzeItem';

export const contextAnalysis = async ({
  source: rawSource,
  sourceLanguage,
  targetLanguage,
  context,
  isSentence,
}: ContextAnalysisRequest): Promise<Result<DirectAnalysis>> => {
  const source = isSentence
    ? rawSource
    : trimArticle(sourceLanguage, rawSource).source;
  const contextAnalysisResult = await translateFromContext({
    source,
    context,
    sourceLanguage,
    targetLanguage,
  });

  if (contextAnalysisResult.success === false) {
    return contextAnalysisResult;
  }

  contextAnalysisResult.value;

  const analyseResults = await Promise.all(
    buildDirectAnalyseBatch({
      translation: contextAnalysisResult.value,
      partsOfSpeech: [
        {
          partOfSpeech: contextAnalysisResult.value.partOfSpeech,
          source: contextAnalysisResult.value.source,
          lemma: contextAnalysisResult.value.lemma,
          lemmaPos: contextAnalysisResult.value.lemmaPos,
        },
      ],
    }).map((payload) => analyseAndTranslate(payload))
  );

  const resultItems: ValidAnalysisItems = [
    translationToAnalysisItem(contextAnalysisResult.value),
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
      translation: contextAnalysisResult.value,
      items: resultItems,
    },
  };
};
