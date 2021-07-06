const readLine = require('readline-sync');

const FIRST_CARD = 0;
const MYSTERY_CARD = ['', '?'];
const INITIAL_CARDS = 2;

const CARD_WIDTH = 9;
const CARD_PAD = 1;
const BORDER_WIDTH = 2;

const FACE_VALUE = 10;
const ACE_VALUE_MIN = 1;
const ACE_VALUE_MAX = 11;

const DEALER_STAY_VALUE = 17;
const WINNING_SCORE = 21;
const WINNING_GAMES = 5;


// #region Display
function prompt(message) {
  console.log(`==> ${message}`);
}

function displayGreeting() {
  console.clear();
  prompt(`Welcome to 21!`);
  prompt(`First to ${WINNING_GAMES} games wins.\n`);
  askPlayer(`Enter c to continue...`, ['c']);
}

function displayHeader(player, dealer) {
  console.clear();
  console.log(
    `╭──────────┬─────────────╮\n` +
    `│  ${player.name}  ${player.games}  │  ${dealer.games}  ${dealer.name}  │\n` +
    `╰──────────┴─────────────╯\n`
  );
}

function getCardDisplayString([suit, value]) {
  return [
    `╭${''.padStart(CARD_WIDTH - BORDER_WIDTH, '─')}╮`,
    `│${value.padEnd(CARD_WIDTH - BORDER_WIDTH)}│`,
    `│${suit.padEnd(CARD_WIDTH - BORDER_WIDTH)}│`,
    `│${''.padStart(CARD_WIDTH - BORDER_WIDTH)}│`,
    `│${suit.padStart(CARD_WIDTH - BORDER_WIDTH)}│`,
    `│${value.padStart(CARD_WIDTH - BORDER_WIDTH)}│`,
    `╰${''.padStart(CARD_WIDTH - BORDER_WIDTH, '─')}╯`
  ];
}

function displayHand(hand) {
  let cardHeight = getCardDisplayString(hand[FIRST_CARD]).length;

  let handStringArray = Array(cardHeight).fill('');

  hand.forEach(card => {
    let cardString = getCardDisplayString(card);
    cardString.forEach((line, index) => {
      handStringArray[index] += ''.padStart(CARD_PAD) + line;
    });
  });

  let handString = handStringArray.join('\n');

  console.log(handString + '\n');
}

function displayTableForPlayer(player, dealer) {
  displayHeader(player, dealer);

  console.log(`${dealer.name}:`);
  displayHand([dealer.hand[FIRST_CARD], MYSTERY_CARD]);

  console.log(`${player.name}:${String(player.total).padStart((player.hand.length * (CARD_WIDTH + CARD_PAD)) - player.name.length)}`);
  displayHand(player.hand);
}

function displayTable(player, dealer) {
  const BUST_TEXT = ' - bust';
  displayHeader(player, dealer);

  let dealerBusted = busted(dealer.total) ? BUST_TEXT : '';
  let playerBusted = busted(player.total) ? BUST_TEXT : '';

  console.log(`${dealer.name}:${String(dealer.total).padStart((dealer.hand.length * (CARD_WIDTH + CARD_PAD)) - dealer.name.length)}${dealerBusted}`);
  displayHand(dealer.hand);

  console.log(`${player.name}:${String(player.total).padStart((player.hand.length * (CARD_WIDTH + CARD_PAD)) - player.name.length)}${playerBusted}`);
  displayHand(player.hand);
}

function displayGameResult(winner) {
  if (winner) {
    prompt(`${winner.name} won!\n`);
  } else {
    prompt(`It's a tie!`);
  }
}

function displayMatchResult(player, dealer) {
  let matchWinner = detectMatchWinner(player, dealer);
  let matchLoser = otherPlayer(matchWinner, player, dealer);

  displayHeader(player, dealer);
  displayTable(player, dealer);

  let mainText = `${matchWinner.name} won the match ${matchWinner.games} to ${matchLoser.games}!`;
  let displayText = (
    `╭─${'─'.repeat(mainText.length)}─╮\n` +
    `│ ${mainText} │\n` +
    `╰─${'─'.repeat(mainText.length)}─╯\n`
  );
  console.log(displayText);
}
// #endregion

// #region Data
function initializeGamePlayer(playerName) {
  return {
    name: playerName,
    hand: [],
    total: 0,
    won: false,
    games: 0
  };
}

function initializeDeck() {
  const SUIT_LIST = ['♦', '♣', '♥', '♠'];
  const VALUE_LIST = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q',
    'K', 'A'];

  let deck = [];
  SUIT_LIST.forEach(suit => {
    VALUE_LIST.forEach(value => {
      deck.push([suit, value]);
    });
  });

  shuffleDeck(deck);

  return deck;
}

function shuffleDeck(deck) {
  for (let index = deck.length - 1; index > 0; index -= 1) {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
  }
}

function resetHands(player, dealer) {
  player.hand = [];
  dealer.hand = [];
}

function resetGameWinner(player, dealer) {
  player.won = false;
  dealer.won = false;
}

function getCardValue(value) {
  switch (value) {
    case 'J':
    case 'Q':
    case 'K': return FACE_VALUE;
    case 'A': return ACE_VALUE_MAX;
    default:
      return Number(value);
  }
}

function getTotal(hand) {
  let totalWithoutAces = hand.filter(([_, value]) => value !== 'A')
    .reduce((acc, [_, value]) => {
      return acc + getCardValue(value);
    }, 0);

  let totalAces = hand.filter(([_, value]) => value === 'A')
    .reduce(acc => {
      let totalMax = totalWithoutAces + acc + ACE_VALUE_MAX;
      return acc + (totalMax <= WINNING_SCORE ? ACE_VALUE_MAX : ACE_VALUE_MIN);
    }, 0);

  return totalWithoutAces + totalAces;
}

function busted(total) {
  return total > WINNING_SCORE;
}

function setGameWinner(player, dealer) {
  if (player.total > dealer.total) {
    player.won = true;
  } else if (dealer.total > player.total) {
    dealer.won = true;
  }
}

function updateScore(winner) {
  if (winner) winner.games += 1;
}

function detectGameWinner(player, dealer) {
  if (player.won) {
    return player;
  } else if (dealer.won) {
    return dealer;
  }

  return null;
}

function detectMatchWinner(player, dealer) {
  if (player.games === WINNING_GAMES) {
    return player;
  } else if (dealer.games === WINNING_GAMES) {
    return dealer;
  }

  return null;
}
// #endregion

// #region Gameplay
function dealCard(deck, recipient) {
  let card = deck.pop();
  recipient.hand.push(card);

  return card;
}

function dealHands(deck, player, dealer) {
  for (let cardNumber = 1; cardNumber <= INITIAL_CARDS; cardNumber += 1) {
    dealCard(deck, player);
    dealCard(deck, dealer);
  }

  player.total = getTotal(player.hand);
  dealer.total = getTotal(dealer.hand);
}

function playerTurn(deck, player, dealer) {
  displayTableForPlayer(player, dealer);

  while (!busted(player.total) &&
    askPlayerBool(`Hit or stay?`, ['hit', 'h'], ['stay', 's'])) {
    dealCard(deck, player);
    player.total = getTotal(player.hand);
    displayTableForPlayer(player, dealer);
  }
}

function dealerTurn(deck, dealer) {
  while (dealer.total < DEALER_STAY_VALUE) {
    dealCard(deck, dealer);
    dealer.total = getTotal(dealer.hand);
  }
}

function playGame(player, dealer) {
  let deck = initializeDeck();
  resetGameWinner(player, dealer);
  resetHands(player, dealer);
  dealHands(deck, player, dealer);

  displayTableForPlayer(player, dealer);
  playerTurn(deck, player, dealer);

  if (busted(player.total)) dealer.won = true;

  if (!dealer.won) {
    dealerTurn(deck, dealer);

    if (busted(dealer.total)) player.won = true;
  }

  if (!detectGameWinner(dealer, player)) setGameWinner(player, dealer);

  updateScore(detectGameWinner(player, dealer));
}

function playMatch(player, dealer) {
  do {
    playGame(player, dealer);
    displayTable(player, dealer);
    displayGameResult(detectGameWinner(player, dealer));
    askPlayer(`Enter c to continue...`, ['c']);
  } while (!detectMatchWinner(player, dealer));
}
// #endregion

// #region General
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
  let errorMessage;
  let optionsRegex = trueOptions.concat(falseOptions).join('|');
  let regex = new RegExp('^(' + optionsRegex + ')$', 'i');

  do {
    prompt(errorMessage || askPrompt);
    answer = readLine.question().trim().toLowerCase();
    errorMessage = `Invalid entry. Please enter ${joinOr(trueOptions.concat(falseOptions))}...`;
  } while (!answer.match(regex));

  return trueOptions.includes(answer);
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

function otherPlayer(initialPlayer, player, dealer) {
  return (initialPlayer === player ? dealer : player);
}
// #endregion

// #region Main
displayGreeting();

do {
  let player = initializeGamePlayer('You');
  let dealer = initializeGamePlayer('Dealer');

  playMatch(player, dealer);
  displayMatchResult(player, dealer);

} while (askPlayerBool(`Play again? Enter y or n...`, ['y', 'yes'], ['n', 'no']));

prompt(`Thanks for playing 21!\n`);
// #endregion