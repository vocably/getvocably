import '@vocably/jest';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';
import { translateUnitOfSpeechNoCache } from './translateUnitOfSpeech';

configureTestAnalyzer();

describe('translateUnitOfSpeech', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('bank', async () => {
    const translationResult = await translateUnitOfSpeechNoCache({
      source: 'bank',
      partOfSpeech: 'noun',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    expect(translationResult.success).toEqual(true);
    // @ts-ignore
    expect(translationResult.value).toEqual(['банк', 'берег']);
  }, 60_000);

  it('tailor', async () => {
    const translationResult = await translateUnitOfSpeechNoCache({
      source: 'tailor',
      partOfSpeech: 'verb',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });

    console.log(translationResult);

    expect(translationResult.success).toEqual(true);

    if (!translationResult.success) {
      return;
    }

    // @ts-ignore
    expect(translationResult.value[0]).toEqual('шить');
  }, 60_000);

  it('de bron to en', async () => {
    const translationResult = await translateUnitOfSpeechNoCache({
      source: 'bron',
      partOfSpeech: 'noun',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
    });
    expect(translationResult.success).toEqual(true);
    // @ts-ignore
    expect(translationResult.value[0]).toEqual('source');
  }, 60_000);

  it('de bron to ru', async () => {
    const translationResult = await translateUnitOfSpeechNoCache({
      source: 'bron',
      partOfSpeech: 'noun',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });
    expect(translationResult.success).toEqual(true);
    if (!translationResult.success) {
      return;
    }
    expect(translationResult.value.length).toEqual(2);
    // @ts-ignore
    expect(translationResult.value[0]).toEqual('источник');
    expect(translationResult.value[1]).toHaveSomeOf('источник, родник');
  }, 60_000);

  it('arrival', async () => {
    const translationResult = await translateUnitOfSpeechNoCache({
      source: 'arrival',
      partOfSpeech: 'noun',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    expect(translationResult.success).toEqual(true);
    if (!translationResult.success) {
      return;
    }
    expect(translationResult.value.length).toEqual(2);
    // @ts-ignore
    expect(translationResult.value[0]).toEqual('прибытие');
    expect(translationResult.value[1]).toEqual('приезд');
  }, 60_000);

  it('bottle', async () => {
    const translationResult = await translateUnitOfSpeechNoCache({
      source: 'bottle',
      partOfSpeech: 'noun',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    expect(translationResult.success).toEqual(true);
    if (!translationResult.success) {
      return;
    }
    expect(translationResult.value.length).toEqual(2);
    // @ts-ignore
    expect(translationResult.value[0]).toEqual('бутылка');
  }, 60_000);

  it('past tense 01', async () => {
    const translationResult = await translateUnitOfSpeechNoCache({
      source: 'doet',
      partOfSpeech: 'verb',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
    });
    expect(translationResult.success).toEqual(true);
    if (!translationResult.success) {
      return;
    }

    expect(translationResult.value[0]).toEqual('does');
  }, 60_000);

  it('past tense 02', async () => {
    const translationResult = await translateUnitOfSpeechNoCache({
      source: 'aangekondigd',
      partOfSpeech: 'verb',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });
    if (!translationResult.success) {
      return;
    }

    expect(translationResult.value[0]).toEqual('объявлено');
  }, 60_000);
});
