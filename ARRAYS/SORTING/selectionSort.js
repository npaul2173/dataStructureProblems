/**
 * 
 
🧠 Concept:
Selection Sort is a simple comparison-based sorting algorithm.
It works by repeatedly selecting the smallest (or largest) element from the unsorted portion and putting it in its correct position in the sorted portion.

⚙️ How It Works (Ascending order):
Start with the first element — assume it's the smallest.
Compare it with every other element to find the actual smallest.
Swap the smallest element found with the first element.
Move to the next index and repeat for the remaining array.
Continue until the entire array is sorted.


 */

function selectionSort(inputArr = []) {
  for (let currIndex = 0; currIndex < inputArr.length - 1; currIndex++) {
    let minIndex = currIndex; // Track the index of the smallest element

    for (let loop = currIndex + 1; loop < inputArr.length; loop++) {
      if (inputArr[minIndex] > inputArr[loop]) {
        minIndex = loop; // found smaller element
        console.log("New smallest found at index:", minIndex);
      }
      console.log(inputArr);
    }

    if (minIndex !== currIndex) {
      [inputArr[currIndex], inputArr[minIndex]] = [
        inputArr[minIndex],
        inputArr[currIndex],
      ];
      console.log("Swapped:", inputArr);
    }
  }

  return inputArr;
}

console.log("Sorted array", selectionSort([2, 3, 4, 5, 1, 9, 0]));

// Always remember its the position that matters, keep track for the position.
