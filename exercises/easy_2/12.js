/* PEDAC Process

- Learnings + Notes:
  - do/while loop useful when first value might fail loop condition.

- Understand the Problem:
    - Input(s):
      - number: integer (can be negative)

    - Output(s):
      - string: string representation of input

    - Rules + Questions:
      - Convert integer input to string output
      - Can't use built-in functions (toString, '' + number)

  - Implicit Requirements:
    - 0 returns '0' (no sign shown)

- Examples/Test Cases:
  - Input(s):   4321  |  -123  |  0
  - Output(s): '4321' | '-123' | '0'

- Data Structure:
  - Store digit/char conversion in array

- Algorithm:
  1. Switch on sign of number
  2. Case '-1' - return converted string prepended with '+/-' or nothing

- Code:
*/

function integerToString(num) {
  const CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let str = '';

  do {
    let digit = num % 10;
    num = (num - digit) / 10;

    str = CHARS[digit] + str;
  } while (num > 0);

  return str;
}

function signedIntegerToString(num) {
  switch (Math.sign(num)) {
    case 1: return `+${integerToString(num)}`;
    case -1: return `-${integerToString(-num)}`;
    default: return integerToString(num);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");