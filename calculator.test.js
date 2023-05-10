const Calculator = require('./calculator.js')
const calculate = new Calculator();
describe("Add function do sum of two number ",()=>{
    test("add funcion a +b ", () => {
        const a=3;
        const b=4;
        expect(calculate.add(a,b)).toBe(a+b);
    })
    
    test("add funcion a +b not a*b ", () => {
        const a=3;
        const b=4;
        expect(calculate.add(a,b)).not.toBe(a*b);
    })

    test("add funcion a +b not a*b ", () => {
        const a=3;
        const b=4;
        expect(calculate.add(a,b)).not.toBeGreaterThan(a+b);;
    })

});
describe(" subtract function do  subtract of two number ",()=>{
    test("subtract funcion a -b ", () => {
        const a=3;
        const b=4;
        expect(calculate.subtract(a,b)).toBe(a-b);
    })
    
    test("subtract funcion a -b not a*b ", () => {
        const a=3;
        const b=4;
        expect(calculate.subtract(a,b)).not.toBe(a*b);
    })

    test("subtract funcion a -b not a+b ", () => {
        const a=3;
        const b=4;
        expect(calculate.subtract(a,b)).not.toBeGreaterThan(a+b);;
    })

});

describe("  divide function do  subtract of two number ",()=>{
    test("divivde funcion a /b ", () => {
        const a=3;
        const b=4;
        expect(calculate.divide(a,b)).toBe(a/b);
    })
    
    test("divivde funcion a /b not a*b ", () => {
        const a=3;
        const b=4;
        expect(calculate.divide(a,b)).not.toBe(a*b);
    })

    test("divivde funcion a /b not a+b ", () => {
        const a=3;
        const b=4;
        expect(calculate.divide(a,b)).not.toBeGreaterThan(a+b);;
    })

});

describe("  multiply function do  subtract of two number ",()=>{
    test("multiply funcion a *b ", () => {
        const a=3;
        const b=4;
        expect(calculate.multiply(a,b)).toBe(a*b);
    })
    
    test("multiply funcion a *b not a/b ", () => {
        const a=3;
        const b=4;
        expect(calculate.multiply(a,b)).not.toBe(a/b);
    })

    test("mutiply funcion a *b not a+b ", () => {
        const a=3;
        const b=4;
        expect(calculate.multiply(a,b)).not.toBeLessThan(a+b);;
    })

});