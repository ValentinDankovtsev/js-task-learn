const {
  getValueDate,
  getMinutesPassedInCurrentDay,
  isFromBiggerThanTo,
} = require("./task_8");

describe("getValueDate", () => {
  test("getValueDate to result", () => {
    const MockPrompt = jest
      .spyOn(global.window, "prompt")
      .mockImplementation(() => "20 05 2000");
    getValueDate();
    expect(MockPrompt).toBeCalled();
    expect(MockPrompt).toBeCalledWith("DD MM YYYY");
    expect(getValueDate(MockPrompt)).toBe("СБ");
  });
});

describe("getMinutesPassedInCurrentDay", () => {
  beforeEach(() => {
    const DATE_TO_USE = new Date("2020-12-06T03:05:00Z");
    global.Date = jest.fn(() => DATE_TO_USE);
  });
  test("getMinutesPassedInCurrentDay to result", () => {
    const mockConsole = jest.spyOn(console, "log");
    const minutsSinceOfStartDay = 3 * 60 + 5;
    getMinutesPassedInCurrentDay();
    expect(mockConsole).toBeCalledWith(minutsSinceOfStartDay);
  });
});

describe("isFromBiggerThanTo", () => {
  test("isFromBiggerThanTo to result", () => {
    const from = new Date(15, 5, 1988);
    const to = new Date(15, 5, 1990);
    expect(isFromBiggerThanTo(from, to)).toStrictEqual(to);
  });
});
