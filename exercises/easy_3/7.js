/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number: any number

    - Output(s):
      - number: modified input based on rules

    - Rules + Questions:
      - If number is even-length and left digits are
        same as right, return the number.
      - Otherwise, return the input * 2.


  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  37 | 103103
  - Output(s): 74 | 103103

- Data Structure:
  - numbers

- Algorithm:
  1. Check if number is even length and integer - if not, return 2 * number.
  2. Check if left half of number is same as right half
    2.1 Convert to string, compare length / 2 digits on left to right.
  3. If same, return number, otherwise return 2 * number.

- Code:
*/

function twice(num) {
  let length = String(num).length;
  return console.log(String(num).slice(0, length / 2) ===
    String(num).slice(length / 2) ? num : num * 2);
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676