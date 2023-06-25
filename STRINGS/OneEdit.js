function oneEdit(stringOne, stringTwo) {
  // Write your code here.

  const len1 = stringOne.length;
  const len2 = stringTwo.length;
  if (Math.abs(len1 - len2) > 1) return false;

  let faults = 0;
  for (let i = 0; i < Math.min(len1, len2); i++) {
    if (stringOne[i] !== stringTwo[i]) faults++;
  }
  if (
    Math.abs(len1 - len2) === 1 &&
    faults > 0 &&
    stringOne[len1 - 1] === stringTwo[len2 - 1]
  )
    return true;
  if (Math.abs(len1 - len2) === 1 && faults > 0) return false;
  return faults <= 1;
}

console.log(oneEdit("hello", "helo"));
