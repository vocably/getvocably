import { secureSource } from './secureSource';

describe('secureSource', () => {
  it('should remove double quotes and truncate to 200 characters', () => {
    const rawSource =
      'This is a "test" string with "quotes". Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long.';
    const expected =
      'This is a test string with quotes. Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very ';
    expect(secureSource(rawSource)).toBe(expected);
  });

  it('should keep unchanged', () => expect(secureSource('abc')).toBe('abc'));
});
