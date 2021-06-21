/* PEDAC Process

- Learnings + Notes:
  - do/while loop useful when first value might fail loop condition.

- Understand the Problem:
    - Input(s):
      - number: integer

    - Output(s):
      - string: string representation of input

    - Rules + Questions:
      - Convert integer input to string output
      - Can't use built-in functions (toString, '' + number)

  - Implicit Requirements:
    - 0 returns '0'

- Examples/Test Cases:
  - Input(s):   4321  |  0  |  5000  |  1234567890
  - Output(s): '4321' | '0' | '5000' | '1234567890'

- Data Structure:
  - Store conversion in object - look up values and return property name

- Algorithm:
  1. Get first digit using number % 10
  2. Convert the number to the character
  3. Add the character to the string
  4. Subtract the remainder from the number and divide by 10
  5. Repeat steps 1 - 4 until the number is less than 0
  6. Reverse and return the string

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

  console.log(str);
  return str;
}

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"