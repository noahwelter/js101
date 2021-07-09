/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - array: sorted array #1
      - array: sorted array #2

    - Output(s):
      - array: all elements in 1 array, sorted

    - Rules + Questions:
      - Can't use sort()
      - Can't mutate input arrays.

  - Implicit Requirements:
    - Empty arrays are ignored.

- Examples/Test Cases:
  - Input(s): Shown in problem
  - Output(s):

- Data Structure:

- Algorithm:
  1. Need 1 array to store results and 2 indices to keep track of location in
     each array.
  2. While length of either array hasn't been reached...
    3.1. Compare arr1[index1] < arr2[index2]
    3.2. If true, add arr1[index1] to new array and increment index1
    3.3. If false, add arr2[index2] to new array and increment index2
  3. After finishing loop, concat leftovers of both arrays to new array (1 array
     should be empty and was the array that caused the while loop to exit.)
  4. Return new array.

- Code:
*/

let merge = (arr1, arr2) => {
  let newArr = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length > 0) {
    if (arr1[index1] < arr2[index2]) {
      newArr.push(arr1[index1]);
      index1 += 1;
    } else {
      newArr.push(arr2[index2]);
      index2 += 1;
    }
  }

  return newArr.concat(arr1.slice(index1), arr2.slice(index2));

};

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]