import { GoogleLanguage, GoogleTranslateLanguage } from '@vocably/model';

export const languageToGoogleTranslateLanguage = (
  language: GoogleLanguage
): GoogleTranslateLanguage => {
  switch (language) {
    case 'pt':
      return 'pt-BR';
    default:
      return language;
  }
};

export const googleTranslateLanguageToLanguage = (
  googleTranslateLanguage: GoogleTranslateLanguage
): GoogleLanguage => {
  switch (googleTranslateLanguage) {
    case 'zh-CN':
      return 'zh';
    case 'iw':
      return 'he';
    case 'pt-BR':
      return 'pt';
    default:
      return googleTranslateLanguage;
  }
};
