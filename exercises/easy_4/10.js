/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - string: words separated by spaces

    - Output(s):
      - string: words with first letter and last letter swapped

    - Rules + Questions:
      - Each word contains at least one letter
      - String will contain at least one word
      - Input is noting but words and spaces

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  'Oh what a wonderful day it is'
  - Output(s): 'hO thaw a londerfuw yad ti si'

- Data Structure:
  - Work with words as array.

- Algorithm:
  1. Split sentance into array using ' ' delimiter.
  2. Use first letter, slice, and last letter to swap.
  3. Rejoin and return.

- Code:
*/

function swap(str) {
  return console.log(str.split(' ').map(word => {
    return word.length <= 1 ? word :
      word[word.length - 1] +
        word.slice(1, -1) +
        word[0];
  }).join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"