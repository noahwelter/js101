function shortLongShort(str1, str2) {
  let strArr = [str1, str2].sort((str1, str2) => str1.length - str2.length);
  return strArr[0] + strArr[1] + strArr[0];
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"