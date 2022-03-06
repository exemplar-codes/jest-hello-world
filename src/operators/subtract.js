const { sum } = require("./sum");

function subtract(a, b) {
  return sum(a, -b);
}

module.exports = { subtract };
