import { removeAuxiliaryWords } from './removeAuxiliaryWords';

describe('removeAuxiliaryWords', () => {
  it('should work', () => {
    expect(removeAuxiliaryWords('had done', 'en')).toEqual('done');
    expect(removeAuxiliaryWords('HAS DONE', 'en')).toEqual('DONE');
    expect(removeAuxiliaryWords('DONE', 'en')).toEqual('DONE');
    expect(removeAuxiliaryWords('hadd DONE', 'en')).toEqual('hadd DONE');
  });
});
