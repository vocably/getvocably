import { extractTranslation } from './extractTranslation';

describe('extractTranslation', () => {
  it('works', () => {
    const [text, translation] = extractTranslation('Text   [translation]');

    expect(text).toEqual('Text');
    expect(translation).toEqual('translation');
  });

  it('works without translation', () => {
    const [text, translation] = extractTranslation('Text');

    expect(text).toEqual('Text');
    expect(translation).toEqual('');
  });

  it('works with broken translation', () => {
    const [text, translation] = extractTranslation('Text[translation');

    expect(text).toEqual('Text');
    expect(translation).toEqual('translation');
  });
});
