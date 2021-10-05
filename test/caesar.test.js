// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests written by Garrett", () => {
  it("should return false if the shift amount is 0", () => {
    actual = caesar("Thinkful", 0);

    expect(actual).to.be.false;
  });

  it("should return false if the shift amount is below -25", () => {
    actual = caesar("Thinkful", -26);

    expect(actual).to.be.false;
  });

  it("should return false if the shift amount is greater than 25", () => {
    actual = caesar("Thinkful", 26);

    expect(actual).to.be.false;
  });
  it("should ignore capital letters", () => {
      actual = caesar("A Message", 1)
      expected = "b nfttbhf"

      expect(actual).to.equal(expected);
  });
  it("should handle shifts that go past the end of the alphabet", () => {
      actual = caesar("Zebra", 1);
      expected = "afcsb"

      expect(actual).to.equal(expected)
  });
  it("should maintain spaces and other nonalphabetic symbols in the message before and after encoding", () => {
      actual = caesar("A Test.", 1);
      expected = "b uftu."

      expect(actual).to.equal(expected);
  })
  it("should maintain spaces and other nonalphabetic symbols in the message before and after decoding", () => {
      actual = caesar("b uftu.", 1, false);
      expected = "a test."

      expect(actual).to.equal(expected)
  })
});
