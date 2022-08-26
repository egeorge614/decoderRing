// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

/*If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.

Spaces should be maintained throughout, as should other nonalphabetic symbols.

Capital letters can be ignored.

If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).

caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false
*/

describe("caesar()", () => {
  it("should return false if the shift value isn't present", () => 
  {
    const expected = false;
    const actual = caesarModule.caesar("thinkful");
    expect(actual).to.eql(expected);
  });
  
  it("should return false if the shift value is equal to 0", () => {
    const expected = false;
    const actual = caesarModule.caesar("thinkful", 0);
    expect(actual).to.eql(expected);
  });
  
  it("should return false if the shift value is less than -25", () => {
    const expected = false;
    const actual = caesarModule.caesar("thinkful", -26);
    expect(actual).to.eql(expected);
  });
  
  it("should return false if the shift value is greater than 25", () => {
    const expected = false;
    const actual = caesarModule.caesar("thinkful", 99);
    expect(actual).to.eql(expected);
  });
  
  it("should maintain spaces throughout, and should maintain other nonalphabetic symbols", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesarModule.caesar("This is a secret message!", 8);
    expect(actual).to.eql(expected);
  });
  
  it("should ignore capital letters", () => {
    const expected = "this is a secret message!";
    const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.eql(expected);
  });
  
  it("should wrap around to the front of the alphabet when a letter is shifted so that it goes off the alphabet so a shift of 3 on the letter z, would wrap around to the front of the alphabet so z becomes c", () => {
    const expected = "abc";
    const actual = caesarModule.caesar("xyz", 3);
    expect(actual).to.eql(expected);
  });
  
  
});