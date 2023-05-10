const capitalize = require('./capital.js')
test("for capitalize(string) function that are thry to make the first letter capital",()=>{
   const str = "ali";
    expect( capitalize(str)).toBe("Ali"); 
})