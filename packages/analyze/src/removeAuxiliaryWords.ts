import { GoogleLanguage } from '@vocably/model';
import { auxiliaryWords } from './languageSettings';

export const removeAuxiliaryWords = (
  text: string,
  language: GoogleLanguage
): string => {
  const auxiliaries = auxiliaryWords[language];
  if (!auxiliaries) {
    return text;
  }

  const regex = new RegExp(`^(${auxiliaries.join('|')}) `, 'i');
  return text.replace(regex, '');
};
