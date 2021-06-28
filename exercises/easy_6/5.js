function negative(num) {
  return (Math.sign(num)) === -1 ? num : -num;
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0