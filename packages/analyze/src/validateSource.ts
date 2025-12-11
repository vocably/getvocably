type Payload = {
  source: string;
  partOfSpeech: string;
};

export const validateSource = ({ source, partOfSpeech }: Payload): boolean => {
  if (/[\d@()\[\]\\]/g.test(source)) {
    return false;
  }

  if (partOfSpeech.includes('phrase')) {
    return false;
  }

  if (partOfSpeech === 'idiom' || partOfSpeech === 'phrasal verb') {
    return true;
  }

  return (
    source.length <= 30 && source.length >= 1 && source.split(' ').length <= 3
  );
};
