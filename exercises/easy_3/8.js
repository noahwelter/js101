/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number x 3: number representing grade (0 - 100)

    - Output(s):
      - string: letter grade based on mean of 3 scores

    - Rules + Questions:
      - Number will be between 0 and 100
      - 90 <= score <= 100: 'A'
      - 80 <= score < 90: 'B'
      - 70 <= score < 80: 'C'
      - 60 <= score < 70: 'D'
      - 0 <= score < 60: 'F'

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  50, 50, 95
  - Output(s): 'D'

- Data Structure:
  - If statements for mean

- Algorithm:
  1. Compute mean score.
  2. If statements for mean, print grade.

- Code:
*/

function getGrade(first, second, third) {
  let mean = (first + second + third) / 3;

  let grade = '';
  if (mean >= 90 && mean <= 100) {
    grade = 'A';
  } else if (mean >= 80 && mean < 90) {
    grade = 'B';
  } else if (mean >= 70 && mean < 80) {
    grade = 'C';
  } else if (mean >= 60 && mean < 70) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return console.log(grade);
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"