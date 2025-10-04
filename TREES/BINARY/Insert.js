class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.value = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.value) {
      this.value = newNode;
    }
  }
  insertNode(node, newNode) {
    if (newnode.value < node.value) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
}

const bst = new BST();

bst.insert(20);
bst.insert(30);
bst.insert(400);
bst.insert(300);
bst.insert(234);
