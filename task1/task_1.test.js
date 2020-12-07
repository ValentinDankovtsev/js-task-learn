// тест к задаче 1

const { multiplay, strlength, sumNumber, getInputValue } = require("./task_1");

describe("function multiplay", () => {
  test("two numbers were  multiplied ", () => {
    const mockConsole = jest.spyOn(console, "log");
    multiplay(5, 6);
    expect(mockConsole).toBeCalled();
    expect(mockConsole).toBeCalledWith(30);
  });
  test("two numbers were  multiplied ", () => {
    const mockConsole = jest.spyOn(console, "log");
    multiplay(5, 5);
    expect(mockConsole).toBeCalled();
    expect(mockConsole).toBeCalledWith(25);
  });
  test("is a function", () => {
    expect(typeof multiplay).toBe("function");
  });
});
// // // // тест к задаче 2
describe("find length of two words", () => {
  test("adds word one and word two to equal 6", () => {
    const mockConsole = jest.spyOn(console, "log");
    strlength("one", "two");
    expect(mockConsole).toBeCalled();
    expect(mockConsole).toBeCalledWith(6);
  });
  test("is a function", () => {
    expect(typeof strlength).toBe("function");
  });
});
// // // // тест к задаче 3

describe("tests of three numbers sum", () => {
  test("issumNumber is positive", () => {
    const mockValue = "345";
    expect(sumNumber(mockValue)).toBe(12);
  });
  describe("tests of getInputValue", () => {
    test("getInputValue is positive", () => {
      const MockPrompt = jest
        .spyOn(global.window, "prompt")
        .mockImplementation(() => "345");
      const result = getInputValue();
      expect(MockPrompt).toBeCalled();
      expect(MockPrompt).toBeCalledWith("Введите трехзначное число");
      expect(result).toBe(12);
    });
  });
});
