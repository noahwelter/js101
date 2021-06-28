function multiplyList(arr1, arr2) {
  return console.log(arr1.map((value, index) => value * arr2[index]));
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]