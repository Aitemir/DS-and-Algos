function caesarCipherEncryptor(string, key) {
    const newLetters = [];
      const newKey = key % 26;
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      for (let letter of string) {
          newLetters.push(getNewLetter(letter, newKey, alphabet));
      }
      return newLetters.join('');
  }
  
function getNewLetter(letter, key, alphabet) {
    const newLetterCode = alphabet.indexOf(letter) + key;
    return alphabet[newLetterCode % 26];
}

let string = 'xyz';

console.log(caesarCipherEncryptor(string, 2));