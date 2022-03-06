const { divide } = require("./divide");

describe("Divide", () => {
  it("Distribute 2 into 2 to equal 1", () => {
    expect(divide(2, 2)).toBe(1);
  });
});
