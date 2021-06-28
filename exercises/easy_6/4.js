function centerOf(str) {
  let half = Math.floor((str.length) / 2);

  return (str.length % 2 === 0) ?
    str.slice(half - 1, half + 1) :
    str[half];
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"