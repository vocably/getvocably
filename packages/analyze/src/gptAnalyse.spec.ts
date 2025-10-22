import '@vocably/jest';
import { gptAnalyse } from './gptAnalyse';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('analyze words and phrases', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('returns successful result', async () => {
    const result = await gptAnalyse({
      source: 'die Frage',
      partOfSpeech: 'noun',
      sourceLanguage: 'es',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }
    expect(result.value.gender).toEqual('feminine');
  }, 10_000_000);

  it('adds pronunciation', async () => {
    const result = await gptAnalyse({
      source: 'hacha',
      partOfSpeech: 'noun',
      sourceLanguage: 'es',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }
    expect(result.value.transcript[0]).toHaveSomeOf(['ˈ', "'"]);
  }, 10_000_000);

  it('adds number', async () => {
    const result = await gptAnalyse({
      source: 'вши',
      partOfSpeech: 'noun',
      sourceLanguage: 'ru',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }
    expect(result.value.number).toHaveSomeOf('plural');
  }, 10_000_000);
});
