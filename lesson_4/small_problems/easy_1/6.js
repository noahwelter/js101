// Input:
//   - integer > 0
//   - (s)um or (p)roduct
// Output:
//   - result

const readLine = require('readline-sync');
let result = 0;
let operation = '';

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

for (let currentInt = 1; currentInt <= num; currentInt += 1) {
  switch (operator) {
    case 's':
      result += currentInt;
      operation = 'sum';
      break;
    case 'p':
      result = result || 1;
      result *= currentInt;
      operation = 'product';
      break;
  }
}

console.log(`The ${operation} of the integers between 1 and ${num} is ${result}.`);