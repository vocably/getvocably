import {
  AnalysisItem,
  DirectAnalysis,
  Result,
  ReverseAnalysis,
  ReverseAnalyzePayload,
  Translation,
  ValidAnalysisItems,
} from '@vocably/model';
import { trimArticle } from '@vocably/sulna';
import { buildDirectResult } from './buildDirectResult';
import { makeUniqueItems } from './makeUniqueItems';
import { reverseTranslate } from './reverseTranslate';
import { sortByTarget } from './sortByTarget';

type TranslationDirectResult = {
  translation: Translation;
  directTranslationResult: Result<DirectAnalysis>;
};

export const buildReverseResult = async (
  payload: ReverseAnalyzePayload
): Promise<Result<ReverseAnalysis>> => {
  const translationResults = await reverseTranslate(payload);

  if (translationResults.success === false) {
    return translationResults;
  }

  const directResults = await Promise.all(
    translationResults.value.map(
      async (translation): Promise<TranslationDirectResult> => {
        return {
          translation,
          directTranslationResult: await buildDirectResult({
            payload: {
              source: translation.target,
              target: translation.source,
              sourceLanguage: payload.sourceLanguage,
              targetLanguage: payload.targetLanguage,
              partOfSpeech: translation.partOfSpeech,
              transcript: translation.transcript,
              lemma: translation.lemma,
            },
          }),
        };
      }
    )
  );

  const translationItems = builtTranslationItems([
    directResults[0],
    ...directResults.slice(1),
  ]);

  return {
    success: true,
    value: {
      target: payload.target,
      source: directResults[0].translation.target,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      translation: {
        source: directResults[0].translation.target,
        sourceLanguage: payload.sourceLanguage,
        target: payload.target,
        targetLanguage: payload.targetLanguage,
        partOfSpeech: directResults[0].translation.partOfSpeech,
      },
      reverseTranslations: translationResults.value,
      items: makeUniqueItems(translationItems).sort(
        sortByTarget(payload.target)
      ),
    },
  };
};

const mergeItems = (
  language: string,
  candidate: AnalysisItem,
  items: ValidAnalysisItems
): ValidAnalysisItems => {
  const itemThatIsMatchedWithTheCandidate = items.find(
    (item) =>
      item.partOfSpeech === candidate.partOfSpeech &&
      trimArticle(language, item.source).source ===
        trimArticle(language, candidate.source).source
  );

  if (itemThatIsMatchedWithTheCandidate === undefined) {
    return [candidate, ...items];
  }

  return [items[0], ...items.slice(1)];
};

const builtTranslationItems = (
  translationDirectResults: [
    TranslationDirectResult,
    ...TranslationDirectResult[]
  ]
): ValidAnalysisItems => {
  const results = translationDirectResults.flatMap((result): AnalysisItem[] => {
    const itemCandidate: AnalysisItem = {
      source: result.translation.target,
      translation: result.translation.source,
      partOfSpeech: result.translation.partOfSpeech,
      definitions: [],
    };

    const language = result.translation.targetLanguage;

    if (result.directTranslationResult.success) {
      return mergeItems(
        language,
        itemCandidate,
        result.directTranslationResult.value.items
      );
    }

    return [itemCandidate];
  });

  return [results[0], ...results.slice(1)];
};
