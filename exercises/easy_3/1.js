/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - string: text with possible repeating characters

    - Output(s):
      - string: repeating characters removed

    - Rules + Questions:
      - Return a string that contains the value of the original string with all
        consecutive duplicate characters collapsed into a single character.
      - Empty string returns empty string.

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  'ddaaiillyy ddoouubbllee' | '4444abcabccba' | 'gggg' | ''
  - Output(s): 'daily double'            | '4abcabcba'     | 'g'    | ''

- Data Structure:

- Algorithm:
  1. Iterate over each letter.
  2. If previous letter is the same as current letter, skip adding to output
     string.
  3. Return output string.

- Code:
*/

function crunch(str) {
  let crunchedStr = '';
  str.split('').forEach((char, index) => {
    if (char !== str[index - 1]) crunchedStr += char;
  });

  return crunchedStr;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

// Further Exploration: RegEx
function regexCrunch(str) {
  return str.replace(/(.)\1+/g, '$1');
}

console.log(regexCrunch('ddaaiillyy ddoouubbllee'));
console.log(regexCrunch('4444abcabccba'));
console.log(regexCrunch('ggggggggggggggg'));
console.log(regexCrunch('a'));
console.log(regexCrunch(''));