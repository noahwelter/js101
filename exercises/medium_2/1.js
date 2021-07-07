/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - string: letters, numbers, etc.

    - Output(s):
      - object: lowercase: 'xx.xx, uppercase: 'xx.xx', neither: 'xx.xx'

    - Rules + Questions:
      - Object should contain the percentage of each char type.
      - String always has at least 1 character.

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  'abCdef 123'
  - Output(s): { lowercase: '50.00', uppercase: '10.00', neither: '40.00}

- Data Structure:

- Algorithm:
  1. Setup 2 regex searches - lower and upper
  2. Get length of lower, upper match arrays
  3. Neither is total length - lower - upper
  4. Format object and return percentages (prop length/ total length)

- Code:
*/

let toPercentage = num => {
  return (num * 100).toFixed(2);
};

let letterPercentages = str => {
  const ONE_HUNDRED_PCT = 100;
  let totalLength = str.length;

  let lowerLength = (str.match(/[a-z]/g) || []).length;
  let upperLength = (str.match(/[A-Z]/g) || []).length;

  let lowerPct = toPercentage(lowerLength / totalLength);
  let upperPct = toPercentage(upperLength / totalLength);
  let neitherPct = (ONE_HUNDRED_PCT - lowerPct - upperPct).toFixed(2);

  return { lowercase: lowerPct, uppercase: upperPct, neither : neitherPct };
};


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }