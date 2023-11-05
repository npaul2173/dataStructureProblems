function commonCharacters(strings) {
  // Write your code here.
  let map = new Set();
  let ctr = 1;
  const strLength = strings.length;
  strings[0].split("").forEach((chr) => {
    for (let i = 1; i < strings.length; i++) {
      console.log(chr, strings[i]);

      if (strings[i].includes(chr)) ctr++;
    }
    console.log({ ctr, strLength });
    if (ctr === strLength) {
      map.add(chr);
    }
    ctr = 1;
    console.log("---------------------\n\n");
  });
  return Array.from(map);
}

console.log(commonCharacters(["abc", "bcd", "cbad"]));
