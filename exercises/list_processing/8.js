let buyFruit = arr => {
  return arr.flatMap(([fruitName, fruitQuantity]) => {
    return Array(fruitQuantity).fill(fruitName);
  });
};

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]