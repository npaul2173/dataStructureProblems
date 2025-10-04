import { createBinaryTree } from "./createBinaryTree.js";
const inputArray = [1, 2, 3, 4, 5, 6];
const inputRoot = createBinaryTree(inputArray);

console.log(inputRoot);

function levelOrderTraversal(root) {
  // Handle null root
  if (!root) return [];
  // Create an array where the result will get created
  let results = [];
  // Create another array queue that will hold the upcoming nodes
  let queue = [root];

  // Manange a while loop
  while (queue.length) {
    // Get the node value
    let node = queue.shift();
    // Push the actual value of the root inside the results array
    results.push(node.root);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return results;
}

console.log(levelOrderTraversal(inputRoot));

export default { levelOrderTraversal };
