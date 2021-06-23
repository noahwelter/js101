/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - string: any string of characters

    - Output(s):
      - boolean: true if input is palindrome

    - Rules + Questions:
      - Case matters
      - All characters matter

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  'madam' | 'Madam'
  - Output(s):  true   |  false

- Data Structure:

- Algorithm:
  1. Reverse input string and compare to original
  2. Return result.

- Code:
*/

function isPalindrome(str) {
  return console.log(str === str.split('').reverse().join(''));
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true