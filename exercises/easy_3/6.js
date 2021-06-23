/* PEDAC Process

- Learnings + Notes:

- Understand the Problem:
    - Input(s):
      - string x 4: noun, verb, adverb, adjective

    - Output(s):
      - string: story with word placeholders filled in

    - Rules + Questions:
      - Accept 1 noun, 1 verb, 1 adverb, 1 adjective

  - Implicit Requirements:

- Examples/Test Cases:
  - Input(s):
  - Output(s):

- Data Structure:
  - Object of parts of speech arrays
  { noun: [noun1, noun2, etc.], verb: [verb1, verb2]... }

- Algorithm:
  1. Get user input
    1.1 Loop through object keys and store answer in object.
  2. Print results, substituting words with object properties.

- Code:
*/

const readLine = require('readline-sync');

const words = {
  noun: [],
  verb: [],
  adverb: [],
  adjective: []
};

for (let word in words) {
  words[word] = readLine.question(`Please enter a ${word}:\n`);
}

let stories = [];
stories[0] = `Do you ${words['verb']} your ${words['adjective']} ${words['noun']} ${words['adverb']}? That's hilarious!`;
stories[1] = `The ${words['adjective']} ${words['noun']} ${words['verb']}s ${words['adverb']} over the lazy ${words['noun']}.`;
stories[2] = `The ${words['noun']} ${words['adverb']} ${words['verb']}s up ${words['adjective']} Joe's turtle.`;

for (const story in stories) {
  console.log(stories[story]);
}