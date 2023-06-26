// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(node, sum = 0, arr = []) {
  // Write your code here.

  let currentSum = node.value + sum;
  if (!node.left && !node.right) {
    arr.push(currentSum);
  }
  if (node.left !== null) branchSums(node.left, currentSum, arr);
  if (node.right !== null) branchSums(node.right, currentSum, arr);

  return arr;
}
