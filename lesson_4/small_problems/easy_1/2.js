// Original solution
for (let num = 1; num < 100; num += 2) {
  console.log(num);
}

// Alternate solution with user inputs
function printOdd(startNum, endNum) {
  if (startNum % 2 === 0) startNum += 1;
  let num = startNum;

  while (num <= endNum) {
    console.log(num);
    num += 2;
  }
}

printOdd(2, 35);