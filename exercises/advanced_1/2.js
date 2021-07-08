let transpose = arr => {
  let newArr = [...Array(arr.length)];

  newArr.forEach((_, index) => {
    newArr[index] = [];
  });

  for (let rowIndex = 0; rowIndex < arr.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < arr.length; colIndex += 1) {
      newArr[colIndex].push(arr[rowIndex][colIndex]);
    }
  }

  return newArr;
};

let transposeInPlace = arr => {
  for (let rowIndex = 0; rowIndex < arr.length; rowIndex += 1) {
    for (let colIndex = rowIndex; colIndex < arr.length; colIndex += 1) {
      [arr[rowIndex][colIndex], arr[colIndex][rowIndex]] =
        [arr[colIndex][rowIndex], arr[rowIndex][colIndex]];
    }
  }

  return arr;
};

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

transposeInPlace(matrix);
console.log(matrix);