/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - string: any characters

    - Output(s):
      - boolean: true if palindrome

    - Rules + Questions:
      - Case doesn't matter
      - Non-alphanumeric characters don't matter

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  'madam' | 'Madam'
  - Output(s):  true   |  false

- Data Structure:

- Algorithm:
  1. Use regex to remove any non [a-z] characters.
  2. Call isPalindrome function.
  3. Return result.

- Code:
*/

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isRealPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  return console.log(isPalindrome(str));
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false