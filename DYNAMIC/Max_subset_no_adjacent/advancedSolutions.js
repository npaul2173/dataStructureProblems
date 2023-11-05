/**
 *  Max Subset Sum No Adjacent
 *
 *  Write a function that takes in an array of positive integers and returns the
 *  maximum sum of non-adjacent elements in the array.
 *
 *  Input -  = [75, 105, 120, 75, 90, 135]
 *  Output - 330 // 75 + 120 + 135.
 *
 */

// This is the solution with Space complexity ->  O(1) and Time complexity 0(N)

function maxSubsetSumNoAdjacent(array) {
  let last = 0;
  let secondlast = 0;
  let current = 0;
  // Write your code here.
  if (!array.length) return 0;
  else if (array.length === 1) return array[0];
  else {
    secondlast = array[0];
    last = Math.max(array[0], array[1]);
    for (let index = 2; index < array.length; index++) {
      current = Math.max(last, secondlast + array[index]);
      secondlast = last;
      last = current;
    }
  }
  return last;
}

console.log(
  "Your Answer is =",
  maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])
);
