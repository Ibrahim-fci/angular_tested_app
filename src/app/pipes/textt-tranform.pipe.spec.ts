import { TexttTranformPipe } from './textt-tranform.pipe';

describe('TexttTranformPipe', () => {
  let pipe: TexttTranformPipe;

  beforeEach(() => {
    pipe = new TexttTranformPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms text to uppercase', () => {
    const input = 'hello';
    const transformedText = pipe.transform(input);
    expect(transformedText).toEqual('HELLO');
  });

  it('returns null if value is null', () => {
    const input = null;
    const transformedText = pipe.transform(input);
    expect(transformedText).toBeNull();
  });

  it('returns null if value is undefined', () => {
    const input = undefined;
    const transformedText = pipe.transform(input);
    expect(transformedText).toBeNull();
  });


});
