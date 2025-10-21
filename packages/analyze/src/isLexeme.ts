export const isLexeme = (partOfSpeech: string) => {
  return [
    'noun',
    'verb',
    'adjective',
    'adverb',
    'numeral',
    'interjection',
    'pronoun',
    'preposition',
    'conjunction',
    'determiner',
    'particle',
    'auxiliary verb',
    'modal verb',
    'article',
  ].includes(partOfSpeech.toLowerCase());
};
