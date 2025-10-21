import '@vocably/jest';
import { gptAnalyse, partsOfSpeech } from './gptAnalyse';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('analyze words and phrases', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  describe('partsOfSpeech', () => {
    it('returns successful result', async () => {
      const result = await partsOfSpeech({
        source: 'looked up',
      });
      console.log(result);
      expect(result.success).toBeTruthy();
    });
  });

  describe('gptAnalyse', () => {
    it('returns successful result', async () => {
      const result = await gptAnalyse({
        source: 'die Frage',
        partOfSpeech: 'noun',
        sourceLanguage: 'es',
      });
      console.log(result);
      expect(result.success).toBeTruthy();
    }, 10_000_000);
  });
});
