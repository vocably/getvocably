import { sanitizePartOfSpeech } from './sanitizePartOfSpeech';

describe('sanitizePartOfSpeech', () => {
  it('deals with spaces', () => {
    expect(sanitizePartOfSpeech(' NOUN  ')).toEqual('noun');
  });

  it('converts to verb', () => {
    expect(sanitizePartOfSpeech('verb (past tense)')).toEqual('verb');
  });

  it('substantiv', () => {
    expect(sanitizePartOfSpeech('substantiv')).toEqual('noun');
  });

  it('adverb', () => {
    expect(sanitizePartOfSpeech('adverb')).toEqual('adverb');
  });
});
