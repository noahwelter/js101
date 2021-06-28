function timeOfDay(adjustedMinutes) {
  const HR_PER_DAY = 24;
  const MIN_PER_HR = 60;

  let hours = ((Math.floor(adjustedMinutes / MIN_PER_HR) % HR_PER_DAY)
    + HR_PER_DAY) % HR_PER_DAY;
  let minutes = ((adjustedMinutes % MIN_PER_HR) + MIN_PER_HR) % MIN_PER_HR;

  return `${addZero(hours)}:${addZero(minutes)}`;
}

function addZero(num) {
  return String(num).length === 1 ? '0' + num : String(num);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");