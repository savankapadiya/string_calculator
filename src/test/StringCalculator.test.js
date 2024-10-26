import { add } from '../utils/StringCalculator';

describe('String Calculator Tests', () => {

  test('Empty string returns 0', () => {
    expect(add("")).toBe(0);
  });

  test('Single number returns that number', () => {
    expect(add("1")).toBe(1);
  });

  test('Two numbers return their sum', () => {
    expect(add("1,5")).toBe(6);
  });

  test('Multiple numbers return their sum', () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  test('Handles new lines between numbers', () => {
    const result = add('1\n2,3');
    console.log({result})
    expect(add(`1\n2,3`)).toBe(6);
  });

  test('Custom delimiter support', () => {
    expect(add(`//;\n1;2`)).toBe(3);
  });

  test('Negative numbers throw error', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });

  test('Multiple negative numbers throw error', () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
  });

  test('Ignores numbers greater than 1000', () => {
    expect(add("1000,2")).toBe(1002);
  });

  test('Handles mixed new lines and custom delimiters', () => {
    expect(add(`//;\n1;2\n3`)).toBe(6);
  });
});
