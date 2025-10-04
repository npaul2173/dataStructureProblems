import { createBinaryTree } from "./createBinaryTree.js";
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const inputRoot = createBinaryTree(inputArray);

// Left  -> Root -> Right
function inOrderTraversal(root) {
  if (!root) return [];
  let results = [];

  function recursive(node) {
    if (!node) return;
    recursive(node.left);
    results.push(node.value);
    recursive(node.right);
  }

  recursive(root);
  return results;
}

function inOrderQueue(root) {
  // Maintain a stack of addresses
  // Maintain a results array to generate the data ultimately
  //    node to hold workable node
  let stack = [];
  let results = [];
  let current = root;

  //   While to traverse all nodes from pushing and popping the stack[] of nodes
  while (stack.length > 0 || current !== null) {
    // Going left as long as the current does not become null;
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // extract from stack the last item to work with it.
    // Push that extracted value from stack to results array.
    // traverse the right side since the root has been dealt with already.
    current = stack.pop();
    results.push(current.value);
    current = current.right;
  }

  return results;
}

export { inOrderTraversal, inOrderQueue };
