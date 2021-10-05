// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests written by Garrett", () => {
  it("when encoding translate the letters i and j to 42", () => {
    const expected = "424222221351";
    const actual = polybius("jiggle");

    expect(actual).to.equal(expected);
  });
  it("when decoding should translate 42 to (i/j)", () => {
    const actual = polybius("424222221351", false);

    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });
  it("ignores capital letters", () => {
    const expected = "23513434112251";
    const actual = polybius("Message");

    expect(actual).to.equal(expected);
  });
  it("maintains spaces in the message before and after encoding", () => {
    const expected = "11 23513434112251";
    const actual = polybius("A Message");

    expect(actual).to.equal(expected);
  });
  it("maintains spaces in the message before and after decoding", () => {
    const expected = "a message";
    const actual = polybius("11 23513434112251", false);

    expect(actual).to.equal(expected);
  });
});
