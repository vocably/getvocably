import '@vocably/jest';
import { inspect } from 'node:util';
import { getPartsOfSpeechGpt } from './getPartsOfSpeechGpt';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('getPartsOfSpeech', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('returns successful result', async () => {
    const result = await getPartsOfSpeechGpt({
      source: 'looked up',
      language: 'en',
    });
    expect(result.success).toBeTruthy();
    if (!result.success) {
      return;
    }
    expect(result.value).toEqual([
      {
        headword: 'looked up',
        partOfSpeech: 'verb',
        lemma: 'look up',
        lemmaPos: 'verb',
        exists: true,
      },
    ]);
  });

  it('avoids bullshit', async () => {
    const responseResult = await getPartsOfSpeechGpt({
      language: 'en',
      source: 'employee',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value.length).toEqual(1);

    expect(responseResult.value[0].partOfSpeech).toEqual('noun');
  });

  it('returns parts of speech for norwegian', async () => {
    const result = await getPartsOfSpeechGpt({
      source: 'katt',
      language: 'no',
    });
    expect(result.success).toBeTruthy();
    if (!result.success) {
      return;
    }

    expect(result.value).toEqual([
      {
        lemma: 'katt',
        lemmaPos: 'noun',
        partOfSpeech: 'noun',
        headword: 'katt',
        exists: true,
      },
    ]);
  });

  it('returns parts of speech in English', async () => {
    const result = await getPartsOfSpeechGpt({
      source: 'regel',
      language: 'nl',
    });
    expect(result.success).toBeTruthy();
    if (!result.success) {
      return;
    }
    expect(result.value).toEqual([
      {
        lemma: 'regel',
        lemmaPos: 'noun',
        partOfSpeech: 'noun',
        headword: 'regel',
        exists: true,
      },
    ]);
  });

  it('verzamelde', async () => {
    const result = await getPartsOfSpeechGpt({
      source: 'verzamelde',
      language: 'nl',
    });
    expect(result.success).toBeTruthy();
    if (!result.success) {
      return;
    }
    expect(result.value).toEqual([
      {
        lemma: 'verzamelen',
        lemmaPos: 'verb',
        partOfSpeech: 'verb',
        headword: 'verzamelde',
        exists: true,
      },
    ]);
  });

  it('что-то', async () => {
    const result = await getPartsOfSpeechGpt({
      source: 'что-то',
      language: 'nl',
    });
    expect(result.success).toBeFalsy();
    if (!result.success) {
      return;
    }
    expect(result.value[0].exists).toBeFalsy();
  });

  it('bad(nl)', async () => {
    const result = await getPartsOfSpeechGpt({
      source: 'bad',
      language: 'nl',
    });
    expect(result.success).toBeTruthy();
    if (!result.success) {
      return;
    }

    expect(result.value).toEqual([
      {
        lemma: 'bad',
        lemmaPos: 'noun',
        partOfSpeech: 'noun',
        headword: 'bad',
        exists: true,
      },
    ]);
  });

  it('duck', async () => {
    const responseResult = await getPartsOfSpeechGpt({
      language: 'en',
      source: 'duck',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value[0].headword).toEqual('duck');
    expect(responseResult.value[0].partOfSpeech).toEqual('noun');

    expect(responseResult.value[1].headword).toEqual('duck');
    expect(responseResult.value[1].partOfSpeech).toEqual('verb');
  });

  it('omits insane verbs', async () => {
    const responseResult = await getPartsOfSpeechGpt({
      language: 'en',
      source: 'icicle',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value.length).toEqual(1);

    expect(responseResult.value[0].headword).toEqual('icicle');
    expect(responseResult.value[0].partOfSpeech).toEqual('noun');
  });

  it('mather', async () => {
    const responseResult = await getPartsOfSpeechGpt({
      language: 'en',
      source: 'mather',
    });

    expect(responseResult.success).toEqual(true);
  });

  it('avoid splitting the word', async () => {
    const responseResult = await getPartsOfSpeechGpt({
      language: 'nl',
      source: 'sla rechts af',
    });

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value.length).toEqual(1);

    expect(responseResult.value[0].headword).toEqual('sla rechts af');
    expect(responseResult.value[0].partOfSpeech).toHaveSomeOf([
      'verb',
      'verb phrase',
    ]);
    expect(responseResult.value[0].lemma).toEqual('afslaan');
    expect(responseResult.value[0].lemmaPos).toEqual('verb');
  });
});
