let featured = num => {
  const MAX_NUM = 9876543201;

  num = (Math.floor(num / 7) * 7) + 7;
  if (num % 2 === 0) num += 7;

  while (num <= MAX_NUM) {
    if (!String(num).match(/.*(\d).*\1.*/)) return num;
    num += 14;
  }

  return 'There is no possible number that fulfills those requirements.';
};

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."