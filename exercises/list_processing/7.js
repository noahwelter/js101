let sumOfSums = (arr) => {
  let sum = 0;

  arr.forEach((_, index) => {
    sum += arr.slice(0, arr.length - index)
      .reduceRight((acc, num) => num + acc, 0);
  });

  return sum;
};

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35