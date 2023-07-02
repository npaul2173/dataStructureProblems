class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  let borrow = 0;
  let head = new LinkedList();
  while (linkedListOne.next || linkedListTwo.next) {
    console.log(linkedListOne.value, linkedListTwo.value);

    let sum =
      borrow +
      (linkedListOne ? linkedListOne.value : 0) +
      (linkedListTwo ? linkedListTwo.value : 0);

    let rem = sum > 9 ? sum % 10 : 0;
    head.value = rem ? rem : sum;
    borrow = rem ? 1 : 0;
    // console.log("linkedListOne.value -- ",linkedListOne.value,{ rem, sum, borrow})

    if (linkedListOne.next) {
      linkedListOne = linkedListOne.next;
    }

    if (linkedListTwo.next) {
      linkedListTwo = linkedListTwo.next;
    }
  }

  console.log(head);
  return head;
}
