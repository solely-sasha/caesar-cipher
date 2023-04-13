const readline = require("readline-sync");

var input = readline
  .question("What phrase would you like to encrypt? ")
  .toLowerCase();
var shift = parseInt(
  readline.question("How many letters would you like to shift? ")
);

function caesarCipher(input, shift) {
  input = input.toLowerCase();
  var result = "";
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < input.length; i++) {
    // loops through each character of the phrase entered by the user
    var char = input[i];
    if (alphabet.indexOf(char) === -1) {
      // check if the character is in the alphabet and if not, append it to result the way it is
      result += char;
    } else {
      var shiftedIndex = (alphabet.indexOf(char) + shift) % 26; // checks if the index is between 0 and 25 (the index range of the alphabet)
      result += alphabet[shiftedIndex];
    }
  }
  return result;
}

const encryptedPhrase = caesarCipher(input, shift);
console.log(`Encrypted phrase: ${encryptedPhrase}`);
