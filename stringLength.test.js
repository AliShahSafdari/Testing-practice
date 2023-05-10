const stringLength = require('./stringLength');

describe('String length funcion', () => {
    test("Alishah string length must be between 1 and 10", () => {
        const str = "ALishah";
        const strLength = str.length;
        expect(stringLength(str)).toBe(strLength);
    });

    test("Alishah ", () => {
        const str = "ALishahSafdari";
        const strError = "The string length is not between 1 and 10"
        expect(stringLength(str)).toBe(strError);
    })
    test("", () => {
        const str = "ALishahSafdari";
        const strError = "The string length is not between 1 and 10"
        expect(stringLength(str)).toBe(strError);
    })
});