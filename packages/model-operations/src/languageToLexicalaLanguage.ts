import { LexicalaLanguage, LexicalaLanguages } from '@vocably/model';

export const languageToLexicalaLanguage = (
  language: string
): LexicalaLanguage | null => {
  if (language === 'zh-TW') {
    return 'tw';
  }

  return (
    LexicalaLanguages.find(
      (lexicalaLanguage) => lexicalaLanguage === language
    ) ?? null
  );
};
