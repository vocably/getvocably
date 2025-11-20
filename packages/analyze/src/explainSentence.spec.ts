import '@vocably/jest';
import { inspect } from '@vocably/node-sulna';
import { explainSentence } from './explainSentence';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

xdescribe('explainSentence', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('somewhat works', async () => {
    const responseResult = await explainSentence({
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      source: 'Alice was beginning to get very tired of sitting',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);
  });

  it('dutch', async () => {
    const responseResult = await explainSentence({
      sourceLanguage: 'nl',
      targetLanguage: 'en',
      source:
        'Nu Thom van Campen (VVD) is gekozen tot nieuwe Kamervoorzitter, mogen de grote fracties ondervoorzitters aandragen.',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);
  });
});
