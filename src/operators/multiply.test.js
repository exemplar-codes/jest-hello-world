const { multiply } = require("./multiply");

describe("Multiply", () => {
  it("2 into 2 to equal 4", () => {
    expect(multiply(2, 2)).toBe(4);
  });
});
