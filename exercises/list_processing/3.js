function multiplyAllPairs(arr1, arr2) {
  let multArr = [];

  arr1.forEach(val1 => arr2.forEach(val2 => multArr.push(val1 * val2)));

  return multArr.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]