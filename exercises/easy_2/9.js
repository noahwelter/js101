/* PEDAC Process

- Learnings + Notes:
  - Use an object to store lookup table of char to num.
  - Hex to decimal (ex. C9):
    - 9: 9 * (16 ^ 0) = 9
    - C: 12 * (16 ^ 1) = 192
    - 9 + 192 = 201

- Understand the Problem:
    - Input(s):
      - string: string of digits

    - Output(s):
      - number: numeric value of input

    - Rules + Questions:
      - All characters will be numeric

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  '4321' | '570
  - Output(s):  4321  |  570

- Data Structure:

- Algorithm:
  1. Create numeric array to store number elements
  2. Split string into array.
  2. For each element in string array, store corresponding numeric value in
     numeric array.
  3. Join numeric array.
  4. Return numeric array.

- Code:
*/

function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let result = 0;
  let numArray = str.split('').map(element => DIGITS[element]);

  numArray.forEach(element => {
    result = (result * 10) + element;
  });

  // Original solution using empty numArray:
  // strArray.forEach(element => numArray.push(findNumber(element)));
  // numArray.reverse().forEach((element, index) => {
  //   result += element * (10 ** index);
  // });

  return result;
}

// Replaced with lookup object DIGITS:
// function findNumber(char) {
//   switch (char) {
//     case '0': return 0;
//     case '1': return 1;
//     case '2': return 2;
//     case '3': return 3;
//     case '4': return 4;
//     case '5': return 5;
//     case '6': return 6;
//     case '7': return 7;
//     case '8': return 8;
//     case '9': return 9;
//     default: return NaN;
//   }
// }

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

/* Hexadecimal
  - Algorithm:
    1. Get digit.
    2. Multiply by (16 ^ (index from right))
    3. Repeat steps 1 and 2, adding each new result.

*/

const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};

function hexadecimalToInteger(str) {
  let result = 0;

  let numArray = str.split('').map(value => DIGITS[value.toUpperCase()]);

  numArray.reverse().forEach((element, index) => {
    let value = element * (16 ** index);
    result += value;
  });

  return result;
}

console.log(hexadecimalToInteger('4D9f') === 19871); // true