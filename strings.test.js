import { capitalize, reverse } from './strings';

describe('capitalize', () => {
  test(`'a' to be 'A'`, () => {
    expect(capitalize('a')).toBe('A');
  });
  test('"" to be ""', () => {
    expect(capitalize('')).toBe('');
  });
  test(`'A' to be 'A'`, () => {
    expect(capitalize('A')).toBe('A');
  });
  test(`'she' to be 'She'`, () => {
    expect(capitalize('she')).toBe('She');
  });
  test(`'this is a sentence' to be 'This is a sentence'`, () => {
    expect(capitalize('this is a sentence')).toBe('This is a sentence');
  });
});

describe('reverse function', () => {
  test('can reverse empty string', () => {
    expect(reverse('')).toBe('');
  });
  test('can reverse a single letter', () => {
    expect(reverse('a')).toBe('a');
  });
  test('can reverse a single word', () => {
    expect(reverse('apple')).toBe('elppa');
  });
  test('can reverse a sentence', () => {
    expect(reverse('eat lunch')).toBe('hcnul tae');
  });
});
