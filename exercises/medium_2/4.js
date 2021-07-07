/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number: year to test

    - Output(s):
      - number: count of Friday the 13ths in year

    - Rules + Questions:

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):
  - Output(s):

- Data Structure:

- Algorithm:
  1. Get first Friday.
  2. Iterate through rest of days in year
    2.1. If day number is 13, increment counter

- Code:
*/

let fridayThe13ths = year => {
  const FRIDAY = 5;
  const THIRTEENTH = 13;
  const MONTHS = 11;
  let count = 0;

  for (let month = 0; month <= MONTHS; month += 1) {
    let date = new Date(year, month, THIRTEENTH);
    if (date.getDay() === FRIDAY) count += 1;
  }

  return count;
};

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2