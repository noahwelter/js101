/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number: an integer

    - Output(s):
      - boolean: true if input is palindromic

    - Rules + Questions:
      - Palindrominc number reads same forwards and backwards.

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  34543 | 123210
  - Output(s): true  | false

- Data Structure:

- Algorithm:
  1. Modify isPalindrome to convert numbers to strings.

- Code:
*/

function isPalindrome(str) {
  return console.log(str === str.split('').reverse().join(''));
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true