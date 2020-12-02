const { getSum,  averageOddNumbers } = require('./task_3');  
// getTubleMulOfSeven , не понял,как протестить?

describe('tests of getSum', () => {
  test('tests of getSum 50 ', () => {
    expect(getSum(60)).toBe(605);
  });
  test('getSum is a function', () => {
    expect(typeof getSum).toBe('function');
  });
});

describe('tests of averageOddNumbers', () => {
  test('test of averageOddNumbers', () => {
    const mockValue = 3;
    expect(averageOddNumbers(mockValue)).toBe(1.3333333333333333);
  });
  test('test of averageOddNumbers', () => {
    const mockValue = 9;
    expect(averageOddNumbers(mockValue)).toBe(2.7777777777777777);
  });
});
