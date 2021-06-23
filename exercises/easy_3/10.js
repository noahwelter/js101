/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number: year

    - Output(s):
      - string: century

    - Rules + Questions:
      - Find century of input year.
      - Return value should end with 'st', 'nd', etc.
      - New centuries begin in years that end with 01.

  - Implicit Requirements:
    - Year is positive integer

- Examples/Test Cases:
  - Input(s):   2000  |  256
  - Output(s): `20th` | '3rd'

- Data Structure:

- Algorithm:
  1. Compute century by dividing by 100 and rounding up.
  2. Concatenate correct suffix based on last digit in number.

- Code:
*/

function century(year) {
  let century = String(Math.ceil(year / 100));
  suffix(century);
  return console.log(century + suffix(century));
}

function suffix(century) {
  let ult = century[century.length - 1];
  let penult = century[century.length - 2];

  if (penult === '1') return 'th';
  switch (ult) {
    case '1': return 'st';
    case '2': return 'nd';
    case '3': return 'rd';
    default: return 'th';
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"