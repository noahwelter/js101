/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - BigInt: number of digits in Fibonacci number

    - Output(s):
      - number: index of first Fibonacci number with input # digits

    - Rules + Questions:
      - Use BigInt to deal with large numbers
      - Input is > 2

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  2n | 10n
  - Output(s): 7n | 45n

- Data Structure:

- Algorithm:
  1. Loop through Fibonacci sequence while length is less than input.
    1.1 Find length using string length property.
  2. Once loop is exited, return number.

- Code:
*/

function findFibonacciIndexByLength(digits) {
  let num = 0;
  let num1 = 1n;
  let num2 = 1n;
  let index = 2n;

  do {
    num = num1 + num2;
    num1 = num2;
    num2 = num;
    index += 1n;
  } while (String(num).length < digits);

  console.log(index);
  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);