/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - number: float representing angle between 0 and 360 deg

    - Output(s):
      - string: represents degrees/minutes/seconds

    - Rules + Questions:
      - 60 minutes in a degree, 60 seconds in a minute

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  93.034773
  - Output(s): 93˚02'05"

- Data Structure:
  - Whole number left of decimal is degree value.
  | 1 deg | 60 min | 60 sec |
  |       | 1 deg  | 1 min  |
  - Next 2 digits are minute value
  - Remaining digits are second value

- Algorithm:
  1. Get degree value using Math.floor()
  2. Get minute value by subtracting degrees and using Math.floor()
  3. Get second value by subtracting minute and rounding up(?)

- Code:
*/

function dms(angle) {
  angle = remap(angle);

  let degrees = Math.floor(angle);
  let minutes = (angle - degrees) * 60;
  let seconds = (minutes % 1) * 60;

  return console.log(`${pad(degrees)}˚${pad(Math.floor(minutes))}'${pad(Math.floor(seconds))}"`);
}

function pad(value) {
  let valStr = String(value);
  return valStr.length < 2 ? '0' + valStr : valStr;
}

function remap(angle) {
  while (angle < 0 || angle > 360) {
    angle < 0 ? angle += 360 : angle -= 360;
  }

  return angle;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 60°00'00"