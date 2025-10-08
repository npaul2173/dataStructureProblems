/**
 * 🧠 Concept

Insertion Sort works just like how you arrange playing cards in your hand:
You take one card at a time and insert it into its correct position among the already sorted cards.

Steps:
Start from the second element (index 1), because a single element is trivially sorted.
Compare it with the elements to its left.
Shift all elements greater than it one position to the right.
Insert the current element into its correct position.
Repeat until the entire array is sorted.

 */

function insertionSort(inputArr = []) {
  for (let currindex = 1; currindex < inputArr.length; currindex++) {
    let key = inputArr[currindex];

    // Condition checking
    if (inputArr[currindex] < inputArr[currindex - 1]) {
      let pointer = currindex - 1;
      while (pointer >= 0 && inputArr[pointer] > key) {
        inputArr[pointer + 1] = inputArr[pointer];
        pointer--;
      }
      inputArr[pointer + 1] = key;
    }
    console.log(inputArr);
  }
  return inputArr;
}

console.log(insertionSort([1, 8, 6, 3, 6]));
