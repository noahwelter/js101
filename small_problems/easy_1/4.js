// Input:
//   - length of room
//   - width of room
// Output:
//   - area of room in sq. meters
//   - area of room in sq. feet

const readLine = require('readline-sync');
const SQMETER_TO_SQFOOT = 10.7639;
const FOOT_TO_METER = 0.3048;

console.log('Would you like to enter values in units of meters or feet?\nEnter "meters" or "feet".');
let units = readLine.question();

console.log(`Enter the length of the room in ${units}:`);
let length = Number.parseFloat(readLine.question());

console.log(`Enter the width of the room in ${units}:`);
let width = Number.parseFloat(readLine.question());

if (units === 'feet') {
  length *= 0.3048;
  width *= 0.3048;
}

let areaMeters = length * width;
let areaFeet = areaMeters * SQMETER_TO_SQFOOT;

console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`);