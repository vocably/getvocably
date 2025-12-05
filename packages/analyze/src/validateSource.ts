export const validateSource = (source: string): boolean => {
  if (/[\d@]/g.test(source)) {
    return false;
  }

  return (
    source.length <= 200 && source.length >= 1 && source.split(' ').length <= 10
  );
};
