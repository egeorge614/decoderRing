// Write your tests here!
const { expect } = require("chai");
const polybiusModule = require("../src/polybius.js");

/*
You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.

When encoding, your output should still be a string.

When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.

Spaces should be maintained throughout.

Capital letters can be ignored.

The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.

polybius("thinkful"); //> "4432423352125413"
polybius("Hello world"); //> '3251131343 2543241341'

polybius("3251131343 2543241341", false); //> "hello world"
polybius("4432423352125413", false); //> "th(i/j)nkful
polybius("44324233521254134", false); //> false
*/

describe("polybius()", () => {
  it("should return a string when encoding", () => {
    const expected = "4432423352125413" ;
    const actual = polybiusModule.polybius("thinkful");
    expect(actual).to.eql(expected);
  });
  
  it("should return return false if the number of char is odd when decoding ", () => {
    
    const expected = false;
    const actual = polybiusModule.polybius("44324233521254134", false);
    expect(actual).to.eql(expected);
  });
  
  it("should ignore capital letters when encoding", () => {
    const expected = "3251131343 2543241341";
    const actual = polybiusModule.polybius("Hello World");
    expect(actual).to.eql(expected);
  });
  
  it("should maintain spacing when encoding", () => {
    const expected = "3251131343 2543241341";
    const actual = polybiusModule.polybius("Hello World");
    expect(actual).to.eql(expected);
  });
  
  it("should maintain spacing when decoding", () => {
    const expected = "hello world";
    const actual = polybiusModule.polybius("3251131343 2543241341", false);
    expect(actual).to.eql(expected);
  });
  
 /* it("should encode letter I and J to 42", () => {
    const expected = "4432423352125413";
    const actual = polybiusModule.polybius("th(i/j)nkful");
    expect(actual).to.eql(expected);
  });
 */ 
    it("should decode 42 to letter I and J", () => {
    const expected = "th(i/j)nkful";
    const actual = polybiusModule.polybius("4432423352125413", false);
    expect(actual).to.eql(expected);
  });
  
  
});