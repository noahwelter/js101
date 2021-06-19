// Input:
//   - string
// Output:
//   - UTF-16 string value (sum of UTF-16 values of every character in string)
//
// Need to convert \u03A9

function utf16Value(str) {
  return str.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0