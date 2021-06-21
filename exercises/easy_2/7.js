/* PEDAC Process

- Learnings + Notes:
  - ^ operator needs to use !! to coerce boolean type if using on truthy/falsey
  - xor does not use short-circuiting, as both values being compared are
    necessary in evaluating the result. && and || can short circuit because the
    result of the first operator can tell you the overall result in certain
    scenarios. (First value false for && means false overall, first value true
    for || means true overall.)

- Understand the Problem:
    - Input(s):
      - any: first argument to compare
      - any: second argument to compare

    - Output(s):
      - boolean: result of exclusive or

    - Rules + Questions:
      - Returns true if exactly one argument is truthy, false otherwise.

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):  5, 0 | false, true | 1, 1  | true, true
  - Output(s): true | true        | false | false

- Data Structure:
  - Primatives

  true + true -> false
  true + false -> true
  false + false -> false

- Algorithm:
  1. Check if first argument is truthy.
    1.1. Return true if second argument is falsey, otherwise return false.

- Code:
*/

function xor(first, second) {
  return first ? !second : !!second;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
console.log(xor(true, false) === true);
console.log(xor(false, false) === false);