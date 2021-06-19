// Input:
//   - integer > 1
// Output:
//   - integer that is sum of all numbers that are multiples of 3 or 5 that are
//     between 1 and input.

function multisum(num) {
  let result = 0;

  for (let currentNum = 1; currentNum <= num; currentNum += 1) {
    if (isMultiple(currentNum, 3) || isMultiple(currentNum, 5)) {
      result += currentNum;
    }
  }

  console.log(result);
  return result;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

// Could add helper function for determining if number is a multiple of X.
function isMultiple(number, divisor) {
  return (number % divisor === 0);
}