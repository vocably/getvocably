import '@vocably/jest';
import { gptGetPartsOfSpeech } from './gptGetPartsOfSpeech';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('analyze words and phrases', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('returns successful result', async () => {
    const result = await gptGetPartsOfSpeech({
      source: 'looked up',
      language: 'en',
    });
    expect(result.success).toBeTruthy();
    if (!result.success) {
      return;
    }
    expect(result.value).toEqual(['verb']);
  });

  it('returns parts of speech for norwegian', async () => {
    const result = await gptGetPartsOfSpeech({
      source: 'katt',
      language: 'no',
    });
    expect(result.success).toBeTruthy();
    if (!result.success) {
      return;
    }
    expect(result.value).toEqual(['noun']);
  });

  it('returns parts of speech in English', async () => {
    const result = await gptGetPartsOfSpeech({
      source: 'regel',
      language: 'nl',
    });
    expect(result.success).toBeTruthy();
    if (!result.success) {
      return;
    }
    expect(result.value).toEqual(['noun']);
  });

  it('verzamelde', async () => {
    const result = await gptGetPartsOfSpeech({
      source: 'verzamelde',
      language: 'nl',
    });
    expect(result.success).toBeTruthy();
    if (!result.success) {
      return;
    }
  });

  it('что-то', async () => {
    const result = await gptGetPartsOfSpeech({
      source: 'что-то',
      language: 'nl',
    });
    expect(result.success).toBeTruthy();
    if (!result.success) {
      return;
    }

    expect(result.value.length).toEqual(0);
  });

  it('bad(nl)', async () => {
    const result = await gptGetPartsOfSpeech({
      source: 'bad',
      language: 'nl',
    });
    expect(result.success).toBeTruthy();
    if (!result.success) {
      return;
    }

    expect(result.value.length).toEqual(1);
    expect(result.value[0]).toHaveSomeOf('noun');
  });
});
