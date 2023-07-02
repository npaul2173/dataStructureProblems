function isDivisible(s) {
  //code here
  let num = 1;
  let power = 0;
  for (i = s.length - 1; i > 0; i--) {
    num = Math.pow(2, power) * parseInt(i) + num;
    power++;
  }
  console.log({ num });
  return num % 3 === 0;
}
console.log(isDivisible(1001));

var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const map = {};

  for (i = 0; i < words.length; i++) {
    map[pattern.charAt(i)] = words[i];
  }

  const newString = pattern.split("").reduce((acc, curr) => {
    return [...acc, map[curr]];
  }, []);
  console.log(map);
  console.log({ newString });
  return newString.join(" ") === s;
};
