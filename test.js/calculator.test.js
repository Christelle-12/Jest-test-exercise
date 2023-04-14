const {calculator} = require ('../src/calculator')
describe ('calculator', () => {
    test('Addition of two numbers',() => {
        const res =(calculator.addition(3, 8));
        expect(res).toBe(11);
    });
    test('substraction of two numbers',() => {
        const res =(calculator.subtraction(8, 5));
        expect(res).toBe(3);
    });
    test('multiplication of two numbers',() => {
        const res =(calculator.multiplication(3, 8));
        expect(res).toBe(24);
    });
    test('division of two numbers',() => {
        const res =(calculator.division(16, 8));
        expect(res).toBe(2);
    });

})