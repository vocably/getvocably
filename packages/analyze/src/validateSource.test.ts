import { validateSource } from './validateSource';

describe('validateSource', () => {
  it('should not include phrases', () => {
    expect(
      validateSource({
        source: 'some long sentence',
        partOfSpeech: 'noun ',
      })
    ).toBe(true);

    expect(
      validateSource({
        source: 'slightly long sentence with extra words',
        partOfSpeech: 'noun ',
      })
    ).toBe(false);

    expect(
      validateSource({
        source: '123 55',
        partOfSpeech: 'noun ',
      })
    ).toBe(false);

    expect(
      validateSource({
        source: 'something()',
        partOfSpeech: 'noun ',
      })
    ).toBe(false);

    expect(
      validateSource({
        source: 'some type',
        partOfSpeech: 'noun phrase ',
      })
    ).toBe(false);

    expect(
      validateSource({
        source: 'phrasal verb',
        partOfSpeech: 'talk over',
      })
    ).toBe(true);
  });
});
