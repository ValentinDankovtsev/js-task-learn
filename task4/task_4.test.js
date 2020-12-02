const { addAgetoUser, user, admin } = require('./task_4');

describe('tests of object', () => {
  test('tests typeof addAgetoUser', () => {
    expect(typeof addAgetoUser).toBe('function');
  });
  test('tests of keys', () => {
    expect(user.name).toBe('John');
  });
  test('tests of keys', () => {
    expect(admin.role).toBe('admin');
  });
});
