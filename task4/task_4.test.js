const { addAgetoUser, user, admin } = require("./task_4");

describe("tests of object", () => {
  test("tests typeof addAgetoUser", () => {
    expect(typeof addAgetoUser).toBe("function");
  });
  test("tests of keys", () => {
    expect(user.name).toBe("John");
  });
  test("tests of keys", () => {
    expect(admin.role).toBe("admin");
  });
});
describe("tests of object", () => {
  test("tests typeof addAgetoUser", () => {
    const mockPrompt = jest
      .spyOn(global.window, "prompt")
      .mockImplementation(() => "29");
    const result = addAgetoUser();
    expect(mockPrompt).toBeCalledWith("Введите значение переменной age");
    expect(result).toEqual({ age: "29", name: "John", role: "admin" });
  });
});
