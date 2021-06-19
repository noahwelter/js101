// Input:
//   - integer > 0
//   - (s)um or (p)roduct
// Output:
//   - result

// If input nums were an array:
// result = nums.reduce((accumulator, val) => accumulator *= OR += val);

const readLine = require('readline-sync');
let result;
let operation = '';

function computeSum(num) {
  let result = 0;

  for (let currentNum = 1; currentNum <= num; currentNum += 1) {
    result += currentNum;
  }

  return result;
}

function computeProduct(num) {
  let result = 1;

  for (let currentNum = 1; currentNum <= num; currentNum += 1) {
    result *= currentNum;
  }

  return result;
}

console.log('Please enter an integer greater than 0');
let num = Number.parseFloat(readLine.question());

while (Number.isNaN(Number.parseInt(num, 10)) ||
  num % 1 !== 0 ||
  Number.parseInt(num, 10) < 0) {
  console.log(`${num} is not valid. Please enter an integer greater than 0:`);
  num = Number.parseFloat(readLine.question());
}

console.log('Enter "s" to compute the sum, or "p" to compute the product:');
let operator = readLine.question();

while (operator !== 's' && operator !== 'p') {
  console.log(`${operator} is not a valid entry.`);
  operator = readLine.question();
}

switch (operator) {
  case 's':
    result = computeSum(num);
    operation = 'sum';
    break;
  case 'p':
    result = computeProduct(num);
    operation = 'product';
    break;
}

console.log(`The ${operation} of the integers between 1 and ${num} is ${result}.`);