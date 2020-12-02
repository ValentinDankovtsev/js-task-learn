// тест к задаче 1

const {
  multiplay, strlength, isValidateInputValue, getInputValue, sumNumber,
} = require('./task_1');

describe('function multiplay', () => {
  test('two numbers were  multiplied ', () => {
    expect(multiplay(5, 6)).toBe(30);
  });
  test('two numbers were  multiplied ', () => {
    expect(multiplay(5, 11)).toBe(55);
  });
  test('is a function', () => {
    expect(typeof multiplay).toBe('function');
  });
});
// // // // тест к задаче 2
describe('find length of two words', () => {
  test('adds word one and word two to equal 6', () => {
    expect(strlength('one', 'two')).toBe(6);
  });
  test('is a function', () => {
    expect(typeof strlength).toBe('function');
  });
});
// // // тест к задаче 3

describe('tests of three numbers sum', () => {
  test('isValidateInputValue is positive', () => {
    expect(isValidateInputValue(34)).toBeTruthy;
  });
});
describe('tests of three numbers sum', () => {
  test('issumNumber is positive', () => {
    const mockValue = '345';

    expect(sumNumber(mockValue)).toBe(12);
  });
});
