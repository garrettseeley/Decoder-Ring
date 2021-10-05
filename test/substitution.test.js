// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() submission tests written by Garrett", () => {
  it("returns false if the given alphabet isn't exactly 26 characters long", () => {
    const actual = substitution("A Message", "a;ls");

    expect(actual).to.be.false;
  });
  it("correctly translates the given phrase, based on the alphabet given to the function", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");

    expect(actual).to.equal(expected);
  });
  it("returns false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitution("thinkful", "jdkewipwmciromdjswditjedif");

    expect(actual).to.be.false;
  });
  it("maintains spaces in the message, before and after encoding or decoding", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );

    expect(actual).to.equal(expected);
  });
  it("ignores capital letters", () => {
      const expected = substitution("A Message", "xoyqmcgrukswaflnthdjpzibev");
      const actual = substitution("a message", "xoyqmcgrukswaflnthdjpzibev")

      expect(actual).to.equal(expected)
  })
});
