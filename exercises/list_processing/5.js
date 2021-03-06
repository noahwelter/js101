function leadingSubstrings(str) {
  let substr = [];

  [...str].reduce((prev, char) => {
    prev += char;
    substr.push(prev);
    return prev;
  }, '');

  return substr;
}

// for loop
// function substrings(str) {
//   let subStr = [];
//   for (let index = 0; index < str.length; index += 1) {
//     subStr = subStr.concat(leadingSubstrings(str.slice(index)));
//   }

//   return console.log(subStr);
// }

// map
function substrings(str) {
  return ([...str]
    .flatMap((_, index) => leadingSubstrings(str.slice(index))));
}

substrings('abcde');