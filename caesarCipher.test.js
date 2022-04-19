import caesarCipher from './caesarCipher';

describe('caesar cipher will shift message', () => {
  test('works with empty string', () => {
    expect(caesarCipher('', 3)).toBe('');
  });
  test('works with no shift', () => {
    expect(caesarCipher('aaa', 0)).toBe('aaa');
  });
  test('string with shift', () => {
    expect(caesarCipher('aaa', 1)).toBe('bbb');
  });
  test('capitalized string with shift', () => {
    expect(caesarCipher('CDS', 1)).toBe('DET');
  });
  test('sentence with shift', () => {
    expect(caesarCipher('Hello there', 3)).toBe('Khoor wkhuh');
  });
  test('wraps around alphabet', () => {
    expect(caesarCipher('Hello there', 14)).toBe('Vszzc hvsfs');
  });
  test('ignores punctuation', () => {
    expect(caesarCipher('Hello, there', 14)).toBe('Vszzc, hvsfs');
  });
});
