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

let mergeSort = arr => {
  if (arr.length === 1) return arr;

  let arr1 = arr.slice(0, arr.length / 2);
  let arr2 = arr.slice(arr.length / 2);

  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);

  return merge(arr1, arr2);
};


mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]