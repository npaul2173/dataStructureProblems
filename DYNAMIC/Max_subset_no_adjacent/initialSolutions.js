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

// This is the solution with Space complexity ->  O(N) and Time complexity 0(N)

function maxSubsetSumNoAdjacent(array) {
  const maxSum = [];
  // Write your code here.
  if (!array.length) return 0;
  else if (array.length === 1) return array[0];
  else {
    maxSum[0] = array[0];
    maxSum[1] = Math.max(array[0], array[1]);
    for (let index = 2; index < array.length; index++) {
      maxSum[index] = Math.max(
        maxSum[index - 1],
        maxSum[index - 2] + array[index]
      );
    }
  }
  return maxSum[array.length - 1];
}

console.log(
  "Your Answer is =",
  maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])
);
