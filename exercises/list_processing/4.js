function leadingSubstrings(str) {
  let substr = [];

  [...str].reduce((prev, char) => {
    prev += char;
    substr.push(prev);
    return prev;
  }, '');

  return substr;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]