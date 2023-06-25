function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let mid = -1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1; // Target value not found
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
