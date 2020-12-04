const { isTriangle } = require('./task_9');

describe('isTriangle', () => {
  test('isTriangle is true', () => {
    expect(isTriangle(3, 3, 18)).toBe(true);
  });
  test('isTriangle is true', () => {
    expect(isTriangle(2, 2, 10)).toBe(false);
  });
});
