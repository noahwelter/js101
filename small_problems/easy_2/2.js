/* PEDAC Process

- Learnings:

- Understand the Problem:
    - Input(s):
      - string: user-entered name

    - Output(s):
      - string: greeting for user using name

    - Rules + Questions:
      - If entered name ends with exclamation mark !, computer yells in all-caps

  - Implicit Requirements:
    - Names are user entered - will not validate user input for this problem.

- Examples/Test Cases:
  - Input(s):  'Bob'        | 'Bob!'
  - Output(s): 'Hello Bob.' | 'HELLO BOB. WHY ARE WE SCREAMING?'

- Data Structure:
  - Output is a string using entered name.

- Algorithm:
  1. Get user's name.
  2. Create greeting string.
  2. Determine if an exclamation mark was entered at the end of the name.
    2.1 If name ends with exclamation mark, append additional screaming text.
  3. Create and return final sentance(s).

- Code:
*/

const readLine = require('readline-sync');

let name = readLine.question('What is your name?\n');

if (name.trim()[name.length - 1] !== '!') {
  console.log(`Hello ${name}.`);
} else {
  name = name.slice(0, -1);
  console.log((`Hello ${name}. Why are we screaming?`).toUpperCase());
}