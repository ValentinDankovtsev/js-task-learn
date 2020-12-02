const { isStringToDate, isStringToMail, isStringTnumber } = require('./task_10');

describe('isStringToDate', () => {
  test('isStringToDate is true', () => {
    expect(isStringToDate('12.05.1999')).toBe(true);
  });
});

describe('isStringToMail', () => {
  test('isStringToMail is true', () => {
    expect(isStringToMail('dankovcev88@mail.ru')).toBe(true);
  });
  test('isStringToMail is true', () => {
    expect(isStringToMail('dankovcev88@mail')).toBe(false);
  });
});

describe('isStringTnumber', () => {
  test('isStringTnumber is true', () => {
    expect(isStringTnumber('2090000')).toBe(true);
  });
  test('isStringTnumber is true', () => {
    expect(isStringTnumber('+79231993013')).toBe(true);
  });
});
