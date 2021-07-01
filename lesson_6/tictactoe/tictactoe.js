const readLine = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const FIRST_MOVE = 'choose';  // 'player', 'computer', 'choose', 'random'
const WINNING_SCORE = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

// #region Display + Board
function prompt(message) {
  console.log(`==> ${message}`);
}

function askPlayer(askPrompt, options = ['y']) {
  let answer;
  let errorMessage;
  let optionsRegex = options.join('|');
  let regex = new RegExp('^(' + optionsRegex + ')$', 'i');

  do {
    prompt(errorMessage || askPrompt);
    answer = readLine.question().trim().toLowerCase();
    errorMessage = `Invalid entry. Please enter ${joinOr(options)}...`;
  } while (!answer.match(regex));

  return answer;
}

function askPlayerBool(askPrompt, trueOptions = ['y'], falseOptions = ['']) {
  let answer;
  let errorMessage = '';
  let optionsRegex = trueOptions.concat(falseOptions).join('|');
  let regex = new RegExp('^(' + optionsRegex + ')$', 'i');

  do {
    prompt(errorMessage || askPrompt);
    answer = readLine.question().trim().toLowerCase();
    errorMessage = `Invalid entry. Please enter ${joinOr(trueOptions.concat(falseOptions))}...`;
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

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function displayGreeting() {
  console.clear();
  console.log(`Welcome to Tic Tac Toe!`);
  console.log(`First to ${WINNING_SCORE} points wins.\n`);
}

function displayHeader(score) {
  console.clear();
  console.log(`+-------------+---------------+`);
  console.log(`|  Player  ${score['player']}  |  ${score['computer']}  Computer  |`);
  console.log(`|  [${HUMAN_MARKER}]        |     [${COMPUTER_MARKER}]       |`);
  console.log(`+-------------+---------------+`);
}

function displayBoard(board) {
  console.log('');
  console.log('          |     |');
  console.log(`       ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('          |     |');
  console.log('     -----+-----+-----');
  console.log('          |     |');
  console.log(`       ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('          |     |');
  console.log('     -----+-----+-----');
  console.log('          |     |');
  console.log(`       ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('          |     |');
  console.log('');
}

function displayGameResult(score, board) {
  displayHeader(score);
  displayBoard(board);

  if (someoneWonGame(board)) {
    prompt(`${capitalize(detectWinner(board))} won this game!`);
  } else {
    prompt(`It's a tie!`);
  }
}

function displayMatchResult(score) {
  let winner = detectMatchWinner(score);
  prompt(`${capitalize(winner)} won the match ${score[winner]} to ${score[alternatePlayer(winner)]}!`);
}
// #endregion

// #region Gameplay
function whoGoesFirst(FIRST_MOVE) {
  let question = `Who is going first? Enter player (p) or computer (c)...'`;
  let options = ['p', 'player', 'c', 'computer'];
  switch (FIRST_MOVE) {
    case 'choose': return shortNameToFullName(askPlayer(question, options));
    case 'random': return Math.random() >= 0.5 ? 'player' : 'computer';
    default: return FIRST_MOVE;
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}

function playerChoosesSquare(board) {
  let question = `Choose a square: ${joinOr(emptySquares(board))}...`;
  let options = emptySquares(board);
  let square = Number(askPlayer(question, options));

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square = selectMoveBasedOn(board, COMPUTER_MARKER);
  if (!square) square = selectMoveBasedOn(board, HUMAN_MARKER);
  if (!square) square = selectCenterSquare(board);
  if (!square) square = selectRandomSquare(board);

  board[square] = COMPUTER_MARKER;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function selectMoveBasedOn(board, marker) {
  let square = null;

  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = findBestSquare(line, board, marker);
    if (square) break;
  }

  return square;
}

function findBestSquare(line, board, marker) {
  let threatArr = line.map(square => board[square]);

  if (threatArr.filter(val => val === marker).length === 2) {
    let openSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (openSquare !== undefined) {
      return openSquare;
    }
  }

  return null;
}

function selectCenterSquare(board) {
  const CENTER_SQUARE = 5;
  return (board[CENTER_SQUARE] === INITIAL_MARKER) ? CENTER_SQUARE : null;
}

function selectRandomSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[randomIndex];
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER) {
      return 'player';
    } else if (board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER) {
      return 'computer';
    }
  }

  return null;
}

function detectMatchWinner(score) {
  return Object.keys(score)[Object.values(score).indexOf(WINNING_SCORE)];
}

function someoneWonGame(board) {
  return !!detectWinner(board);
}

function someoneWonMatch(score) {
  return !!detectMatchWinner(score);
}

function updateScore(score, board) {
  if (someoneWonGame(board)) {
    score[detectWinner(board)] += 1;
  }
}

function playGame(score, board, currentPlayer) {
  do {
    displayHeader(score);
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
  } while (!someoneWonGame(board) && !boardFull(board));

  updateScore(score, board);
}

function playMatch(score, firstPlayer) {
  do {
    let board = initializeBoard();
    playGame(score, board, firstPlayer);
    displayGameResult(score, board);
    firstPlayer = alternatePlayer(firstPlayer);
    askPlayer(`Enter c to continue...`, ['c']);
  } while (!someoneWonMatch(score));
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

function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

function shortNameToFullName(name) {
  return (name[0] === 'p') ? 'player' : 'computer';
}
// #endregion

displayGreeting();

do {
  let score = {
    player: 0,
    computer: 0
  };

  let firstPlayer = whoGoesFirst(FIRST_MOVE);

  playMatch(score, firstPlayer);
  displayMatchResult(score);

} while (askPlayerBool(`Play again? Enter y or n...`, ['y'], ['n']));

prompt('Thanks for playing Tic Tac Toe!');