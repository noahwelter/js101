// Input:
//   - bill
//   - tip percentage
// Output:
//   - tip total
//   - bill total

const readLine = require('readline-sync');

console.log('What is the bill?');
let bill = Number.parseFloat(readLine.question());

console.log('What is the tip percentage?');
let percentage = Number.parseFloat(readLine.question());

let tip = bill * (percentage / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);