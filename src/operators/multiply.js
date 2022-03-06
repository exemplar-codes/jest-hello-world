const { divide } = require('./divide');

function multiply(a, b) {
    return divide(a, divide(1, b));
}

module.exports = { multiply }
