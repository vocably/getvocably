import '@vocably/jest';
import { inspect } from '@vocably/node-sulna';
import { geminiAnalyzeUnitOfSpeech } from './geminiAnalyzeUnitOfSpeech';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('geminiAnalyzeUnitOfSpeech', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('works for a word', async () => {
    const responseResult = await geminiAnalyzeUnitOfSpeech({
      sourceLanguage: 'en',
      source: 'beginning',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value[0].partOfSpeech).toEqual('noun');
    expect(responseResult.value[1].partOfSpeech).toEqual('verb');
  });

  it('works for a phrasal verb', async () => {
    const responseResult = await geminiAnalyzeUnitOfSpeech({
      sourceLanguage: 'en',
      source: 'come to',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value[0].partOfSpeech).toEqual('phrasal verb');
  });

  it('fixes grammar', async () => {
    const responseResult = await geminiAnalyzeUnitOfSpeech({
      sourceLanguage: 'en',
      source: 'scisors',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value[0].source).toEqual('scissors');
    expect(responseResult.value[0].partOfSpeech).toEqual('noun');
  });

  it('fixes grammar ger,am', async () => {
    const responseResult = await geminiAnalyzeUnitOfSpeech({
      sourceLanguage: 'de',
      source: 'apfel',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value[0].source).toEqual('Apfel');
    expect(responseResult.value[0].partOfSpeech).toEqual('noun');
  });
});
