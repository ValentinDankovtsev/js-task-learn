const {
  isStringToDate,
  isStringToMail,
  isStringTnumber,
  getStringDate,
  getStringMail,
  getStringTnumber,
} = require("./task_10");

describe("isStringToDate", () => {
  test("isStringToDate is true", () => {
    expect(isStringToDate("12.05.1999")).toBe(true);
  });
});
describe("getStringDate", () => {
  test("getStringDate is true", () => {
    const MockPrompt = jest
      .spyOn(global.window, "prompt")
      .mockImplementation(() => "12.05.1999");
    const result = getStringDate();
    expect(MockPrompt).toBeCalledWith(
      "Ввведите строку в формате dd/mm/yyyy, dd-mm-yyyy, или dd.mm.yyyy"
    );
    expect(result).toBe("12.05.1999");
  });
});

describe("isStringToMail", () => {
  test("isStringToMail is true", () => {
    expect(isStringToMail("dankovcev88@mail.ru")).toBe(true);
  });
  test("isStringToMail is true", () => {
    expect(isStringToMail("dankovcev88@mail")).toBe(false);
  });
});

describe("getStringMail", () => {
  test("getStringMail is true", () => {
    const MockPrompt = jest
      .spyOn(global.window, "prompt")
      .mockImplementation(() => "dankovcev88@mail.ru");
    const result = getStringMail();
    expect(MockPrompt).toBeCalledWith("Ввведите адрес электронной почты");
    expect(result).toBe("dankovcev88@mail.ru");
  });
});

describe("isStringTnumber", () => {
  test("isStringTnumber is true", () => {
    expect(isStringTnumber("2090000")).toBe(true);
  });
  test("isStringTnumber is true", () => {
    expect(isStringTnumber("+79231993013")).toBe(true);
  });
});

describe("getStringTnumber", () => {
  test("getStringTnumber is true", () => {
    const MockPrompt = jest
      .spyOn(global.window, "prompt")
      .mockImplementation(() => "+79231993013");
    const result = getStringTnumber();
    expect(MockPrompt).toBeCalledWith("Ввведите номер телефона");
    expect(result).toBe("+79231993013");
  });
});
