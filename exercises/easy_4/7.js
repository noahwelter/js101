/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - array: some numbers

    - Output(s):
      - array: same number of elements as input array

    - Rules + Questions:
      - Elements of output array should be running total of input array.

  - Implicit Requirements:
    - Empty array returns empty.

- Examples/Test Cases:
  - Input(s):  [2, 5, 13]
  - Output(s): [2, 7, 20]

- Data Structure:
  - Output array can be created by looping through input array.

- Algorithm:
  1. Loop through input array.
  2. For each element, value is sum of previous index and corresponding index
     of input array.
  3. Return output array.

- Code:
*/

function runningTotal(inputArray) {
  let outputArray = [];
  let sum = 0;

  for (let index = 0; index < inputArray.length; index += 1) {
    outputArray.push(sum += inputArray[index]);
  }

  return console.log(outputArray);
}

function mapTotal(inputArray) {
  let sum = 0;

  return console.log(inputArray.map((value, index, arr) => {
    return value + (sum += arr[index - 1] || 0);
  })
  );
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

mapTotal([2, 5, 13]);             // [2, 7, 20]
mapTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
mapTotal([3]);                    // [3]
mapTotal([]);                     // []