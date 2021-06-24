/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - array: list of numbers
      - array: list of numbers

    - Output(s):
      - array: union of input arrays

    - Rules + Questions:
      - No duplication of values in the returned array.
      - Numbers in order? Thinking yes

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  [1, 3, 5], [3, 6, 9]
  - Output(s): [1, 3, 5, 6, 9]

- Data Structure:
  - Can use array methods to sort/add/check if number exists

- Algorithm:
  1. Loop through longest array.
  2. For each element in both arrays, check if exists in output array.
    2.1. If exists, continue to next iteration.
  3.

- Code:
*/

function union(arr1, arr2) {
  let arr = arr1.concat(arr2).sort((first, second) => first - second);
  let index = 0;

  while (index < arr.length) {
    if (arr[index] === arr[index - 1]) {
      arr.splice(index, 1);
    } else {
      index += 1;
    }
  }

  return console.log(arr);
}

union([1, 34, 3, 3, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]