const OPEN_CLOSE = [['(', ')'], ['[', ']'], ['{', '}']];

function isBalanced(str) {
  let obj = createOpenCloseObject();
  str = str.replace(/[^()[\]{}]/g, '');

  for (let index = 0; index < str.length; index += 1) {
    switch (str[index]) {
      case '(':
      case '[':
      case '{':
        obj[str[index]][0] += 1;
        break;
      case ')':
      case ']':
      case '}':
        obj[str[index]][0] -= 1;
        break;
    }

    if (obj[str[index]][0] < 0) return false;
  }

  return Object.values(obj).every(val => val[0] === 0);
}

function createOpenCloseObject() {
  let obj = {};

  OPEN_CLOSE.forEach(pair => {
    obj[pair[0]] = [0];
    obj[pair[1]] = obj[pair[0]];
  });

  return obj;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);