const {
  maxNumber,
  getInputValue,
  getmonthNumber,
  isCircleInSquare,
} = require("./task_2");

describe("tests of maxNumber", () => {
  test("compare two numbers ", () => {
    const mockConsole = jest.spyOn(console, "log");
    maxNumber(5, 6);
    expect(mockConsole).toBeCalled();
    expect(mockConsole).toBeCalledWith(6);
  });
});
describe("tests of getInputValue", () => {
  test("getInputValue is a function", () => {
    expect(typeof getInputValue).toBe("function");
  });
  test("getmonthNumber is a function", () => {
    expect(typeof getmonthNumber).toBe("function");
  });
});
describe("tests of getmonthNumber", () => {
  test("getInputValue is positive", () => {
    const mockValue = 5;
    expect(getmonthNumber(mockValue)).toBe("Май");
  });
  test("getInputValue is positive", () => {
    const mockValue = 13;
    expect(getmonthNumber(mockValue)).toBe("Нет таких значений");
  });
  test("getInputValue is positive", () => {
    const mockPrompt = jest
      .spyOn(global.window, "prompt")
      .mockImplementation(() => 3);
    const result = getInputValue();
    expect(mockPrompt).toBeCalled();
    expect(mockPrompt).toBeCalledWith("Введите любое число от 1 до 12");
    expect(result).toBe("Март");
  });
});

describe("tests of isCircleInSquare", () => {
  test("isCircleInSquare is positive", () => {
    expect(isCircleInSquare(15, 16)).toBe("Круг не уместиться в квадрате");
  });
  test("isCircleInSquare is positive", () => {
    expect(isCircleInSquare(36, 16)).toBe("Круг уместиться в квадрате");
  });
});
