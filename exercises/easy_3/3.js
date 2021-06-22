/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number: positive integer

    - Output(s):
      - string: alternating 1s and 0s

    - Rules + Questions:
      - Number of 1s and 0s corresponds to integer input.

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):
  - Output(s):

- Data Structure:

- Algorithm:
  1. Loop and concatenate based on odd/even

- Code:
*/

function stringy(num) {
  let string = '';
  for (let index = 0; index < num; index += 1) {
    string += (index % 2 === 0 ? '1' : '0');
  }

  console.log(string);
  return string;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"