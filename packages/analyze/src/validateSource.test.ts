import { validateSource } from './validateSource';

describe('validateSource', () => {
  it('should return true for a valid source', () => {
    expect(validateSource('hello')).toBe(true);
    expect(validateSource('world')).toBe(true);
    expect(validateSource('testtesttest')).toBe(true);
  });

  it('should return false if the source contains digits', () => {
    expect(validateSource('hello123')).toBe(false);
    expect(validateSource('123world')).toBe(false);
    expect(validateSource('test1test')).toBe(false);
  });

  it('should return false if the source contains "@" symbol', () => {
    expect(validateSource('hello@world')).toBe(false);
    expect(validateSource('@test')).toBe(false);
    expect(validateSource('test@')).toBe(false);
  });

  it('should return false if the source is longer than 200 characters', () => {
    const longSource = 'a'.repeat(201);
    expect(validateSource(longSource)).toBe(false);
  });

  it('should return false if the source is an empty string', () => {
    expect(validateSource('')).toBe(false);
  });

  it('should return false on more than 10 words', () => {
    expect(
      validateSource(
        'hello world hello world hello world hello world hello world hello world'
      )
    ).toBe(false);
  });

  it('should return true on less than 10 words', () => {
    expect(validateSource('hello world hello')).toBe(true);
  });

  it('should return true for source with maximum allowed length (200 characters) and no invalid characters or spaces', () => {
    const maxLenSource = 'a'.repeat(200);
    expect(validateSource(maxLenSource)).toBe(true);
  });
});
