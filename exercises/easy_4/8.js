/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - string: space separated words

    - Output(s):
      - object: number of words of different sizes

    - Rules + Questions:
      - Words consist of any sequence of non-space characters.

  - Implicit Requirements:
    - Empty string returns empty object.

- Examples/Test Cases:
  - Input(s):  'Four score and seven.'
  - Output(s): { "3": 1, "4": 1, "5": 1, "6": 1 }

- Data Structure:
  - Object

- Algorithm:
  1. Split into array.
  2. Loop through elements

- Code:
*/

function wordSizes(str) {
  let lengths = {};

  if (!str) return console.log(lengths);

  str.split(' ').forEach(word => {
    let length = word.length;
    if (lengths.hasOwnProperty(length)) {
      lengths[length] += 1;
    } else {
      lengths[length] = 1;
    }
  });

  return console.log(lengths);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}