/* PEDAC Process

- Learnings:
  - Good application for arrow function, since only single expression used in
    function body.

- Understand the Problem:
    - Input(s):
      - number: argument 1
      - number: argument 2

    - Output(s):
      - number: number 1 * number 2

    - Rules + Questions:
      - Only integers are shown - should floats be considered?

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  5, 3
  - Output(s): 15

- Data Structure:
  - Output should be a number.

- Algorithm:
  1. Return the product of the 2 arguments passed to the function.

- Code:
*/

function multiply(number1, number2) {
  return number1 * number2;
}

// Arrow function
// const multiply = ((num1, num2) => num1 * num2);

console.log(multiply(5, 3) === 15); // logs true