# 5. Practice Problems

1. ```js
   arr.sort((a, b) => Number(b) - Number(a));
   ```

2. ```js
   books.sort((a, b) => Number(a['published']) - Number(b['published']));
   ```

3. ```js
   let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
   arr1[2][1][3];
 
   let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
   arr2[1]['third'][0];
 
   let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
   arr3[2]['third'][0][0];
 
   let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
   obj1['b'][[1]];
 
   let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
   Object.keys(obj2['third'])[0]
   ```

4. ```js
   let arr1 = [1, [2, 3], 4];
   arr1[1][1] = 4;
 
   let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
   arr2[2] = 4;
 
   let obj1 = { first: [1, 2, [3]] };
   obj1['first'][2][0] = 4;
 
   let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
   obj2['a']['a'][2] = 4;
   ```

5. ```js
   let munsters = {
     Herman: { age: 32, gender: 'male' },
     Lily: { age: 30, gender: 'female' },
     Grandpa: { age: 402, gender: 'male' },
     Eddie: { age: 10, gender: 'male' },
     Marilyn: { age: 23, gender: 'female'}
   };
   let totalAge = 0;

   for (let name in munsters) {
     if (munsters[name]['gender'] === 'male') totalAge += munsters[name]['age'];
   }

   console.log(totalAge);
   ```

6. ```js
   let munsters = {
     herman: { age: 32, gender: 'male' },
     lily: { age: 30, gender: 'female' },
     grandpa: { age: 402, gender: 'male' },
     eddie: { age: 10, gender: 'male' },
     marilyn: { age: 23, gender: 'female'}
   };

   for (let name in munsters) {
     console.log(`${name} is a ${munsters[name]['age']}-year-old ${munsters[name]['gender']}`);
   }
   ```

7. `a = 2` and `b = [3, 8]`

8. ```js
   let obj = {
     first: ['the', 'quick'],
     second: ['brown', 'fox'],
     third: ['jumped'],
     fourth: ['over', 'the', 'lazy', 'dog'],
   };

   Object.values(obj).forEach(words => {
     words.forEach(word => {
       word.split('').forEach(letter => {
        if ('aeiou'.includes(letter)) console.log(letter);
       })
     });
   });
   ```

9. ```js
   let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

   arr.map(arr1 => {
     return typeof arr1[0] === 'number' ?
       arr1.slice().sort((a, b) => a - b) :
       arr1.slice().sort();
   });
   ```

10. ```js
    let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
 
    arr.map(arr1 => {
      return typeof arr1[0] === 'number' ?
        arr1.slice().sort((a, b) => b - a) :
        arr1.slice().sort().reverse();
    });
    ```

11. ```js
    let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
 
    arr.map(obj => {
      let objTemp = {}
 
      for (let prop in obj) {
        objTemp[prop] = obj[prop] + 1;
      }
 
      return objTemp;
    });
    ```

12. ```js
    let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
 
    arr.map(arr1 => {
      return arr1.filter(num => num % 3 === 0);
    });
    ```

13. ```js
    let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
 
    arr.sort((a, b) => {
      return a.filter(num => num % 2 === 1).reduce((num, sum) => num + sum) - b.filter(num => num % 2 === 1).reduce((num, sum) => num + sum)
    });
    ```

14. ```js
    let obj = {
      grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
      carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
      apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
      apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
      marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
    };
 
    Object.keys(obj).map(produce => {
      return obj[produce]['type'] === 'fruit' ?
        obj[produce]['colors'].map(color => {
          return color[0].toUpperCase() + color.slice(1);
        }) :
        obj[produce]['size'].toUpperCase();
    });
    ```

15. ```js
    let arr = [
      { a: [1, 2, 3] },
      { b: [2, 4, 6], c: [3, 6], d: [4] },
      { e: [8], f: [6, 10] },
    ];

    arr.filter(obj => {
      return Object.values(obj).every(arr => {
        return arr.every(num => num % 2 === 0);
      });
    });
    ```

16. ```js
    let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

    // Easy way:
    let obj = Object.fromEntries(arr);

    // Longer way:
    let obj = {};

    arr.forEach(element => {
      obj[element[0]] = element[1];
    });

    ```

17. ```js
    function createUUID() {
      const CHARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
      const LENGTH = 32;
      
      let UUID = '';

      for (let pos = 0; pos < LENGTH; pos += 1) {
        let index = Math.floor(Math.random() * 16);
        UUID += CHARS[index];
      }

      return UUID.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
    }
    ```