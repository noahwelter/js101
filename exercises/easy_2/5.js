/* PEDAC Process

- Learnings:

- Understand the Problem:
    - Input(s):
      - number: integer 1
      - number: integer 2

    - Output(s):
      - string: expression statement and result

    - Rules + Questions:
      - Calculates +, -, *, /, rem, pow
      - Don't need to validate input
      - Will ignore dividing by 0

  - Implicit Requirements:
    - Output is an integer value.

- Examples/Test Cases:
  - Input(s):
  - Output(s):

- Data Structure:
  - Basic numbers + strings

- Algorithm:
  1. Get numbers 1 and 2 from user.
  2. Convert user inputs to numbers.
  3. Perform calculations.
  4. Print results.

- Code:
*/

const readLine = require('readline-sync');

function prompt(msg) {
  return `==> ${msg}`;
}

function print(msg) {
  console.log(prompt(msg));
}

let number1 = Number(readLine.question(prompt('Enter the first number:\n')));
let number2 = Number(readLine.question(prompt('Enter the second number:\n')));

function createMsg(num1, num2, operation) {
  let result = 0;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    case '**':
      result = num1 ** num2;
      break;
  }
  return `${num1} ${operation} ${num2} = ${result.toFixed(0)}`;
}

print(createMsg(number1, number2, '+'));
print(createMsg(number1, number2, '-'));
print(createMsg(number1, number2, '*'));
print(createMsg(number1, number2, '/'));
print(createMsg(number1, number2, '%'));
print(createMsg(number1, number2, '**'));