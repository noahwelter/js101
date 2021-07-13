/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - string: word to test for spelling blocks

    - Output(s):
      - boolean: true if word can be spelled using set of blocks

    - Rules + Questions:
      - Set of blocks listed in problem description
      - Letters are case-insensitive

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):
  - Output(s):

- Data Structure:

- Algorithm:
  1. Map each letter of word (split to array) to index of word block in array.
  2. Regex test to see if any duplicates.

- Code:
*/

let isBlockWord = word => {
  const BLOCKS = ['B|O', 'X|K', 'D|Q', 'C|P', 'N|A', 'G|T', 'R|E', 'F|S', 'J|W',
    'H|U', 'V|I', 'L|Y', 'Z|M'];

  return !BLOCKS.some(pair => {
    let regex = RegExp(`[${pair}]`, 'gi');
    return ((word.match(regex) || []).length) > 1;
  });
};

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));      // true
console.log(isBlockWord('floW'));      // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));      // false