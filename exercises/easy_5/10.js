// function average(arr) {
//   return console.log(Math.floor(arr
//     .reduce((prev, val) => prev + val) / arr.length));
// }

function average(arr) {
  let sum = 0;

  arr.forEach(val => {
    sum += val;
  });

  return console.log(Math.floor(sum / arr.length));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40