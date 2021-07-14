/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number: odd integer, signifies size of grid (n x n)

    - Output(s):
      - string: 8-point star with grid size based on input

    - Rules + Questions:

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):
  - Output(s):

- Data Structure:
  - With n = 7:
    row width is 7
    column height is 7
    *  *  *  - 1, 0, 0, 1, 0, 0, 1
     * * *   - 0, 1, 0, 1, 0, 1, 0
      ***    - 0, 0, 1, 1, 1, 0, 0
    *******  - 1, 1, 1, 1, 1, 1, 1
      ***    - 0, 0, 1, 1, 1, 0, 0
     * * *   - 0, 1, 0, 1, 0, 1, 0
    *  *  *  - 1, 0, 0, 1, 0, 0, 1

    *   *   * - 1, 0, 0, 0, 1, 0, 0, 0, 1
     *  *  *  - 0, 1, 0, 0, 1, 0, 0, 1, 0
      * * *   - 0, 0, 1, 0, 1, 0, 1, 0, 0
       ***    - 0, 0, 0, 1, 1, 1, 0, 0, 0
    ********* - 1, 1, 1, 1, 1, 1, 1, 1, 1
       ***    - 0, 0, 0, 1, 1, 1, 0, 0, 0
      * * *   - 0, 0, 1, 0, 1, 0, 1, 0, 0
     *  *  *  - 0, 1, 0, 0, 1, 0, 0, 1, 0
    *   *   * - 1, 0, 0, 0, 1, 0, 0, 0, 1


- Algorithm:
  1. Make string for first half of each row of 'top' of star.
  2. String length is equal to input (num - 1) / 2.
  3. Row number is equal to number of leading zeros.
    3.1. '*' pad start with (row + 1), pad end (num - 1) / 2.

- Code:
*/

let star = size => {
  let half = (size - 1) / 2;
  let top = [];

  for (let row = 0; row < half; row += 1) {
    let str = '*'.padStart(row + 1).padEnd(half);
    top.push(str + '*' + str.split('').reverse().join(''));
  }

  let mid = ['*'.repeat(size)];

  top.concat(mid, top.slice().reverse()).forEach(row => console.log(row));
};

star(7);
star(9);
star(11);