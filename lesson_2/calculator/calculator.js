// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for the operation to perform.
// Perform the operation on the two numbers.
// Display the result of the operation.

const READLINE = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
let language = 'en';

function prompt(key, output = "") {
  let message = MESSAGES[language][key];
  console.log(`=> ${message} ${output}`);
}

function invalidNumber(num) {
  return (num.trimStart() === '') || Number.isNaN(Number(num));
}

prompt('welcome');
prompt('getLanguage');
language = READLINE.question();

while (!MESSAGES.hasOwnProperty(language)) {
  language = 'en';
  prompt('invalidLanguage');
  language = READLINE.question();
}

let calculating = '1';

while (calculating === '1') {

  prompt('getNumber1');
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = READLINE.question();
  }

  prompt('getNumber2');
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt('invalidNumber');
    number2 = READLINE.question();
  }

  prompt('getOperation');
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
    operation = READLINE.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt('result', output);

  prompt('continue');
  calculating = READLINE.question();

  while (!['1', '2'].includes(calculating)) {
    prompt('invalidContinue');
    calculating = READLINE.question();
  }
}