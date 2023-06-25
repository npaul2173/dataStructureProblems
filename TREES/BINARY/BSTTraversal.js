function inOrderTraverse(tree, array) {
  // Write your code here.
  let arr = [];
  console.log(tree);
  function traverse(node) {
    if (node.left !== null) traverse(node.left);
    arr = [...arr, node.value];
    if (node.right !== null) traverse(node.right);
  }

  traverse(tree);
  return arr;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
  let arr = [];
  function traverse(node) {
    arr = [...arr, node.value];
    if (node.left !== null) traverse(node.left);
    if (node.right !== null) traverse(node.right);
  }

  traverse(tree);
  return arr;
}

function postOrderTraverse(tree, array) {
  // Write your code here.
  let arr = [];
  function traverse(node) {
    if (node.left !== null) traverse(node.left);
    if (node.right !== null) traverse(node.right);
    arr = [...arr, node.value];
  }

  traverse(tree);
  return arr;
}
