import {
  DirectAnalysis,
  Result,
  Translation,
  ValidAnalysisItems,
} from '@vocably/model';
import { analyseAndTranslate } from '../analyseAndTranslate';

import { trimArticle } from '@vocably/sulna';
import { buildDirectAnalyseBatch } from '../buildDirectAnalyseBatch';
import { ContextAnalysisRequest } from '../detectInputType';
import { translateFromContext } from '../translateFromContext';
import { translationToAnalysisItem } from '../translationToAnalyzeItem';

export const contextAnalysis = async ({
  source: rawSource,
  sourceLanguage,
  targetLanguage,
  context,
  isDirect,
  inputType,
}: ContextAnalysisRequest): Promise<Result<DirectAnalysis>> => {
  const source =
    inputType === 'word' && isDirect
      ? rawSource
      : trimArticle(sourceLanguage, rawSource).source;

  const contextAnalysisResult = await translateFromContext({
    source,
    context,
    sourceLanguage,
    targetLanguage,
    inputType,
    isDirect,
  });

  if (contextAnalysisResult.success === false) {
    return contextAnalysisResult;
  }

  const translation: Translation = {
    source: rawSource,
    target: isDirect
      ? contextAnalysisResult.value.target
      : contextAnalysisResult.value.source,
    sourceLanguage: sourceLanguage,
    targetLanguage: targetLanguage,
    partOfSpeech: contextAnalysisResult.value.partOfSpeech,
    transcript: contextAnalysisResult.value.transcript,
    lemma: contextAnalysisResult.value.lemma,
    lemmaPos: contextAnalysisResult.value.lemmaPos,
    isDirect,
  };

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
      translation,
      items: resultItems,
    },
  };
};
