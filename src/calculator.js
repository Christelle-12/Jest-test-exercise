const calculator = {
    addition: (a, b) => a + b,
    subtraction: (a, b) => a - b,
    multiplication: (a, b) => a * b,
    division: (a, b) => a / b,
};
console.log(calculator.addition(3, 8));

module.exports = {calculator};