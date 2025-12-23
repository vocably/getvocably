export const isVerb = (partOfSpeech: string) => {
  if (partOfSpeech.startsWith('verb')) {
    return true;
  }

  if (partOfSpeech.includes(' verb') || partOfSpeech.includes('-verb')) {
    return true;
  }

  return false;
};
