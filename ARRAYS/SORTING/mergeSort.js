/**
 * 
🧠 Concept

Merge Sort is a Divide and Conquer algorithm.
It works by:

1. Dividing the array into halves recursively until each subarray has one element.
2. Conquering (merging) the subarrays in a sorted manner.


 */

function mergeSort(inputArr = []) {
  // base check needs to be added
  const arrLength = inputArr.length;
  if (arrLength <= 1) return inputArr;

  const mid = Math.floor(inputArr.length / 2);
  const firstPart = mergeSort(inputArr.slice(0, mid));
  const secondPart = mergeSort(inputArr.slice(mid, inputArr.length));

  console.log({ firstPart, secondPart, mid });
  return merge(firstPart, secondPart);
}

function merge(firstArr = [], secondArr = []) {
  let mergedSubArray = [];
  let pointer1 = 0;
  let pointer2 = 0;

  // While method to arrange a new array that will merge the two while both the pointers keep on increasing;
  while (pointer1 < firstArr.length && pointer2 < secondArr.length) {
    if (firstArr[pointer1] > secondArr[pointer2]) {
      mergedSubArray.push(secondArr[pointer2]);
      pointer2++;
    }

    if (firstArr[pointer1] < secondArr[pointer2]) {
      mergedSubArray.push(firstArr[pointer1]);
      pointer1++;
    }
  }

  return mergedSubArray
    .concat(firstArr.slice(pointer1))
    .concat(secondArr.slice(pointer2));
}

console.log("Sorted array", mergeSort([6, 37, 2, 8, 1, 99]));

/**
 * 
 * Time Complexity

Dividing the array
Each time, the array is split into two halves.
This happens recursively log₂(n) times.

Merging
At each level of recursion, merging all subarrays takes O(n) time in total.

T(n)=O(nlogn)


 * 
 */
