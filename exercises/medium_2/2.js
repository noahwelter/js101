function triangle(first, second, third) {
  let [small, mid, long] = [first, second, third].sort((a, b) => a - b);

  if (small === 0 || small + mid < long) {
    return 'invalid';
  } else if ([small, mid, long].every(side => side === small)) {
    return 'equilateral';
  } else if (small === mid || mid === long) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"