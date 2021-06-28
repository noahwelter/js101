// Using push
// function interleave(arr1, arr2) {
//   let combined = [];
//   for (let index = 0; index < arr1.length; index += 1) {
//     combined.push(arr1[index], arr2[index]);
//   }

//   return console.log(combined);
// }

// Using forEach
// function interleave(arr1, arr2) {
//   let combined = [];
//   combined.length = arr1.length + arr2.length;

//   arr1.forEach((value, index) => {
//     combined[index * 2] = value;
//     combined[(index * 2) + 1] = arr2[index];
//   });

//   return console.log(combined);
// }

// Using map
// function interleave(arr1, arr2) {
//   return console.log(arr1.map((val, index) => {
//     return [val, arr2[index]];
//   }).flat());
// }

// Using reduce
function interleave(arr1, arr2) {
  return console.log(arr1.reduce((acc, val, index) => {
    acc.push(val, arr2[index]);
    return acc;
  }, []));
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]