/* PEDAC Process

- Learnings + Notes:
  - split() returns a new array.

- Understand the Problem:
    - Input(s):
      - string: conbination of words delimited by spaces

    - Output(s):
      - string: second to last word of input

    - Rules + Questions:
      - Words separated by spaces.
      - String will always contain at least two words.

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  'last word' | 'Launch School is great!'
  - Output(s): 'last'      | 'is'

- Data Structure:
  - Inputs/outputs are strings.
  - Will convert input string to array to handle individual words.

- Algorithm:
  1. Convert input string to array with space as delimiter.
  2. Get and return second to last word based on array length.

- Code:
*/

function penultimate(str) {
  let strArray = str.split(' ');

  return strArray[strArray.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/* Returning Middle Word
  - Edge Cases:
    - What to do with even numbrer of words?
      - Will select the first word (round down)
    - What to do with 0/1/2 words?
      - 0: return 'empty'
      - 1: return single word
      - 2: return first word
    - Punctuation?
      - Replace , . ! ? ;
*/

function middle(str) {
  if (!str) return 'empty';
  let strArray = str.replace(/,|;|\.|!|\?/g, '').split(' ');
  let length = strArray.length;

  switch (length) {
    case 1:
    case 2: return strArray[0];
    default: return length % 2 === 0 ? strArray[(strArray.length / 2) - 1]
      : strArray[Math.floor(strArray.length / 2)];
  }
}

console.log(middle());
console.log(middle('THIS? returned.'));
console.log(middle('Return THIS! word.'));
console.log(middle('Return THIS, not this.'));