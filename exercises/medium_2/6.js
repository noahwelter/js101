let sumSquareDifference = num => {
  let sum  = 0;
  let arr = [...Array(num)].map((_, index) => {
    sum += index + 1;
    return index + 1;
  });

  return (sum ** 2) - arr.reduce((acc, val) => acc + (val ** 2), 0);
};

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150