# Lesson 3: Practice Problems

## Easy 1

1. No - it will assign the value `5` to `numbers[6]` and insert empty elements into the `numbers` array.

   _Bonus:_ `undefined`, but it doesn't have a value and is empty.

2. ```js
   str.endsWith("!");
   ```

3. ```js
   ages.hasOwnProperty("Spot");
   ```

4. ```js
   munstersDescription[0].toUpperCase() + munstersDescription.toLowerCase().slice(1);
   ```

5. ```js
   true
   false
   ```

6. ```js
   Object.assign(ages, additionalAges);
   ```

7. ```js
   str1.includes('Dino');  // false
   str2.includes('Dino');  // true
   ```

8. ```js
   flintstones.push('Dino');
   ```

9. ```js
   flintstones.push('Dino', 'Hoppy');
   ```

10. ```js
    advice.split('house')[0];
    ```

## Easy 2

1. ```js
   advice.replaceAll('important', 'urgent');
   ```

2. ```js
   let reverseArray = numbers.slice().reverse();
   let sortArray = [...numbers].sort((num1, num2) => num2 - num1);

   // Bonus
   let eachArray = [];
   numbers.forEach((num, index) => eachArray[i] = numbers[numbers.length - 1 - i]);  // Initial attempt

   numbers.forEach(num => reversedArray.unshift(num));  // From answer
   ```

3. ```js
   numbers.includes(number1);  // false
   numbers.includes(number2);  // true
   ```

4. ```js
   'Four score and ' + famousWords;
   `Four score and ${famousWords}`;
   'Four score and '.concat(famousWords);
   ```

5. ```js
   numbers.splice(2, 1);
   ```

6. ```js
   let flatFlintstones = flintstones.flat();
   ```

7. ```js
   let barney = Object.entries(flintstones).filter(entry => entry[0] === 'Barney').flat();
   ```

8. ```js
   Array.isArray(numbers);  // true
   Array.isArray(table);  // false
   ```

9. ```js
   title.padStart(Math.floor((40 - title.length) / 2) + title.length);
   ```

10. ```js
    statement1.match(/[t]/g).length;  // 2
    statement2.split('').filter(letter => letter === 't').length;  // 0
    ```

## Easy 3

1. ```js
   numbers.splice(0);

   while (numbers.length) {
     numbers.pop();
   }

   while (numbers.length) {
     numbers.shift();
   }

   numbers.length = 0;
   ```

2. ```js
   1, 2, 34, 5
   ```

3. ```js
   hello there
   ```

4. ```js
   [{ first: 42 }, { second: "value2" }, 3, 4, 5];  // Shallow copy only duplicates outermost values (duplicate objects in array point to same memory location)
   ```

5. ```js
   return (color === "blue" || color === "green");

   // refactored:
   const isColorValid = color => ['blue', 'green'].includes(color);
   ```

## Medium 1

1. ```js
   let msg = 'The Flintstones Rock!'
   for (let i = 0; i < 10; i += 1) {
     console.log(msg.padStart(i + msg.length));
   }
   ```

2. ```js
   let munstersDescription = "The Munsters are creepy and spooky.";

   // Option 1
   let flipped = munstersDescription.split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('');
   ```

3. ```js
   function factors(number) {
     let divisor = number;
     let factors = [];

     while (divisor > 0) {
       if (number % divisor === 0) {
         factors.push(number / divisor);
       }
       divisor -= 1;
     }
     
     return factors;
   }
   ```

   Replacing `factors.push(number / divisor)` with `factors.push(divisor)` will return the array with the factors ordered largest to smallest instead of smallest to largest.

   _Bonus:_ `number % divisor === 0` is `true` when the remainder of `number / divisor` is 0. This indicates that `divisor` is a factor of `number`.

4. Yes - `buffer.push(newElement)` will mutate the array argument. `buffer.concat(newElement)` will return a new array object and will not mutate the array argument, but instead reassign buffer to the new array object.

5. Due to how decimal values are converted to binary values, `0.3 + 0.6` may evaluate to something close to but not exactly `0.9`. Because of this, `console.log(0.3 + 0.6 === 0.9)` will return `false`.

6. `NaN === NaN` will return `false`. Use `Number.isNaN(nanArray[0])` instead.

7. `answer` is not mutated by the function `messWithIt`, so `console.log(answer - 8)` prints `34`.

8. Yes - the object passed as an argument is mutated due to being passed by reference.

9. ```js
   'paper'
   ```

   The individual `rps()` function calls are performed starting from the innermost calls.

10. ```js
    'no'
    ```

    Calling `foo` always returns `'yes'`. Function `bar` has a default value for `param` of `'no'`, however it is passed `'yes'` by the return value of `foo`. The ternary operator expression evaluates to `false` and returns `'no'`.