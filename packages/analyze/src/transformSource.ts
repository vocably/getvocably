import { GoogleLanguage } from '@vocably/model';
import { capitalize } from 'lodash-es';

type Payload = {
  source: string;
  sourceLanguage: GoogleLanguage;
  partOfSpeech: string;
};
export const transformSource = ({
  source,
  sourceLanguage,
  partOfSpeech,
}: Payload): string => {
  if (sourceLanguage !== 'de') {
    return source;
  }

  if (partOfSpeech !== 'noun') {
    return source;
  }

  if (source.split(' ').length > 1) {
    return source;
  }

  return capitalize(source);
};
