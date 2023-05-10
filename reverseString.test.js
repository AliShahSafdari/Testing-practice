const reverseString = require('./reverseString')
test("This funcion reverse the string",()=>{
    expect(reverseString("help")).toBe('pleh');
});