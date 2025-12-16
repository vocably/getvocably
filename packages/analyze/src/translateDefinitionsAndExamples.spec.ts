import '@vocably/jest';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';
import { translateDefinitionsAndExamples } from './translateDefinitionsAndExamples';

configureTestAnalyzer();

describe('translateDefinitionsAndExmaples', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('works', async () => {
    const result = await translateDefinitionsAndExamples({
      sourceLanguage: 'de',
      targetLanguage: 'en',
      definitions: ['Frucht des Apfelbaums', 'rundes Obst mit glatter Schale'],
      examples: ['Ich esse einen Apfel.', 'Der Apfel ist rot.'],
    });

    expect(result.success).toEqual(true);

    if (result.success === false) {
      return;
    }

    expect(
      result.value.definitions.every((definition) =>
        /^.+\(.+\)$/.test(definition)
      )
    ).toEqual(true);

    expect(
      result.value.examples.every((definition) => /^.+\(.+\)$/.test(definition))
    ).toEqual(true);
  });

  it('works with empty definitions and example', async () => {
    const result = await translateDefinitionsAndExamples({
      sourceLanguage: 'de',
      targetLanguage: 'en',
      definitions: [],
      examples: [],
    });

    expect(result.success).toEqual(true);

    if (result.success === false) {
      return;
    }

    expect(result.value.definitions).toEqual([]);
    expect(result.value.examples).toEqual([]);
  });

  it('works with empty definitions', async () => {
    const result = await translateDefinitionsAndExamples({
      sourceLanguage: 'de',
      targetLanguage: 'en',
      definitions: [],
      examples: ['Ich esse einen Apfel.', 'Der Apfel ist rot.'],
    });

    expect(result.success).toEqual(true);

    if (result.success === false) {
      return;
    }

    expect(result.value.definitions).toEqual([]);

    expect(
      result.value.examples.every((definition) => /^.+\(.+\)$/.test(definition))
    ).toEqual(true);
  });

  it('works with empty examples', async () => {
    const result = await translateDefinitionsAndExamples({
      sourceLanguage: 'de',
      targetLanguage: 'en',
      definitions: ['Frucht des Apfelbaums', 'rundes Obst mit glatter Schale'],
      examples: [],
    });

    expect(result.success).toEqual(true);

    if (result.success === false) {
      return;
    }

    expect(
      result.value.definitions.every((definition) =>
        /^.+\(.+\)$/.test(definition)
      )
    ).toEqual(true);

    expect(result.value.examples).toEqual([]);
  });
});
