let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

let transactionsFor = (id, list) => {
  return list.filter(obj => obj['id'] === id);
};

let isItemAvailable = (id, list) => {
  let item = transactionsFor(id, list);

  let quantity = item.reduce((acc, transaction) => {
    if (transaction.movement === 'in') {
      return acc + transaction.quantity;
    } else {
      return acc - transaction.quantity;
    }
  }, 0);

  return quantity > 0;
};

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true