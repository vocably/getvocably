import '@vocably/jest';
import { aiAnalyse, geminiAnalyse, gptAnalyse } from './aiUnitOfSpeechAnalyse';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('unit of speech analyze', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  describe('chatgpt', () => {
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

    it('lemma pos', async () => {
      const result = await gptAnalyse({
        source: 'perambulation',
        partOfSpeech: 'noun',
        sourceLanguage: 'en',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }
      expect(result.value.lemma).toHaveSomeOf('perambulate');
      expect(result.value.lemmaPos).toHaveSomeOf('verb');
    }, 10_000_000);

    it('source capitalized', async () => {
      const result = await gptAnalyse({
        source: 'katze',
        partOfSpeech: 'noun',
        sourceLanguage: 'de',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }
      expect(result.value.source).toEqual('Katze');
    }, 10_000_000);

    it('source not capitalized', async () => {
      const result = await gptAnalyse({
        source: 'laufen',
        partOfSpeech: 'verb',
        sourceLanguage: 'de',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }
      expect(result.value.source).toEqual('laufen');
    }, 10_000_000);
  });

  describe('gemini', () => {
    it('returns successful result', async () => {
      const result = await geminiAnalyse({
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
      const result = await geminiAnalyse({
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
      const result = await geminiAnalyse({
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

    it('lemma pos', async () => {
      const result = await geminiAnalyse({
        source: 'perambulation',
        partOfSpeech: 'noun',
        sourceLanguage: 'en',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }
      expect(result.value.lemma).toHaveSomeOf('perambulate');
      expect(result.value.lemmaPos).toHaveSomeOf('verb');
    }, 10_000_000);

    it('source capitalized', async () => {
      const result = await geminiAnalyse({
        source: 'katze',
        partOfSpeech: 'noun',
        sourceLanguage: 'de',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }
      expect(result.value.source).toEqual('Katze');
    }, 10_000_000);

    it('source not capitalized', async () => {
      const result = await geminiAnalyse({
        source: 'laufen',
        partOfSpeech: 'verb',
        sourceLanguage: 'de',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }
      expect(result.value.source).toEqual('laufen');
    }, 10_000_000);
  });

  describe('aiAnalyse', () => {
    it('returns successful result', async () => {
      const result = await aiAnalyse({
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
  });
});
