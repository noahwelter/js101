/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number: positive integer

    - Output(s):
      - string: right triangle with sides of n stars

    - Rules + Questions:
      - Hypotenuse of triangle has one end at lower-left, other at upper-right

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):      5
  - Output(s):     *
                  **
                 ***
                ****
               *****

- Data Structure:
  - Input integer is the number of rows to print

- Algorithm:
  1. Loop through rows and print the correct number of spaces/stars
    1.1 Correct number determined by input - row number

- Code:
*/

function triangle(rows) {
  for (let row = 1; row <= rows; row += 1) {
    console.log(' '.repeat(rows - row) + '*'.repeat(row));
  }
}

triangle(9);