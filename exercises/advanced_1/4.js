/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - array: 2D array of numbers

    - Output(s):
      - array: 2D array of numbers, rotated

    - Rules + Questions:
      - Rotated array takes each column and converts to row, using last column
        item as first row item

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  1  5  8
               4  7  2
               3  9  6
  - Output(s): 3  4  1
               9  7  5
               6  2  8

- Data Structure:

- Algorithm:
  1. Create correct structure for new array.
    1.1. New array element (that is array) for each element in row of input arr.

- Code:
*/

let rotate90 = arr => {
  let newArr = [];

  arr[0].forEach(_ => {
    newArr.push([]);
  });

  for (let rowIndex = arr.length - 1; rowIndex >= 0; rowIndex -= 1) {
    for (let colIndex = 0; colIndex < arr[0].length; colIndex += 1) {
      newArr[colIndex].push(arr[rowIndex][colIndex]);
    }
  }

  return newArr;
};

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]