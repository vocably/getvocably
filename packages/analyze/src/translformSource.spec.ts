import { transformSource } from './transformSource';

describe('transformSource', () => {
  it('capitalizes german', () => {
    const source = transformSource({
      source: 'katze',
      sourceLanguage: 'de',
      partOfSpeech: 'noun',
    });

    expect(source).toEqual('Katze');
  });
});
