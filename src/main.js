const { sum } = require('./operators/sum');
const { subtract } = require('./operators/subtract');
const { multiply } = require('./operators/multiply');
const { divide } = require('./operators/divide');

function main(a, b, c, d) {
    return sum(a, subtract(b, multiply(c, divide(d))));
}
// console.log(main(1, 1, 1, 1));

module.exports = {main}
