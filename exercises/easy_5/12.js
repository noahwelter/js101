const HR_PER_DAY = 24;
const MIN_PER_HR = 60;
const MIN_PER_DY = HR_PER_DAY * MIN_PER_HR;

function afterMidnight(time) {
  let [hours, minutes] = splitTime(time);

  return (hours % HR_PER_DAY * MIN_PER_HR) + minutes;
}

function beforeMidnight(time) {
  let [hours, minutes] = splitTime(time);
  hours = hours || 24;

  return MIN_PER_DY - (hours * MIN_PER_HR) - minutes;
}

function splitTime(time) {
  return time.split(':').map(Number);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);