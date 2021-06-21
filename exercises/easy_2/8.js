/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - array: contains numbers, characters, nothing

    - Output(s):
      - array: every other element of input array

    - Rules + Questions:
      - Values returned are from elements 1, 3, 5, etc.

  - Implicit Requirements:
    - Empty input array returns empty output array
    - Single element returns same single element

- Examples/Test Cases:
  - Input(s):  [2, 3, 4, 5, 6] | [1, 2, 3, 4, 5, 6] | ['abc', 'def'] | [123]
  - Output(s): [2, 4, 6]       | [1, 3, 5]          | ['abc']        | [123]

- Data Structure:
  - Array

- Algorithm:
  1. Create new array.
    1.1. For each element of original array, if index is odd
       store value in new array
  2. Return new array.

- Code:
*/

function oddities(inputArray) {
  let oddArray = [];

  inputArray.forEach((element, index) => {
    if (index % 2 === 0) oddArray.push(element);
  });

  return oddArray;
}

function even(inputArray) {
  let evenArray = [];

  for (let index = 1; index < inputArray.length; index += 2) {
    evenArray.push(inputArray[index]);
  }

  return evenArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(even([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(even([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(even(["abc", "def"])); // logs ['def']
console.log(even([123])); // logs []
console.log(even([])); // logs []