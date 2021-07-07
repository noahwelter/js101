/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number: number to rotate

    - Output(s):
      - number: rotated number

    - Rules + Questions:
      - Fully rotate the input number
        - After first rotation, keep first digit fixed
        - After second rotation, keep first and second digit fixed
        - etc...
      - Leading zeros are dropped in final number

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  Given in problem
  - Output(s):

- Data Structure:
  - rotateRightmostDigits function expects number.

- Algorithm:
  1. Rotate first digit.
  2. Rotate by sending number and number length as index
  3. Repeat steps 2 and 3 while index >= 2 (don't need to flip last digit)
  4. Return number

- Code:
*/

let rotateArray = arr => {
  if (!Array.isArray(arr)) return undefined;

  let copy = arr.slice();

  if (copy.length !== 0) copy.push(copy.shift());

  return copy;
};

let rotateRightmostDigits = (num, count) => {
  let arr = [...String(num)];
  let rotArr = arr.slice(-count);

  rotArr = rotateArray(rotArr);

  return Number(arr.slice(0, -count).concat(rotArr).join(''));
};

let maxRotation = num => {
  let length = String(num).length;

  for (let index = length; index >= 2; index -= 1) {
    num = rotateRightmostDigits(num, index);
  }

  return num;
};

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845