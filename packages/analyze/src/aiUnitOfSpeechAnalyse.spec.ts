import '@vocably/jest';
import { inspect } from '@vocably/node-sulna';
import {
  aiAnalyse,
  geminiAnalyse,
  getAnalyseCacheFileName,
  gptAnalyse,
} from './aiUnitOfSpeechAnalyse';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('unit of speech analyze', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  describe('chatgpt', () => {
    it('lowercase when possible', async () => {
      const result = await gptAnalyse({
        source: 'Backwash',
        partOfSpeech: 'noun',
        sourceLanguage: 'en-GB',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }
      expect(result.value.source).toEqual('backwash');
    }, 10_000_000);

    it('avoid decapitalization when necessary', async () => {
      const result = await gptAnalyse({
        source: 'wednesday',
        partOfSpeech: 'noun',
        sourceLanguage: 'en-GB',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }
      expect(result.value.source).toEqual('Wednesday');
    }, 10_000_000);

    it('capitalize abbreviations', async () => {
      const result = await gptAnalyse({
        source: 'IPA',
        partOfSpeech: 'noun',
        sourceLanguage: 'en-GB',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }
      expect(result.value.source).toEqual('IPA');
    }, 10_000_000);

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
    it('lowercase when possible', async () => {
      const result = await geminiAnalyse({
        source: 'Backwash',
        partOfSpeech: 'noun',
        sourceLanguage: 'en-GB',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }
      expect(result.value.source).toEqual('backwash');
    }, 10_000_000);

    it('avoid decapitalization when necessary', async () => {
      const result = await geminiAnalyse({
        source: 'wednesday',
        partOfSpeech: 'noun',
        sourceLanguage: 'en-GB',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }
      expect(result.value.source).toEqual('Wednesday');
    }, 10_000_000);

    it('capitalize abbreviations', async () => {
      const result = await geminiAnalyse({
        source: 'IPA',
        partOfSpeech: 'noun',
        sourceLanguage: 'en-GB',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }
      expect(result.value.source).toEqual('IPA');
    }, 10_000_000);

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

    it('does not translate definitions and examples', async () => {
      const result = await geminiAnalyse({
        source: 'երկիր',
        partOfSpeech: 'noun',
        sourceLanguage: 'hyw',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }

      console.log(inspect(result.value));

      expect(
        result.value.definitions.some((definition) => /[a-z]/i.test(definition))
      ).toEqual(false);

      expect(
        result.value.examples.some((example) => /[a-z]/i.test(example))
      ).toEqual(false);
    }, 10_000_000);

    it('uppercase when appropriate', async () => {
      const result = await geminiAnalyse({
        source: 'aarde',
        partOfSpeech: 'noun',
        sourceLanguage: 'nl',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }

      console.log(inspect(result.value));

      expect(
        result.value.examples.some((example) => example.includes('Aarde'))
      ).toEqual(true);
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

  describe('filename', () => {
    it('removes slashes', () => {
      const result = getAnalyseCacheFileName(
        'en',
        'some/file/name',
        'noun/verb'
      );
      expect(result).toEqual(
        'en/units-of-speech/some-file-name/noun-verb.json'
      );
    });

    it('woks okay', () => {
      const result = getAnalyseCacheFileName('hy', 'խնձոր', 'noun');
      expect(result).toEqual('hy/units-of-speech/խնձոր/noun.json');
    });
  });
});
