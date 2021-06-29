const readLine = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SCORE = 5;

// #region Gameplay
function playerChoosesSquare(board) {
  let square = Number(askPlayer(`Choose a square ${joinOr(emptySquares(board))}:`,
    emptySquares(board).join('')));

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'Player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'Player' ? 'Computer' : 'Player';
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line += 1) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER) {
      return 'Player';
    } else if (board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER) {
      return 'Computer';
    }
  }

  return null;
}

function detectMatchWinner(score) {
  return Object.keys(score)[Object.values(score).indexOf(WINNING_SCORE)];
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function someoneWonMatch(score) {
  return !!detectMatchWinner(score);
}

function updateScore(board, score) {
  if (someoneWon(board)) {
    score[detectWinner(board)] += 1;
  }
}
// #endregion

// #region General
function joinOr(choices, mainSeparator = ', ' , finalSeparator = 'or') {
  switch (choices.length) {
    case 0:
    case 1:
      return String(choices);
    case 2:
      return choices.join(` ${finalSeparator} `);
    default:
      return choices.reduce((string, choice, index) => {
        return string + (index === choices.length - 1 ?
          `${finalSeparator} ${choice}` :
          `${choice}${mainSeparator}`);
      }, '');
  }
}
// #endregion

// #region Display + Board
function prompt(message) {
  console.log(`==> ${message}`);
}

function askPlayer(askPrompt, options = 'y') {
  let answer;
  let regex = new RegExp('^[' + options + ']$', 'i');

  do {
    prompt(askPrompt);
    answer = readLine.question().trim().toLowerCase();
  } while (!answer.match(regex));

  return answer;
}

function askPlayerBoolean(askPrompt, trueOptions = 'y', falseOptions = '') {
  let answer;
  let regex = new RegExp('^[' + trueOptions + falseOptions + ']$', 'i');

  do {
    prompt(askPrompt);
    answer = readLine.question().trim().toLowerCase();
  } while (!answer.match(regex));

  return trueOptions.includes(answer);
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function displayHeader(score) {
  console.clear();
  console.log(`+----------+---------------+`);
  console.log(`|  You  ${score['Player']}  |   ${score['Computer']} Computer  |`);
  console.log(`|  [${HUMAN_MARKER}]     |     [${COMPUTER_MARKER}]       |`);
  console.log(`+----------+---------------+`);
}

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function displayGameResult(board) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won this game!`);
  } else {
    prompt(`It's a tie!`);
  }
}

function displayMatchResults(score) {
  let winner = detectMatchWinner(score);
  prompt(`${winner} won the match ${score[winner]} to ${score[alternatePlayer(winner)]}!`);
}
// #endregion

do {
  let score = {
    Player: 0,
    Computer: 0
  };

  do {
    let board = initializeBoard();
    let currentPlayer = 'Player';

    do {
      displayHeader(score);
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
    } while (!someoneWon(board) && !boardFull(board));

    updateScore(board, score);

    displayHeader(score);
    displayBoard(board);
    displayGameResult(board);

    if (someoneWonMatch(score)) {
      displayMatchResults(score);
    } else {
      askPlayer(`Press 'c' to continue...`, 'c');
    }
  } while (!someoneWonMatch(score));
} while (askPlayerBoolean(`Play again? (y or n)`, 'y', 'n'));

prompt('Thanks for playing Tic Tac Toe!');