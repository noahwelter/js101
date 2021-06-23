/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - type: description

    - Output(s):
      - string: sentence with random age

    - Rules + Questions:
      - Age is random number between 20 and 120 (inclusive)

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):
  - Output(s):

- Data Structure:

- Algorithm:
  1. Generate random number
    1.1. (rand * 100) + 20
  2. Output string with random number inserted.

- Code:
*/

function ageGen(min, max) {
  // Math.floor used to have consistent rounding - otherwise need to consider
  // if decimal is < or > 0.5.
  let maxActual = Math.max(min, max);
  let minActual = Math.min(min, max);
  return Math.floor((Math.random() * (maxActual - minActual + 1)) + minActual);
}

let age = ageGen(20, 100);
console.log(`Teddy is ${age} years old!`);