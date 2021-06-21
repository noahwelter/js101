/* PEDAC Process

- Learnings:

- Understand the Problem:
    - Input(s):
      - number: number to be squared

    - Output(s):
      - number: input number squared

    - Rules + Questions:
      - Use 'multiply' function from problem 3.

  - Implicit Requirements:
    - Accepts both positive and negative number inputs.

- Examples/Test Cases:
  - Input(s):  5  | -8
  - Output(s): 25 | 64

- Data Structure:
  - Input/output are both numbers.

- Algorithm:
  1. Call multiply function using the square function input value for both
     arguments.
  2. Return the result.

- Code:
*/

const multiply = ((num1, num2) => num1 * num2);

const square = num => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// Further Exploration
function powerOf(number, power) {
  let computed = number;

  for (let iteration = 1; iteration < power; iteration += 1) {
    computed = multiply(number, computed);
  }

  return computed;
}

console.log(powerOf(2, 4)); // logs 16
console.log(powerOf(3, 5)); // logs 243
console.log(powerOf(5, 6)); // logs 15625