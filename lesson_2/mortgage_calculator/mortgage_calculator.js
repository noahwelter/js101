const READLINE = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');
const MONTHS_PER_YEAR = 12;

// Program messages
function prompt(key, append = '') {
  console.log(`>> ${MESSAGES[key]}${append}`);
}

function displayResults(loanAmount, annualRate, loanDurationYears,
  paymentMonthly) {
  prompt('printAmount', `${loanAmount.toFixed(2)}`);
  prompt('printAPR', `${annualRate.toFixed(2)}%`);
  prompt('printDuration', `${loanDurationYears.toFixed(0)} years\n`);
  prompt('printPayment', `${paymentMonthly.toFixed(2)} \n`);
}

// Data collection
function getLoanAmount() {
  prompt('getLoanAmount');
  let loanAmount = READLINE.question();

  while (invalidNumEntry(loanAmount)) {
    prompt('invalidAmount');
    loanAmount = READLINE.question();
  }

  return cleanse(loanAmount);

}

function getAnnualRate() {
  prompt('getLoanAPR');
  let annualRate = READLINE.question();

  while (invalidNumEntry(annualRate)) {
    prompt('invalidAPR');
    annualRate = READLINE.question();
  }

  return cleanse(annualRate);
}

function getLoanDurationYears() {
  prompt('getLoanDuration');
  let loanDurationYears = READLINE.question();

  while (invalidNumEntry(loanDurationYears)
    || invalidDuration(loanDurationYears)) {
    prompt('invalidDuration');
    loanDurationYears = READLINE.question();
  }

  return cleanse(loanDurationYears);
}

function askToCalculateAgain() {
  prompt('continue');
  let answer = READLINE.question().trim().toLowerCase();

  while (answer !== "y" && answer !== "n") {
    prompt('invalidContinue');
    answer = READLINE.question().toLowerCase();
  }

  return (answer === 'y');
}

// Input Validation
function invalidNumEntry(entry) {
  return (entry.trim() === '') || Number.isNaN(Number(cleanse(entry)))
    || Number(cleanse(entry)) < 0;
}

function invalidDuration(duration) {
  return !Number.isInteger(Number(duration)) ||
    Number(duration) < 1;
}

// Data Cleansing
function cleanse(value) {
  return Number(value.trim()
    .toLowerCase()
    .replaceAll('$', '')
    .replaceAll('%', '')
    .replaceAll('years', '')
    .replaceAll('y', '')
    .replaceAll(',', ''));
}

// Calculations
function calculateMonthlyRate(annualRate) {
  return annualRate / (MONTHS_PER_YEAR * 100);
}

function yearsToMonths(years) {
  return years * MONTHS_PER_YEAR;
}

function calculatePayment(amount, annualRate, loanDurationYears) {
  let monthlyRate = calculateMonthlyRate(annualRate);
  let loanDurationMonths = yearsToMonths(loanDurationYears);

  if (monthlyRate === 0) return amount / loanDurationMonths;

  return (amount * (monthlyRate / (1 - Math.pow((1 + monthlyRate),
    (-loanDurationMonths)))));
}

prompt('welcome');

do {
  let loanAmount = getLoanAmount();

  let annualRate = getAnnualRate();

  let loanDurationYears = getLoanDurationYears();

  let paymentMonthly =
    calculatePayment(loanAmount, annualRate, loanDurationYears);

  displayResults(loanAmount, annualRate, loanDurationYears, paymentMonthly);

} while (askToCalculateAgain());