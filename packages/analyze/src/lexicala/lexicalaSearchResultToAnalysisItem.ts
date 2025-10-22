import { AnalysisItem, Translation } from '@vocably/model';
import { addArticleLegacy } from '../addArticleLegacy';
import { extractTranslation } from '../extractTranslation';
import { shortenGender } from '../shortenGender';
import { getDefinitions } from './getDefinitions';
import { getExamples } from './getExamples';
import { getIpa } from './getIpa';
import { LexicalaSearchResultItemWithNormalHeadword } from './normalizeHeadword';

export const lexicalaSearchResultToAnalysisItem =
  (originalTranslation: Translation) =>
  async (
    item: LexicalaSearchResultItemWithNormalHeadword
  ): Promise<AnalysisItem> => {
    const translationResult = await extractTranslation(
      originalTranslation,
      item
    );
    return {
      source: addArticleLegacy(item.language, item.headword),
      ipa: getIpa(item),
      examples: getExamples(item.senses),
      definitions: getDefinitions(item.senses),
      partOfSpeech: item.headword.pos,
      translation: translationResult.success ? translationResult.value : '',
      ...(item.headword.gender
        ? {
            g: shortenGender(item.headword.gender),
          }
        : {}),
    };
  };
