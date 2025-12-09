import {
  AnalysisItem,
  isSuccess,
  Result,
  ReverseAnalysis,
  ReverseAnalyzePayload,
  unitOfSpeechTypes,
  ValidAnalysisItems,
} from '@vocably/model';
import { trimArticle } from '@vocably/sulna';
import { sentenceAnalysis } from './buildDirectResult/sentenceAnalysis';
import { unitOfSpeechAnalysis } from './buildDirectResult/unitOfSpeechAnalysis';
import { detectInputTypeAi, InputAnalysis } from './detectInputTypeAi';
import { PartOfSpeech } from './getPartsOfSpeech';
import { reverseTranslate, ValidTranslations } from './reverseTranslate';

export const buildReverseResultYes = async (
  payload: ReverseAnalyzePayload,
  inputAnalysis: InputAnalysis,
  reverseTranslations: ValidTranslations
): Promise<Result<ReverseAnalysis>> => {
  const directResults = await Promise.all(
    reverseTranslations.map((reverseTranslation) => {
      let predefinedPartsOfSpeech: PartOfSpeech[] = [];

      if (
        reverseTranslation.target &&
        reverseTranslation.partOfSpeech &&
        reverseTranslation.lemma &&
        reverseTranslation.lemmaPos
      ) {
        predefinedPartsOfSpeech.push({
          source: reverseTranslation.target,
          lemma: reverseTranslation.lemma,
          lemmaPos: reverseTranslation.lemmaPos,
          partOfSpeech: reverseTranslation.partOfSpeech,
        });
      }

      if (unitOfSpeechTypes.includes(inputAnalysis.type)) {
        return unitOfSpeechAnalysis({
          source: reverseTranslation.target,
          sourceLanguage: payload.sourceLanguage,
          targetLanguage: payload.targetLanguage,
          predefinedPartsOfSpeech,
        });
      }

      return sentenceAnalysis({
        source: reverseTranslation.target,
        sourceLanguage: payload.sourceLanguage,
        targetLanguage: payload.targetLanguage,
        inputType: inputAnalysis.type,
        translation: {
          source: reverseTranslation.target,
          target: reverseTranslation.source,
          transcript: reverseTranslation.transcript,
          sourceLanguage: payload.sourceLanguage,
          targetLanguage: payload.targetLanguage,
        },
      });
    })
  );

  const directAnalysisResults = directResults
    .filter(isSuccess)
    .map((result) => result.value);

  if (directAnalysisResults.length === 0) {
    return {
      success: false,
      reason: 'No valid analysis items returned from direct analysis',
    };
  }

  const initialResult = directAnalysisResults.at(0);

  if (initialResult === undefined) {
    return {
      success: false,
      reason: 'No valid analysis items returned from direct analysis',
    };
  }

  const theRest = directAnalysisResults.slice(1);

  const initialItems = initialResult.items;
  const restOfTheItems = theRest.flatMap((result) => result.items);

  const items = restOfTheItems.reduce<ValidAnalysisItems>((acc, item) => {
    return mergeItems(payload.sourceLanguage, item, acc);
  }, initialItems);

  return {
    success: true,
    value: {
      source: reverseTranslations[0].target,
      target: payload.target,
      sourceLanguage: payload.sourceLanguage,
      targetLanguage: payload.targetLanguage,
      translation: {
        source: reverseTranslations[0].target,
        target: payload.target,
        sourceLanguage: payload.sourceLanguage,
        targetLanguage: payload.targetLanguage,
      },
      items,
    },
  };
};

export const buildReverseResult = async (
  payload: ReverseAnalyzePayload
): Promise<Result<ReverseAnalysis>> => {
  const [detectedTypeResult, translationResults] = await Promise.all([
    detectInputTypeAi({
      source: payload.target,
      language: payload.targetLanguage,
    }),
    reverseTranslate(payload),
  ]);

  if (!detectedTypeResult.success) {
    return detectedTypeResult;
  }

  if (!translationResults.success) {
    return translationResults;
  }

  return buildReverseResultYes(
    payload,
    detectedTypeResult.value,
    translationResults.value
  );
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
    return [...items, candidate];
  }

  return [items[0], ...items.slice(1)];
};
