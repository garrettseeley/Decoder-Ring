// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const baseAlpha = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false;
    }
    input = input.toLowerCase();
    output = "";
    if (alphabet.length != 26) {
      return false;
    }
    let sortedAlph = alphabet.split("");
    sortedAlph.sort();
    for (let i = 0; i < sortedAlph.length - 1; i++) {
      if (sortedAlph[i] === sortedAlph[i + 1]) {
        return false;
      }
    }
    //encoding
    if (encode) {
      for (let index of input) {
        if (index === " ") {
          output += " ";
        } else {
          for (let i = 0; i < baseAlpha.length; i++) {
            if (index === baseAlpha[i]) {
              output += alphabet[i];
            }
          }
        }
      }
    }
    if (!encode) {
      for (let index of input) {
        if (index === " ") {
          output += " ";
        } else {
          for (let i = 0; i < alphabet.length; i++) {
            if (index === alphabet[i]) {
              output += baseAlpha[i];
            }
          }
        }
      }
    }
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
