const readLine = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

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

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(message) {
  console.log(`==> ${message}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
    square = readLine.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt(`Sorry, that's not a valid choice.`);
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
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

function someoneWon(board) {
  return !!detectWinner(board);
}

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

function askToPlayAgain() {
  let answer;

  do {
    prompt('Play again? (y or n)');
    answer = readLine.question().trim().toLowerCase();
  } while (!answer.match(/^[yn]$/i));

  switch (answer) {
    case 'y': return true;
    case 'n': return false;
    default: return null;
  }
}

do {
  let board = initializeBoard();
  let currentPlayer = 'Player';

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt(`It's a tie!`);
  }

} while (askToPlayAgain());

prompt('Thanks for playing Tic Tac Toe!');