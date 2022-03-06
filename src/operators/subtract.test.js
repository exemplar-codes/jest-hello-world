const { subtract } = require("./subtract");

describe("Subtract", () => {
  it("removes 1 from 2 to equal 1", () => {
    expect(subtract(2, 1)).toBe(1);
  });
});
