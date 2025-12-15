import '@vocably/jest';
import { inspect } from '@vocably/node-sulna';
import { getPartsOfSpeechGemini } from './getPartsOfSpeechGemini';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('geminiAnalyzeUnitOfSpeech', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('works for a word', async () => {
    const responseResult = await getPartsOfSpeechGemini({
      language: 'en',
      source: 'beginning',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value[0].partOfSpeech).toEqual('noun');
  });

  it('avoids bullshit', async () => {
    const responseResult = await getPartsOfSpeechGemini({
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

  it('works for a phrasal verb', async () => {
    const responseResult = await getPartsOfSpeechGemini({
      language: 'en',
      source: 'come to',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value[0].partOfSpeech).toHaveSomeOf([
      'verb',
      'phrasal verb',
    ]);
  });

  it('fixes grammar', async () => {
    const responseResult = await getPartsOfSpeechGemini({
      language: 'en',
      source: 'scisors',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value[0].headword).toEqual('scissors');
    expect(responseResult.value[0].partOfSpeech).toEqual('noun');
  });

  it('fixes grammar ger,am', async () => {
    const responseResult = await getPartsOfSpeechGemini({
      language: 'de',
      source: 'apfel',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value[0].headword).toEqual('Apfel');
    expect(responseResult.value[0].partOfSpeech).toEqual('noun');
  });

  it('duck', async () => {
    const responseResult = await getPartsOfSpeechGemini({
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

  it('mather', async () => {
    const responseResult = await getPartsOfSpeechGemini({
      language: 'en',
      source: 'mather',
    });

    expect(responseResult.success).toEqual(true);
    if (responseResult.success === false) {
      return;
    }
    expect(responseResult.value.length).toEqual(1);
    expect(responseResult.value[0].exists).toEqual(false);
  });

  it('omits insane verbs', async () => {
    const responseResult = await getPartsOfSpeechGemini({
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

  it('avoid splitting the word', async () => {
    const responseResult = await getPartsOfSpeechGemini({
      language: 'nl',
      source: 'sla rechts af',
    });

    expect(responseResult.success).toEqual(true);

    if (responseResult.success === false) {
      return;
    }

    expect(responseResult.value.length).toEqual(1);

    expect(responseResult.value[0].headword).toEqual('sla rechts af');
    expect(responseResult.value[0].partOfSpeech).toEqual('verb');
    expect(responseResult.value[0].lemma).toEqual('afslaan');
    expect(responseResult.value[0].lemmaPos).toEqual('verb');
  });
});
