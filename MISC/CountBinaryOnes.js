const func = (n) => {
  //your code here
  let counter = 0;
  let quotient = n;
  while (true) {
    // console.log("quotient-->", quotient)
    let rem = quotient % 2;
    if (rem === 1) counter++;
    console.log({ rem, counter, quotient });
    if (quotient === 0) break;
    else {
      quotient = Math.floor(quotient / 2);
      if (quotient === 1) {
        counter = counter + 1;
        break;
      } else if (quotient === 0) break;
      else continue;
    }
  }

  return counter;
};

console.log(func(6));
