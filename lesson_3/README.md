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
   advice.replace('important', 'urgent');
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