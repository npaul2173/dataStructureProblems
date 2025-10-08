/**

🧠 Concept
Quick Sort is a Divide and Conquer sorting algorithm. It works by:
Choosing a pivot element from the array (can be first, last, random, or median).
Partitioning the array into two parts:
Elements less than pivot go to the left.
Elements greater than pivot go to the right.
Recursively applying Quick Sort to the left and right subarrays.
Combine the results (no actual merging needed because partitioning places elements in the correct position).

🔹 Steps (Example)
Suppose we have an array: [8, 4, 7, 3, 9, 2]
Choose pivot → let’s pick 8.
Partition → [4, 7, 3, 2] | 8 | [9]
Recursively sort left [4, 7, 3, 2] → pivot = 4
Partition → [3, 2] | 4 | [7]
Sort [3, 2] → pivot = 3
Partition → [2] | 3 | []
Combine → [2, 3, 4, 7, 8, 9]

 */

[1, 2, 3];

function quickSort(inputArr = []) {
  if (inputArr.length <= 1) return inputArr;

  let partition1 = [];
  let partition2 = [];
  let pivot = inputArr[0];

  for (let loop = 1; loop < inputArr.length; loop++) {
    if (inputArr[loop] > pivot) {
      partition2.push(inputArr[loop]);
    } else {
      partition1.push(inputArr[loop]);
    }
  }

  //   let newArr = newArr1.concat(pivot).concat(newArr2);
  return [...quickSort(partition1), pivot, ...quickSort(partition2)];
}

console.log("Sorted array", quickSort([6, 37, 2, 8, 1, 99]));

/**
 *
 *  T(n)=T(n−1)+O(n) // Time taken to sort the array
 *  So that’s why the worst case of Quick Sort is O(n²).
 */
