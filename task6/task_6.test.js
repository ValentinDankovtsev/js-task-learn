const { diff, isWord, pow } = require("./task_6");

describe("tests of diff", () => {
  test("test result when a>b ", () => {
    expect(diff(5, 1)).toBe(4);
  });
  test("test result when a<b ", () => {
    expect(diff(1, 5)).toBe(4);
  });
});

describe("tests of isWord", () => {
  const MockValue = "Проверить слово";
  test("test result isWord", () => {
    expect(isWord(MockValue)).toBe(false);
  });
});
describe("tests of isWord", () => {
  const MockValue = "Проверить";
  test("test result isWord", () => {
    expect(isWord(MockValue)).toBe(true);
  });
});

describe("tests of pow", () => {
  test("test result pow ", () => {
    expect(pow(3, 3)).toBe(27);
  });
  test("test result pow ", () => {
    expect(pow(1, 3)).toBe(1);
  });
});
