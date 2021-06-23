/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - string: words and non-alphabetic characters

    - Output(s):
      - string: input with all non-alphabetic characters replaced by spaces

    - Rules + Questions:
      - If multiple non-alphabetic characters occur in a row, only 1 space

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):
  - Output(s):

- Data Structure:

- Algorithm:
  1.

- Code:
*/

function cleanUp(str) {
  return console.log(str.replace(/[^a-z]+/gi, ' '));
}

cleanUp("---what's my +*& line?");    // " what s my line "