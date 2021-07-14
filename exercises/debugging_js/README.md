# Debugging JS

1. Because there is no semi-colon after the `let ladder = ''` statement, the next line is used like a `[#]`, trying to access a specific character. Nothing is found, and `forEach` attempts to iterate through `undefined`, which throws the `TypeError`.

   ```js
   let ladder = ''

   ['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach
   ```

2. Return values in `forEach` do not do anything - `forEach` always returns `undefined`. If using `forEach` is desired, threre should be a boolean that is set to `true` and returned at the end of the function:

   ```js
   function isReserved(name) {
     let invalid = false;
 
     RESERVED_KEYWORDS.forEach(reserved => {
       if (name === reserved) {
         invalid = true;
       }
     });
 
     return invalid;
   }
   ```

   or use `some` method:

   ```js
   function isReserved(name) {
     return RESERVED_KEYWORDS.some(reserved => name === reserved);
   }
   ```

   From answer - can also use `includes`:
   ```js
   function isReserved(name) {
     return RESERVED_KEYWORDS.includes(name);
   }
   ```

3. Adding arrays using the `+` operator coerces the arrays to strings (joining with `,`). Because of this, `dishName` is a string when `join` is called. `join` is expecting an array, and will throw an error. Use `concat` instead to 'add' arrays together.

4. Using the `delete` operator to remove a task from the `todos` array will remove the string but keep the element spot and the `length` property will remain unchanged. The `length` will never decrease. Use `todos.shift()` or `todos.splice(0)` to remove the first item from the list instead.

5. Two functions with the same name shouldn't be used. Instead, either flip the parameter order so that `start` can default to `0` with a single argument, or add a check at the start of the function to reassign `start` and `end` if `end === -1`.

   ```js
   function range(start, end) {
     if (!end) {  // !end can evaluate to true if end === 0
       start = 0;  // Start is reassigned to 0...
       end = start;  // and then end is assigned to the value of start (0);
       // Need to flip these statements.
     }
 
     // ...
   }
   ```

6. `\w` includes numbers. `[a-z]` with `i` flag should be used instead if only letters are desired.

7. The `switch` statement in the `targetRoll` function is missing `break;` statements. These should be included after the code to run for each case, unless fall-through behaviour is intended.

8. The `sort` method defaults to sorting by UTF-16 code unit values. Instead, `nums.sort((a, b) => a - b)` should be used.

9. The `toString` function is not properly formatting the date to compare with `myCalendar`. Change:
  - Year: `date.getFullYear()`
  - Month: `String(date.getMonth() + 1).padStart(2, '0')`
  - Day: `String(date.getDate()).padStart(2, '0')`

10. The sentence array `words` is iterated through using `forEach`. After finding the `indexOf` `dull` and splicing it out of the array, the next index to look at in `words` is `2`. This is now the word `cards`. Instead, `filter` could be used:

   ```js
   function neutralize(sentence) {
     let words = sentence.split(" ");
 
     return words.filter(word => !isNegative(word)).join(' ');
   }
   ```
