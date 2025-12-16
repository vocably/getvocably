export const extractTranslation = (
  textWithTranslation: string
): [text: string, translation: string] => {
  const regex = /^(.+?)\s*\[([^\]]+)\]?$/;

  const match = textWithTranslation.match(regex);

  if (!match) {
    return [textWithTranslation, ''];
  }

  return [match[1], match[2]];
};
