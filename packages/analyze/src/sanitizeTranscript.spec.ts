import { sanitizeTranscript } from './sanitizeTranscript';

describe('sanitizeTranscript', () => {
  it('works on /', () => {
    expect(sanitizeTranscript('/abc/')).toEqual('abc');
  });

  it('works on []]', () => {
    expect(sanitizeTranscript('[abc]')).toEqual('abc');
  });

  it('keeps unchanged', () => {
    expect(sanitizeTranscript('abc')).toEqual('abc');
  });
});
