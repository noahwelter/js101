/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - string: line of text

    - Output(s):
      - string: input string surrounded with a box of text

    - Rules + Questions:
      - Box should look like:
        +--------+
        |        |
        | string |
        |        |
        +--------|

  - Implicit Requirements:
    - Empty string returns empty box.

- Examples/Test Cases:
  - Input(s):  'To boldly go where no one has gone before.'
  - Output(s): +--------------------------------------------+
               |                                            |
               | To boldly go where no one has gone before. |
               |                                            |
               +--------------------------------------------+

- Data Structure:
  - 3 arrays later converted to strings

- Algorithm:
  1. Get length of string.
  2. Create top/bottom array based on length + additional characters.
  3. Create mid-top/mid-bottom array based on length.
  4. Add start/end section to string.
  5. Log box in correct order (5 log calls).

- Code:
*/

function logInBox(str, length = str.length) {
  str = str.slice(0, length);
  let lengthPadded = str.length + 2;

  let outer = '+' + '-'.repeat(lengthPadded) + '+';
  let inner = '|' + ' '.repeat(lengthPadded) + '|';
  let middle = '| ' + str + ' |';

  let box = [outer, inner, middle, inner, outer];

  for (const row in box) {
    console.log(box[row]);
  }
}

logInBox('To boldly go where no one has gone before.', 10);
logInBox('');