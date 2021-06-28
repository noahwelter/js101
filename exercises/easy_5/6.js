function multiplicativeAverage(arr) {
  let count = arr.length;
  let mult = arr.reduce((acc, val) => acc * val);

  return console.log((mult / count).toFixed(3));
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"