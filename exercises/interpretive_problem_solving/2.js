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

// Filed diamond
// let diamond = num => {
//   let center = (num - 1) / 2;
//   let topArr = [];
//   let centerArr = ['*'.repeat(num)];

//   for (let row = 0; row < center; row += 1) {
//     let spaces = ' '.padStart(center - row);
//     let stars = '*'.repeat((row * 2) + 1);
//     topArr.push(spaces + stars);
//   }

//   topArr
//     .concat(centerArr, topArr.slice().reverse())
//     .forEach(row => console.log(row));
// };

// Hollow diamond
function diamond(num) {
  numberSequence(num).forEach(number => {
    let str = ' '.repeat((num - number) / 2) +
      '*' +
      ' '.repeat(Math.floor(number / 2));
    console.log(str + str.split('').reverse().join('').slice(1));
  });
}

function numberSequence(num) {
  let result = [];
  let increment = 2;
  let number = 1;

  while (number > 0) {
    result.push(number);
    if (number === num) {
      increment = -2;
    }
    number += increment;
  }

  return result;
}

diamond(1);
diamond(3);
diamond(9);