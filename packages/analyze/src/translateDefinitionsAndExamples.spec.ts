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

    console.log(result.value);

    expect(
      result.value.definitions.every((definition) =>
        /^.+\[.+\]$/.test(definition)
      )
    ).toEqual(true);

    expect(
      result.value.examples.every((definition) => /^.+\[.+\]$/.test(definition))
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

    console.log(result.value);

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

    console.log(result.value);

    expect(result.value.definitions).toEqual([]);

    expect(
      result.value.examples.every((definition) => /^.+\[.+\]$/.test(definition))
    ).toEqual(true);
  });

  it('works with empty examples', async () => {
    const definitions = [
      'Frucht des Apfelbaums',
      'rundes Obst mit glatter Schale',
    ];
    const result = await translateDefinitionsAndExamples({
      sourceLanguage: 'de',
      targetLanguage: 'en',
      definitions,
      examples: [],
    });

    expect(result.success).toEqual(true);

    if (result.success === false) {
      return;
    }

    console.log(result.value);

    expect(
      result.value.definitions.every(
        (definition, index) =>
          definition.startsWith(definitions[index]) &&
          /^.+\[.+\]$/.test(definition)
      )
    ).toEqual(true);

    expect(result.value.examples).toEqual([]);
  });

  it('translates small units of speech', async () => {
    const definitions = ['zonder kleding', 'niet bedekt', 'kwetsbaar'];
    const examples = ['bloot voeten', 'bloot zijn', 'bloot hoofd'];
    const result = await translateDefinitionsAndExamples({
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
      definitions,
      examples,
    });

    expect(result.success).toEqual(true);

    if (result.success === false) {
      return;
    }

    console.log(result.value);

    expect(
      definitions.every(
        (definition, index) =>
          result.value.definitions[index].startsWith(definition) &&
          /^.+\[.+\]$/.test(result.value.definitions[index])
      )
    ).toEqual(true);

    expect(
      examples.every(
        (example, index) =>
          result.value.examples[index].startsWith(example) &&
          /^.+\[.+\]$/.test(result.value.examples[index])
      )
    ).toEqual(true);
  });
});
