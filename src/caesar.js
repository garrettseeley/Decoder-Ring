// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    // creating default variables
    input = input.toLowerCase();
    let output = "";
    // if shift is equal to 0, less than -25 or greater than 25 return false
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    // determine whether encoding or decoding
    if (!encode) {
      shift = -shift;
    }
    // for loop to loop through each character in the string
    for (let index of input) {
      // convert the indexed character to charCode
      let convertedToNumbers = index.charCodeAt();
      // if statement to determine if the character at the current index is a letter or not
      if (convertedToNumbers >= 97 && convertedToNumbers <= 122) {
        // add the shift onto the charChode
        convertedToNumbers += shift;
        // if charCode falls within the list for still being a letter, push it into the string right away, and if it is under 97, add 26, if above 122 subtract 26
        if (convertedToNumbers < 97) {
          convertedToNumbers += 26;
        }
        if (convertedToNumbers > 122) {
          convertedToNumbers -= 26;
        }
        output += String.fromCharCode(convertedToNumbers);
      } else {
        // if not a number push the character right back into the string
        output += String.fromCharCode(convertedToNumbers);
      }
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
