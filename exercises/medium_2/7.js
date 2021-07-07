// Originally used this as a helper function.
// Removed after seeing destructuring solution.
// let swap = (arr, upperIndex) => {
//   let tmp = arr[upperIndex];
//   arr[upperIndex] = arr[upperIndex - 1];
//   arr[upperIndex - 1] = tmp;

//   return arr;
// };

let bubbleSort = arr => {
  let sorted = false;

  do {
    sorted = false;

    for (let index = 1; index < arr.length; index += 1) {
      if (arr[index] < arr[index - 1]) {
        [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
        sorted = true;
      }
    }
  } while (sorted);

  return arr;
};

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]