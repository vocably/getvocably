import '@vocably/jest';
import { inspect } from '@vocably/node-sulna';
import { getPartsOfSpeechGemini } from './getPartsOfSpeechGemini';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('geminiAnalyze', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('sentence', async () => {
    const responseResult = await getPartsOfSpeechGemini({
      language: 'en',
      source: 'Allice was beginning to get very tired of sitting',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);
    if (responseResult.success === false) {
      return;
    }
    expect(responseResult.value).toEqual(['phrase']);
  });
});
