export const sanitizePartOfSpeech = (rawPartOfSpeech: string): string => {
  const partOfSpeech = rawPartOfSpeech.toLowerCase().trim().replace(/^-/, '');

  if (partOfSpeech === 'phrasal verb' || partOfSpeech === 'verb phrase') {
    return partOfSpeech;
  }

  if (partOfSpeech.includes(' verb')) {
    return 'verb';
  }

  if (partOfSpeech.includes('participle')) {
    return 'verb';
  }

  if (/substantiv[^,]*/i.test(partOfSpeech)) {
    return 'noun';
  }

  return partOfSpeech;
};
