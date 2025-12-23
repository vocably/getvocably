import { isVerb } from './isVerb';

describe('isVerb', () => {
  it('works', () => {
    expect(isVerb('verb')).toEqual(true);
    expect(isVerb('noun')).toEqual(false);
    expect(isVerb('adverb')).toEqual(false);
    expect(isVerb('adjective')).toEqual(false);
    expect(isVerb('pronoun')).toEqual(false);
    expect(isVerb('phrasal verb')).toEqual(true);
    expect(isVerb('verb phrase')).toEqual(true);
  });
});
