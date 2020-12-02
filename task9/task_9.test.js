const { isTriangle } = require('./task_9');

describe('isTriangle', () => {
  test('isTriangle is true', () => {
    expect(isTriangle(3, 3, 18)).toBe(true);
  });
  test('isTriangle is true', () => {
    expect(isTriangle(2, 2, 10)).toBe(false);
  });
});

// describe('getInputValue', () => {
//     test('getInputValue is a true', () => {
//         // const MockValue = 5;
//       expect(getInputValue()).toBe();
//     });

// });

// describe('guard', () => {
//     test('guard is true', () => {
//         const MockValue = ['1','2','3']
//       expect(guard(MockValue)).toBe(-8);
//     });
// });
