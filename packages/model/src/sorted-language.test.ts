import { GoogleLanguages } from './language';
import { sortedTargetLanguages } from './sorted-languages';

describe('sorted-language', () => {
  xit('should contain all the languages', () => {
    const missingLanguages = GoogleLanguages.filter(
      (language) => !sortedTargetLanguages.includes(language)
    );
    expect(missingLanguages).toEqual([]);
  });
});
