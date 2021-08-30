// Sum Lists: You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
// function that adds the two numbers and returns the sum as a linked list.

import { NodeSLL, SLL } from "./SLL-exports";

function sumLists(list1: SLL, list2: SLL) {
  let dummyHead = new NodeSLL(0);
  let currentNode = dummyHead;
  let carry = 0;
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 !== null || current2 !== null) {
    let x = current1 !== null ? current1.value : 0;
    let y = current2 !== null ? current2.value : 0;
    let sum = x + y + carry;

    carry = Math.floor(sum / 10);
    let newNode = new NodeSLL(sum % 10);
    currentNode.next = newNode;
    currentNode = newNode;

    if (current1 !== null) current1 = current1.next;
    if (current2 !== null) current2 = current2.next;
  }

  if (carry > 0) currentNode.next = new NodeSLL(carry);

  return dummyHead.next;
}
