export const secureSource = (rawSource: string): string => {
  return rawSource.replace(/"/g, '').substring(0, 200);
};
