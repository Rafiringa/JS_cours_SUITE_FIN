const addNum = require("./add");

test("Additionne 2 nombers", () => {
    expect(addNum(1, 2)).toBe(3);
    expect(addNum(2, -4)).toBe(-2);
});