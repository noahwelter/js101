let lightsOn = switches => {
  let switchArr = Array(switches).fill(false);
  let onArr = [];

  for (let step = 1; step <= switches; step += 1) {
    for (let index = (step - 1); index < switches; index += step) {
      switchArr[index] = !switchArr[index];
    }
  }

  switchArr.forEach((light, index) => {
    if (light) onArr.push(index + 1);
  });

  return onArr;
};

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]