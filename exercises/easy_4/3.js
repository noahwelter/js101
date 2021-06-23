/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number: age
      - number: retirement age

    - Output(s):
      - number: retirement year
      - number: number of years remaining

    - Rules + Questions:
      - Current year is 2021

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):
  - Output(s):

- Data Structure:

- Algorithm:
  1. Get age.
  2. Get retirement age.
  3. Compute retirement year and number of years between now and then.

- Code:
*/

const readLine = require('readline-sync');

let age = Number(readLine.question('What is your age? '));
let retirementAge = Number(
  readLine.question( 'At what age would you like to retire? '));

let date = new Date();
let year = date.getFullYear();
let yearsLeft = retirementAge - age;
let retirementYear = year + yearsLeft;

console.log(`It's ${year}. You will retire in ${retirementYear}.
You have only ${yearsLeft} years of work to go!`);