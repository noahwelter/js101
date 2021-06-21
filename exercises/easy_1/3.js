for (let num = 2; num < 100; num += 2) {
  console.log(num);
}

// Alternate solution
for (let num = 1; num < 100; num += 1) {
  if (num % 2 === 1) continue;

  console.log(num);
}