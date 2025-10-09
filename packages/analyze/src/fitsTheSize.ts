import { LexicalaSearchResultItemWithNormalHeadword } from './lexicala/normalizeHeadword';

export const fitsTheSize =
  (source: string) =>
  (item: LexicalaSearchResultItemWithNormalHeadword): boolean => {
    const sourceWordsNumber = source.split(/\W+/).length;
    const itemWordsNumber = (item.headword.text ?? '').split(/\W+/).length;

    return itemWordsNumber <= sourceWordsNumber;
  };

export const wordDefinitionItemFitsTheSize =
  (source: string) =>
  (item: string): boolean => {
    const sourceWordsNumber = source.split(/\W+/).length;
    const itemWordsNumber = (item ?? '').split(/\W+/).length;

    return itemWordsNumber === sourceWordsNumber;
  };
