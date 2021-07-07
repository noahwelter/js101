let fibonacci = (index) => {
  if (index === 1) return 1;
  if (index === 2) return 1;
  return fibonacci(index - 1) + fibonacci(index - 2);
};

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765