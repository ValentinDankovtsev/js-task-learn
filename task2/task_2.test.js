const {
  maxNumber, getInputValue, getmonthNumber, isCircleInSquare,
} = require('./task_2');

describe('tests of maxNumber', () => {
  test('compare two numbers ', () => {
    expect(maxNumber(2, 3)).toBe(3);
  });
  test('compare two numbers ', () => {
    expect(maxNumber(5, 2)).toBe(5);
  });
});
describe('tests of getInputValue', () => {
  test('getInputValue is a function', () => {
    expect(typeof getInputValue).toBe('function');
  });
  test('getmonthNumber is a function', () => {
    expect(typeof getmonthNumber).toBe('function');
  });
});
describe('tests of getmonthNumber', () => {
  test('getInputValue is positive', () => {
    const mockValue = 5;
    expect(getmonthNumber(mockValue)).toBe('Май');
  });
  test('getInputValue is positive', () => {
    const mockValue = 13;
    expect(getmonthNumber(mockValue)).toBe('Нет таких значений');
  });
});

describe('tests of isCircleInSquare', () => {
  test('isCircleInSquare is positive', () => {
    expect(isCircleInSquare(15, 16)).toBe('Круг не уместиться в квадрате');
  });
  test('isCircleInSquare is positive', () => {
    expect(isCircleInSquare(36, 16)).toBe('Круг уместиться в квадрате');
  });
});
