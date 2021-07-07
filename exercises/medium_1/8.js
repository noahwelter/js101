let fArr = [0, 1, 1];

let fibonacci = (index) => {
  if (index === 1) return 1;
  if (index === 2) return 1;

  if (fArr[index]) {
    console.log(fArr[index]);
    return fArr[index];
  } else {
    fArr[index] = fibonacci(index - 1) + fibonacci(index - 2);
    return fArr[index];
  }
};

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765