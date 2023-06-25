// THREE NUMBER SUM - MEDIUM

function threeNumberSum(array, targetSum) {
  // Write your code here.
  const sortedArray = array.sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < array.length - 2; i++) {
    let curr = sortedArray[i];
    let start = i + 1;
    let end = sortedArray.length - 1;
    while (start < end) {
      let calc = sortedArray[start] + sortedArray[end] + curr;
      if (calc === targetSum) {
        arr.push([curr, sortedArray[start], sortedArray[end]]);
        start++;
        end--;
      } else {
        if (calc > targetSum) end--;
        else start++;
      }
    }
  }
  return arr;
}
