const { isTriangle, getInputValue, guad, getInputValues } = require("./task_9");

describe("isTriangle", () => {
  test("isTriangle is true", () => {
    expect(isTriangle(3, 3, 18)).toBe(true);
  });
  test("isTriangle is true", () => {
    expect(isTriangle(2, 2, 10)).toBe(false);
  });
});
describe("getInputValue", () => {
  test("getInputValue to result", () => {
    const MockPrompt = jest
      .spyOn(global.window, "prompt")
      .mockImplementation(() => 3);
    const mockConsole = jest.spyOn(console, "log");
    getInputValue(MockPrompt);
    expect(mockConsole).toHaveBeenCalledWith({
      length: 18.84955592153876,
      square: 28.274333882308138,
    });
  });
});

describe("getInputValues", () => {
  test("getInputValues", () => {
    const MockPrompt = jest
      .spyOn(global.window, "prompt")
      .mockImplementation(() => "1,2,3");
    expect(getInputValues(MockPrompt)).toEqual(["1", "2", "3"]);
    expect(guad(getInputValues(MockPrompt))).toBe(-8);
  });
});
