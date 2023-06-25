// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let curr = linkedList;
  while (curr.next) {
    if (curr.value === curr.next.value) curr.next = curr.next.next;
    else curr = curr.next;
  }
  return linkedList;
}
