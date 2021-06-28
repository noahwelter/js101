function repeater(str) {
  return str.split('').reduce((acc, char) => acc + char + char, '');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""