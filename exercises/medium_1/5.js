let wordToDigit = str => {
  const lookup = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7,
    eight: 8, nine: 9 };

  // Looping method
  // Object.keys(lookup).forEach(word => {
  //   str = str.replaceAll(word, lookup[word]);
  // });

  // Regex method
  let regex = new RegExp('\\b' + Object.keys(lookup).join('\\b|\\b') + '\\b', 'gi');

  return str.replace(regex, match => lookup[match.toLowerCase()]);
};

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."