/* PEDAC Process

- Learnings:

- Understand the Problem:
    - Explicit Requirements:
      Input(s):
        - array - 2+ elements
        - object - 2 keys - 'title' and 'occupation'

    - Output(s):
        - string - greting using person's full name and title

      Rules + Questions:
        - Greeting should use both title and occupation (ex. 'Master Plumber')

  - Implicit Requirements:
      - Input array/object does not contain spaces.
      - Array will not contain less than 2 elements.
      - Object will contain the two keys 'title' and 'occupation'

  - Mental Model:

- Examples/Test Cases:
  - Input(s): ['John', 'Q', 'Doe'], { title: 'Master', occupation, 'Plumber' }
  - Output: 'Hello, John Q Doe! Nice to have a Master Plumber around.'

- Data Structure:
  - Output has name array combined using spaces.
  - Output has 'title' and 'occupation' combined with spaces.

- Algorithm:
  1. Create full name by joining array.
  2. Get title from object.
  3. Get occupation from object.
  4. Form string using full, title, and occupation using t

- Code:
*/

function greetings(nameArray, jobObject) {
  let name = nameArray.join(' ');
  let title = jobObject['title'];
  let occupation = jobObject['occupation'];

  return `Hello, ${name}! Nice to have a ${title} ${occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.