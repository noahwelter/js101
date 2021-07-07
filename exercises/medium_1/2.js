/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number: number to be rotated
      - number: digit to rotate to the end

    - Output(s):
      - number: transformed number

    - Rules + Questions:
      - Move count digit to end of input number.

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  (735291, 3)
  - Output(s):  735912

- Data Structure:
  - Convert number to string, split into array to access specific numbers

- Algorithm:
  1. Convert number into string.
  2. Convert string, starting at count point, into array.
  3. Rotate using function from previous exercise.
  4. Rejoin/concat and convert to number.
  5. Return number.

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

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917