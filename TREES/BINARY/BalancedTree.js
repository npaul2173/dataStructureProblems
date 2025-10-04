const { createBinaryTree } = require("./createBinaryTree");
let inputArray = [1, 2, 3, 4, 5, 6, 7];
// let inputArray = [1, 2, 3, null, 5, null, 4];

const binaryTree = createBinaryTree(inputArray);

function checkbalanced(tree) {
  function check(node) {
    // Base case: When the root does not have any children - It returns 0 if the node has no children
    if (!node) return 0;

    // Recursive case: When the left has got unbalanced tree
    let left = check(node.left);
    if (left === -1) return -1;

    // Recursive case: When the right has got unbalanced tree
    let right = check(node.right);
    if (right === -1) return -1;

    // If both side height is unbalanced
    if (Math.abs(left - right) > 1) return -1;

    return Math.max(left, right) + 1;
  }

  const result = check(tree);
  console.log("result ", result);

  return result !== -1;
}

console.log(binaryTree);
console.log("The tree is balanced", checkbalanced(binaryTree));
