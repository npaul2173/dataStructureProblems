class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  getNodeValue() {
    return this.data;
  }
}

// 👍   Write a function to find the middle node of a single linked list.
// 👍   Write a function to reverse a single linked list.
// 👍   Write a function to remove duplicates from a single linked list.
// ❌   Write a function to check if a single linked list contains a cycle.
// Write a function to merge two sorted single linked lists into a single sorted list.
// Write a function to delete a node with a specific value from a single linked list.
// Write a function to check if two single linked lists intersect at any point.
// Write a function to find the kth node from the end of a single linked list.
// Write a function to split a single linked list into two halves.
// Write a function to check if a single linked list is a palindrome.
// Write a function to insert a node at a specific position in a single linked list.
// Write a function to swap nodes in pairs in a single linked list.
// Write a function to remove the nth node from the end of a single linked list.
// Write a function to find the intersection point of two single linked lists.
// Write a function to check if a single linked list is circular or not.

//  Linked List code
class LinkedList {
  constructor() {
    this.value = null;
  }

  addNode(value) {
    const node = new Node(value);
    if (this.value) {
      const lastNode = this.getLastNode();
      lastNode.next = node;
      console.log(
        `🔸  New Node with value ${value} added to node with value-->`,
        lastNode.data
      );
    } else {
      this.value = node;
      console.log("🚀 Root Created --> ", this.value);
    }
  }

  getLastNode() {
    let lastNode = this.value;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  getMiddleNode() {
    let slowNode = this.value;
    let fastNode = this.value;
    while (fastNode !== null && fastNode.next !== null) {
      slowNode = slowNode.next;
      fastNode = fastNode.next.next;
    }
    return slowNode;
  }

  reverseList() {
    let previous = null;
    let current = this.value;

    while (current !== null) {
      let nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
    console.log("👍 Linked List has been reversed");
  }

  removeDuplicates() {
    const track = new Set();

    let curr = this.value;
    let prev = null;
    while (curr) {
      //   console.log(curr);
      if (track.has(curr.data)) {
        prev.next = curr.next;
      } else {
        track.add(curr.data);
      }
      prev = curr;
      curr = curr.next;
    }
    console.log("👍 Duplicates removed");
  }

  traverse() {
    let curr = this.value;
    while (curr) {
      console.log("Node 👉 ", curr.data);
      curr = curr.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.addNode(10);
linkedList.addNode(20);
linkedList.addNode(30);
linkedList.addNode(40);
linkedList.addNode(10);
linkedList.addNode(50);
// console.log("👉 ", linkedList.getLastNode());
// linkedList.reverseList();
// console.log("👉 ", linkedList.getLastNode());
// linkedList.traverse();
// linkedList.removeDuplicates();
// linkedList.traverse();
// console.log(linkedList.getMiddleNode());
