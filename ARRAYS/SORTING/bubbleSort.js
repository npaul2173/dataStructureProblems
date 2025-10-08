function bubbleSort(arr = []) {
  for (let outer = 0; outer < arr.length - 1; outer++) {
    for (let inner = 0; inner < arr.length; inner++) {
      if (arr[inner] > arr[inner + 1]) {
        let temp = arr[inner];
        arr[inner] = arr[inner + 1];
        arr[inner + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([4, 6, 3, 2, 1]));
