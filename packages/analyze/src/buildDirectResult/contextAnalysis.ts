import {
  DirectAnalysis,
  Result,
  Translation,
  ValidAnalysisItems,
} from '@vocably/model';
import {
  analyseAndTranslate,
  AnalyseAndTranslatePayload,
} from '../analyseAndTranslate';

import { trimArticle } from '@vocably/sulna';
import { ContextAnalysisRequest } from '../detectInputType';
import { translateFromContext } from '../translateFromContext';
import { translationToAnalysisItem } from '../translationToAnalyzeItem';

export const directContextAnalysis = async ({
  source: rawSource,
  sourceLanguage,
  targetLanguage,
  context,
  inputType,
}: ContextAnalysisRequest): Promise<Result<DirectAnalysis>> => {
  const source =
    inputType === 'word'
      ? trimArticle(sourceLanguage, rawSource).source
      : rawSource.trim();

  const contextAnalysisResult = await translateFromContext({
    source,
    context,
    sourceLanguage,
    targetLanguage,
    inputType,
    isDirect: true,
  });

  if (contextAnalysisResult.success === false) {
    return contextAnalysisResult;
  }

  const translation: Translation = {
    source: rawSource,
    target: contextAnalysisResult.value.target,
    sourceLanguage: sourceLanguage,
    targetLanguage: targetLanguage,
    partOfSpeech: contextAnalysisResult.value.partOfSpeech,
    transcript: contextAnalysisResult.value.transcript,
    lemma: contextAnalysisResult.value.lemma,
    lemmaPos: contextAnalysisResult.value.lemmaPos,
    isDirect: true,
  };

  const analysePayloads: AnalyseAndTranslatePayload[] = [
    {
      source: contextAnalysisResult.value.source,
      partOfSpeech: contextAnalysisResult.value.partOfSpeech,
      sourceLanguage,
      targetLanguage,
    },
  ];

  if (
    contextAnalysisResult.value.lemma &&
    contextAnalysisResult.value.lemmaPos &&
    contextAnalysisResult.value.source.toLowerCase() !==
      contextAnalysisResult.value.lemma.toLowerCase()
  ) {
    analysePayloads.push({
      source: contextAnalysisResult.value.lemma,
      partOfSpeech: contextAnalysisResult.value.lemmaPos,
      sourceLanguage,
      targetLanguage,
    });
  }

  const analyseResults = await Promise.all(
    analysePayloads.map((payload) => analyseAndTranslate(payload))
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
      isDirect: true,
      detectedInputType: inputType,
      aiThinksItIs: contextAnalysisResult.value.target,
    },
  };
};

export const reverseContextAnalysis = async ({
  source: rawSource,
  sourceLanguage,
  targetLanguage,
  context,
  inputType,
}: ContextAnalysisRequest): Promise<Result<DirectAnalysis>> => {
  const source = rawSource.trim();

  const contextAnalysisResult = await translateFromContext({
    source,
    context,
    sourceLanguage,
    targetLanguage,
    inputType,
    isDirect: true,
  });

  if (contextAnalysisResult.success === false) {
    return contextAnalysisResult;
  }

  const translation: Translation = {
    source: source,
    target: contextAnalysisResult.value.source,
    sourceLanguage: sourceLanguage,
    targetLanguage: targetLanguage,
    partOfSpeech: contextAnalysisResult.value.partOfSpeech,
    transcript: contextAnalysisResult.value.transcript,
    lemma: contextAnalysisResult.value.lemma,
    lemmaPos: contextAnalysisResult.value.lemmaPos,
    isDirect: false,
  };

  const analysePayloads: AnalyseAndTranslatePayload[] = [
    {
      source: contextAnalysisResult.value.source,
      partOfSpeech: contextAnalysisResult.value.partOfSpeech,
      sourceLanguage,
      targetLanguage,
    },
  ];

  if (
    contextAnalysisResult.value.lemma &&
    contextAnalysisResult.value.lemmaPos &&
    contextAnalysisResult.value.source.toLowerCase() !==
      contextAnalysisResult.value.lemma.toLowerCase()
  ) {
    analysePayloads.push({
      source: contextAnalysisResult.value.lemma,
      partOfSpeech: contextAnalysisResult.value.lemmaPos,
      sourceLanguage,
      targetLanguage,
    });
  }

  const analyseResults = await Promise.all(
    analysePayloads.map((payload) => analyseAndTranslate(payload))
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
      isDirect: false,
      detectedInputType: inputType,
      aiThinksItIs: contextAnalysisResult.value.source,
    },
  };
};

export const contextAnalysis = async ({
  source,
  sourceLanguage,
  targetLanguage,
  context,
  isDirect,
  inputType,
}: ContextAnalysisRequest): Promise<Result<DirectAnalysis>> => {
  if (isDirect) {
    return directContextAnalysis({
      type: 'context-analysis',
      source,
      sourceLanguage,
      targetLanguage,
      context,
      inputType,
      isDirect,
    });
  } else {
    return reverseContextAnalysis({
      type: 'context-analysis',
      source,
      sourceLanguage,
      targetLanguage,
      context,
      inputType,
      isDirect,
    });
  }
};
