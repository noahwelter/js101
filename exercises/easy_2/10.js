/* PEDAC Process

- Learnings + Notes:
  - Use an object to store lookup table of char to num.
  - Consider using switch statement on part of string directly to simplify logic
    (instead of using if statement with or).

- Understand the Problem:
    - Input(s):
      - string: string of digits (including potential +/- sign)

    - Output(s):
      - number: numeric value of input

    - Rules + Questions:
      - All characters will be numeric
      - String may or may not have +/- sign

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  '4321' | '570' | '-570' | '+100'
  - Output(s):  4321  |  570  |  -570  |   100

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
  const DIGITS = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9};
  let result = 0;

  let numArray = str.split('').map(element => DIGITS[element]);
  numArray.forEach(element => {
    result = (result * 10) + element;
  });

  return result;
}

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '+': return stringToInteger(str.slice(1, str.length));
    case '-': return -stringToInteger(str.slice(1, str.length));
    default: return stringToInteger(str);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true