export const isIndependentUnitOfSpeech = (partOfSpeech: string) => {
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
    'phrasal verb',
    'article',
  ].includes(partOfSpeech.toLowerCase());
};
