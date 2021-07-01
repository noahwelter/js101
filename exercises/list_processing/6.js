function leadingSubstrings(str) {
  let substr = [];

  [...str].reduce((prev, char) => {
    prev += char;
    substr.push(prev);
    return prev;
  }, '');

  return substr;
}

function substrings(str) {
  return ([...str]
    .flatMap((_, index) => leadingSubstrings(str.slice(index))));
}

function palindromes(str) {
  return (substrings(str)
    .filter(substr => {
      return (substr.length > 1 &&
        substr === substr.split('').reverse().join(''));
    }));
}

console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));