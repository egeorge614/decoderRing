// Write your tests here!
const { expect } = require("chai");
const substitutionModule = require("../src/substitution.js");
/*
The input could include spaces and letters as well as special characters such as #, $, *, etc.

Spaces should be maintained throughout.

Capital letters can be ignored.

The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.

All the characters in the alphabet parameter must be unique. Otherwise, it should return false.

substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false

*/

describe("substitution()", () => {
  it("should accept inputs with special char when decoding", () => {
    const expected = "message";
    const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.eql(expected);
  })


 it("should output special char including spaces and letters when encoding", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  })


it("should ignore capital letters when encoding", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  })


it("should return false if the alphabet param is not 26 char", () => {
    const expected = false;
    const actual = substitutionModule.substitution("thinkful", "short");
    expect(actual).to.eql(expected);
  })


it("should return false if the alphabet param contains duplicate char", () => {
    const expected = false;
    const actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.eql(expected);
  })
});