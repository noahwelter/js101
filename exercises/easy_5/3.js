function halvsies(arr) {
  let middle = Math.ceil(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return [left, right];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]