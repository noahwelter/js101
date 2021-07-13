/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number: number x number grid

    - Output(s):
      - string: grid of diamonds based on input

    - Rules + Questions:
      - Argument will always be an odd integer

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  Shown in problem
  - Output(s):

- Data Structure:

- Algorithm:
  1. Number of leading (and trailing) spaces = (num - 1) / 2


- Code:
*/

let diamond = num => {
  let center = (num - 1) / 2;
  let topArr = [];
  let centerArr = ['*'.repeat(num)];

  for (let row = 0; row < center; row += 1) {
    let spaces = ' '.padStart(center - row);
    let stars = '*'.repeat((row * 2) + 1);
    topArr.push(spaces + stars);
  }

  topArr
    .concat(centerArr, topArr.slice().reverse())
    .forEach(row => console.log(row));
};

diamond(1);
diamond(3);
diamond(9);