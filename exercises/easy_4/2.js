/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number x 6: list of numbers

    - Output(s):
      - string: does 6th number appear in first 5?

    - Rules + Questions:

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):
  - Output(s):

- Data Structure:
  - Store numbers in array

- Algorithm:
  1. Loop and get 6 numbers.
  2. Use arr.includes(6th num) to check if exists.

- Code:
*/

const readLine = require('readline-sync');
const QTY = 6;

let numArr = [];

for (let index = 0; index < QTY; index += 1) {
  numArr.push(readLine.question(`Enter number ${index + 1}: `));
}

console.log(`The number ${numArr[QTY - 1]} ${numArr.slice(0, QTY - 1).includes(numArr[QTY - 1]) ? 'appears' : 'does not appear'} in ${numArr.slice(0, QTY - 1).join(', ')}`);

if (numArr.some(num => num > 25)) {
  console.log(`There's a number greater than 25.`);
}