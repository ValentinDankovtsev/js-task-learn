const { getSum, getTubleMulOfSeven, getInputNumber } = require("./task_3");

describe("tests of getSum", () => {
  test("tests of getSum 50 ", () => {
    const mockConsole = jest.spyOn(console, "log");
    getSum(100);
    expect(mockConsole).toBeCalled();
    expect(mockConsole).toBeCalledWith(3825);
  });
  test("getSum is a function", () => {
    expect(typeof getSum).toBe("function");
  });
});

describe("test of getInputNumber", () => {
  test("test of getInputNumber", () => {
    const mockPrompt = jest
      .spyOn(global.window, "prompt")
      .mockImplementation(() => 5);
    const mockConsole = jest.spyOn(console, "log");
    getInputNumber(mockPrompt);
    expect(mockConsole).toHaveBeenCalledWith(1.8);
  });
});

describe("getTubleMulOfSeven", () => {
  it("getTubleMulOfSeven", () => {
    jest.spyOn(console, "log");
    getTubleMulOfSeven();
    expect(console.log).toHaveBeenCalledTimes(9);
    expect(console.log).toHaveBeenCalledWith("7 x 1 = 7");
    expect(console.log).toHaveBeenCalledWith("7 x 2 = 14");
    expect(console.log).toHaveBeenCalledWith("7 x 3 = 21");
    expect(console.log).toHaveBeenCalledWith("7 x 4 = 28");
    expect(console.log).toHaveBeenCalledWith("7 x 5 = 35");
    expect(console.log).toHaveBeenCalledWith("7 x 6 = 42");
    expect(console.log).toHaveBeenCalledWith("7 x 7 = 49");
    expect(console.log).toHaveBeenCalledWith("7 x 8 = 56");
    expect(console.log).toHaveBeenCalledWith("7 x 9 = 63");
  });
});
