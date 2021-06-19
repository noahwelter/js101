# 11. Practice Problems
1. `[1, 2, 3]` - `'hi'` evaluates to `true`, and the implicit return is `true` for each element.

2. `[undefined, undefined, undefined]` - There is no explicit return value, and so `undefined` is mapped for each element.

3. `[1, 3, 9]` - The implicit return value is the result of `num * num`.

4. `11` - `pop` returns the last element in the array (`caterpillar`). Calling `length` on `ceterpillar` returns `11`.

5. The callback returns the following because the `num` assignment in every call returns the result of `num * 2`:
   ```js
   2
   4
   6
   ```
   `every` returns `true` based on these results (all positive integers = `true`).

6. `[1, 1, 1, 1, 1]` - `fill` can take up to 3 arguments (value to fill, starting index, ending index). The end index reference is not inclusive. If the end index is larger than the array length, it will fill to the end of the array (not create additional elements). It will mutate the values of the calling array (is destructive).

7. `[undefined, 'bear']` - the conditional in the callback is falsy for `'ant'`, so the first value returned is `undefined` (default function return if not specified). The conditional is truthy using `bear.length`, and `bear` is returned.

8. ```js
   let obj = {};
   flintstones.forEach((name, index) => obj[name] = index);
   ```

9. ```js
   Object.values(ages).reduce((sum, age) => sum += age);
   ```

10. ```js
    Object.values(ages).sort()[0];
    ```
    Using spread syntax (used because `Math.min` accepts individual numbers as arguments, not an array of numbers):
    ```js
    let values = Object.values(ages);
    Math.min(...values);
    ```
    The following is also valid:
    ```js
    Math.min(...Object.values(ages));
    ```

11. ```js
    let letterObj = {};
    statement.split('').filter(char => char !== ' ').forEach(letter => {
      letterObj.hasOwnProperty(letter) ? letterObj[letter] += + 1 : letterObj[letter] = 1;
    });
    ```
    Solution using short-circuiting shown below. The `letterObj[letter] || 0` expression will either evaluate to the `letterObj[letter]` value if the `letter` property exists, or it will evaluate `0` if the property doesn't exist.
    ```js
    let letterObj = {};
    statement.split('').filter(char => char !== ' ').forEach(letter => {
      letterObj[letter] = letterObj[letter] || 0;
      letterObj[letter] += 1;
    });
    ```