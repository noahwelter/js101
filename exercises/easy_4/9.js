/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - string: words with spaces

    - Output(s):
      - object: count of word length

    - Rules + Questions:
      - Non-letters don't count for word size

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):
  - Output(s):

- Data Structure:

- Algorithm:
  1. Use previous wordSizes function, but filter using regex.

- Code:
*/

function wordSizes(str) {
  let lengths = {};

  if (!str) return console.log(lengths);

  str.split(' ').forEach(word => {
    let length = word.replace(/[^a-z]/gi, '').length;
    if (lengths.hasOwnProperty(length)) {
      lengths[length] += 1;
    } else {
      lengths[length] = 1;
    }
  });

  return console.log(lengths);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}