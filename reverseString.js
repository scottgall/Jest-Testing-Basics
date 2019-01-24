
const reverseString = str =>
  str.toLowerCase().split('').reduce((revString, char) => char + revString );

module.exports = reverseString;