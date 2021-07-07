let fibonacci = (finalIndex) => {
  let first = 1;
  let second = 1;
  let fibTemp;

  for (let currentIndex = 3; currentIndex <= finalIndex; currentIndex += 1) {
    fibTemp = first + second;
    first = second;
    second = fibTemp;
  }

  return fibTemp;
};

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050