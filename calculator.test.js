import { add, subtract, divide, multiply } from './calculator';

describe('calculator functions are working', () => {
  test('adds two numbers together', () => {
    expect(add(1, 2)).toBe(3);
  });
  test('subtracts two numbers', () => {
    expect(subtract(1, 2)).toBe(-1);
  });
  test('multiplies two numbers', () => {
    expect(multiply(1, 2)).toBe(2);
  });
  test('divides two numbers', () => {
    expect(divide(2, 2)).toBe(1);
  });
});
