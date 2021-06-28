// function sequence(num) {
//   let arr = [];

//   for (let index = 0; index < num; index += 1) {
//     arr[index] = index + 1;
//   }

//   return arr;
// }

// forEach
// function sequence(num) {
//   let arr = [];
//   arr.length = num;
//   arr.fill(0, 0, 5);

//   arr.forEach((_, index) => {
//     arr[index] = index + 1;
//   });

//   return arr;
// }

// map
function sequence(num) {
  let arr = [];
  arr.length = num;
  arr.fill(0, 0, 5);

  return arr.map((_, index) => index + 1);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]