//#region Constants
const readLine = require('readline-sync');

const TIE_INDEX = 0;
const USER_INDEX = 1;
const COMPUTER_INDEX = 2;
const SCORE_TO_WIN = 3;
const NAME_TABLE = ["Tie", "You", "Computer"];
const VICTORY_TABLE = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};
//#endregion

//#region Display messages
function prompt(message) {
  console.log(`>> ${message}`);
}

function displayWelcome() {
  console.clear();
  prompt(`Welcome to ${Object.keys(VICTORY_TABLE).join(', ').toUpperCase()}.\n   First to ${SCORE_TO_WIN} wins!\n`);
  displayRules();
}

function displayRules() {
  prompt('Rules:\n');
  for (const choice in VICTORY_TABLE) {
    console.log(`   ${choice.toUpperCase()} beats ${VICTORY_TABLE[choice].join(', ').toUpperCase()}`);
  }
  console.log();
}

function displayGameWinner(userChoice, computerChoice, scoreArray) {
  prompt(`${NAME_TABLE[USER_INDEX]} chose ${userChoice}. ${NAME_TABLE[COMPUTER_INDEX]} chose ${computerChoice}.\n\n   ${NAME_TABLE[USER_INDEX]}: ${scoreArray[USER_INDEX]}\n   ${NAME_TABLE[COMPUTER_INDEX]}: ${scoreArray[COMPUTER_INDEX]}\n`);
}

function displayMatchWinner(scoreArray, matchWinnerIndex) {
  let winnerName = NAME_TABLE[matchWinnerIndex];

  prompt(`${winnerName} won! The final score was:\n\n   ${NAME_TABLE[USER_INDEX]}: ${scoreArray[USER_INDEX]}\n   ${NAME_TABLE[COMPUTER_INDEX]}: ${scoreArray[COMPUTER_INDEX]}\n`);
}
//#endregion

//#region Get values (from user or generated)
function getUserChoice() {
  prompt(`Choose one: ${Object.keys(VICTORY_TABLE).join(', ')}`);
  let userChoice = readLine.question().toLowerCase();

  userChoice = getIntendedChoice(userChoice);

  while (!validChoice(userChoice)) {
    prompt(`That is not a valid choice.`);
    userChoice = readLine.question().toLowerCase();
    userChoice = getIntendedChoice(userChoice);
  }

  console.clear();

  return userChoice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random()
    * Object.keys(VICTORY_TABLE).length);

  return Object.keys(VICTORY_TABLE)[randomIndex];
}

function askContinuetoPlay() {
  prompt("Would you like to play again? (y/n)");
  let answer = readLine.question().toLowerCase();

  while (answer !== "y" && answer !== "n") {
    prompt("Please enter 'y' or 'n'.");
    answer = readLine.question().toLowerCase();
  }

  return (answer === 'y');
}
//#endregion

//#region Input Validation
function validChoice(userChoice) {
  return (choiceTableMatch(userChoice) ||
  firstLetterMatch(userChoice));
}

function choiceTableMatch(userChoice) {
  return Object.keys(VICTORY_TABLE).includes(userChoice);
}

function firstLetterMatch(userChoice) {
  return Object.keys(VICTORY_TABLE).find(choice => choice[0] === userChoice);
}

function getIntendedChoice(userChoice) {

  if (choiceTableMatch(userChoice)) {
    return userChoice;
  } else if (firstLetterMatch(userChoice)) {
    return getIntendedMatchChoice(userChoice);
  } else {
    return userChoice;
  }
}

function getIntendedMatchChoice(userChoice) {
  let matchArray = Object.keys(VICTORY_TABLE).filter(choice =>
    choice[0] === userChoice);

  if (matchArray.length === 1) {
    return matchArray[0];
  } else {
    console.log();
    prompt(`There are multiple choices that match '${userChoice}'. Which did you intend?\n   Enter a number from the list below:\n`);

    matchArray.forEach((match, index) => console.log(`   ${index + 1}. ${match}`));

    let intendedIndex = calculateStringIndex(readLine.question());

    while (!(Object.keys(matchArray).includes(intendedIndex))) {
      prompt(`That is not a valid selection. Please enter a number from 1 to ${matchArray.length}.`);
      intendedIndex = calculateStringIndex(readLine.question());
    }

    return matchArray[intendedIndex];
  }
}
//#endregion

//#region Calculations
function calculateStringIndex(stringIndex) {
  return String(Number(stringIndex) - 1);
}

function computeGameWinnerIndex(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return TIE_INDEX;
  } else if (VICTORY_TABLE[userChoice].includes(computerChoice)) {
    return USER_INDEX;
  } else {
    return COMPUTER_INDEX;
  }
}

function updateScore(scoreArray, winStatus) {
  scoreArray[winStatus] += 1;
}

function computeMatchWinnerIndex(scoreArray) {
  return scoreArray.indexOf(SCORE_TO_WIN, USER_INDEX);
}
//#endregion

//#region Main
do {
  let matchWinnerIndex = -1;
  let scoreArray = [0, 0, 0];

  displayWelcome();

  while (matchWinnerIndex < 1) {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    displayRules();

    let gameWinnerIndex = computeGameWinnerIndex(userChoice, computerChoice);
    updateScore(scoreArray, gameWinnerIndex);

    matchWinnerIndex = computeMatchWinnerIndex(scoreArray);
    displayGameWinner(userChoice, computerChoice, scoreArray);
  }

  displayMatchWinner(scoreArray, matchWinnerIndex);

} while (askContinuetoPlay());
//#endregion