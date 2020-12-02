const {
  sumArr, newArray, getMaxValue, getMinValue,
} = require('./task_5');

describe('tests of Arrs', () => {
  test('test sum arr', () => {
    expect(sumArr()).toBe(55);
  });
  test('test getMaxValue', () => {
    const MockValue = [25, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(getMaxValue(MockValue)).toBe(25);
  });
  test('test getMinValue', () => {
    const MockValue = [25, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(getMinValue(MockValue)).toBe(2);
  });
});
