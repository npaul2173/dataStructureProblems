import { createBinaryTree } from "./createBinaryTree.js";

const inputArray = [1, 2, 3, 4, 5, 6, 7];
const inputRoot = createBinaryTree(inputArray);

function postorderTraversal(root) {
  if (!root) return [];
  let stack1 = [root];
  let stack2 = [];
  let results = [];

  while (stack1.length > 0) {
    let node = stack1.pop();
    stack2.push(node);

    if (node.left) stack1.push(node.left);
    if (node.right) stack1.push(node.right);
  }

  while (stack2.length > 0) {
    results.push(stack2.pop().value);
  }

  return results;
}

console.log(postorderTraversal(inputRoot));
