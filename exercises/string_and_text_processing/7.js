let staggeredCase = (str, countNonAlpha = false) => {
  let makeUpper = true;

  return [...str].map(char => {
    let isLetter = !!char.match(/[a-z]/i);

    if (isLetter) {
      if (makeUpper) {
        makeUpper = !makeUpper;
        return char.toUpperCase();
      } else {
        makeUpper = !makeUpper;
        return char.toLowerCase();
      }
    } else {
      if (countNonAlpha) makeUpper = !makeUpper;
      return char;
    }
  }).join('');
};

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

console.log(staggeredCase("I Love Launch School!", true) === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase("ALL CAPS", true) === "AlL CaPs");
console.log(
  staggeredCase("ignore 77 the 4444 numbers", true) === "IgNoRe 77 ThE 4444 nUmBeRs"
);