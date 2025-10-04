import { createBinaryTree } from "./createBinaryTree.js";
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const inputRoot = createBinaryTree(inputArray);

// Left  -> Root -> Right
function inOrderTraversal(root) {
  if (!root) return [];
  let results = [];

  let stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();
    results.push(current.value);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return results;
}

console.log(inputRoot, "\n\n", inOrderTraversal(inputRoot));

export { inOrderTraversal };
