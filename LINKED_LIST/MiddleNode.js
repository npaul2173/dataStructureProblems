// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function middleNode(linkedList) {
  // Write your code here.
  let curr = linkedList;
  let fast = linkedListMiddl;
  while (fast.next && fast.next.next) {
    curr = curr.next;
    fast = fast.next.next;
    console.log(curr.value, fast.value);
  }

  let middleNode = fast.next ? curr.next : curr;
  return middleNode;
}

// Do not edit the line below.
exports.middleNode = middleNode;
