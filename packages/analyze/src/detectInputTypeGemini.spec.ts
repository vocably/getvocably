import '@vocably/jest';
import { inspect } from '@vocably/node-sulna';
import { detectInputTypeGemini } from './detectInputTypeGemini';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('geminiAnalyze', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('sentence', async () => {
    const responseResult = await detectInputTypeGemini({
      language: 'en',
      source: 'Allice was beginning to get very tired of sitting',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);
    if (responseResult.success === false) {
      return;
    }
    expect(responseResult.value).toEqual('sentence');
  });

  it('move on', async () => {
    const responseResult = await detectInputTypeGemini({
      language: 'en',
      source: 'move on',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);
    if (responseResult.success === false) {
      return;
    }
    expect(responseResult.value).toEqual('phrasal verb');
  });

  it('idiom', async () => {
    const responseResult = await detectInputTypeGemini({
      language: 'en',
      source: 'bite the bullet',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);
    if (responseResult.success === false) {
      return;
    }
    expect(responseResult.value).toEqual('idiom');
  });

  it('german idiom', async () => {
    const responseResult = await detectInputTypeGemini({
      language: 'de',
      source: 'In den sauren Apfel beißen',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);
    if (responseResult.success === false) {
      return;
    }
    expect(responseResult.value).toEqual('idiom');
  });

  it('chinese word', async () => {
    const responseResult = await detectInputTypeGemini({
      language: 'zh',
      source: '有趣的',
    });

    expect(responseResult.success).toEqual(true);
    if (responseResult.success === false) {
      return;
    }
    expect(responseResult.value).toEqual('word');
  });

  it('chinese sentence', async () => {
    const responseResult = await detectInputTypeGemini({
      language: 'zh',
      source: '我叫杰克',
    });

    console.log(inspect(responseResult));

    expect(responseResult.success).toEqual(true);
    if (responseResult.success === false) {
      return;
    }
    expect(responseResult.value).toEqual('sentence');
  });
});
