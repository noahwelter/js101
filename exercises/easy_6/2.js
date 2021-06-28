function doubleConsonants(str) {
  return console.log([...str].reduce((prev, val) => {
    let reg = /[b-d|f-h|j-n|p-t|v-z]/i;
    return prev + (reg.test(val) ? val.repeat(2) : val);
  }, ''));
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""