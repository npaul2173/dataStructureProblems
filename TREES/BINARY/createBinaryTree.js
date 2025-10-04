class Node {
  constructor(value) {
    this.root = value;
    this.left = null;
    this.right = null;
  }
}

function createBinaryTree(inputArr) {
  let root = new Node(inputArr[0]);
  let queue = [root];
  let pointer = 1;

  while ((queue.length > 0) & (pointer < inputArr.length)) {
    let current = queue.shift();

    // First we do for Left
    if (pointer < inputArr.length && inputArr[pointer] !== null) {
      current.left = new Node(inputArr[pointer]);
      queue.push(current.left);
    }
    pointer++;

    // Then we do for Right
    if (pointer < inputArr.length && inputArr[pointer] !== null) {
      current.right = new Node(inputArr[pointer]);
      queue.push(current.right);
    }
    pointer++;
  }
  return root;
}

module.exports = { createBinaryTree };
