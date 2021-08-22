// Sum Lists: You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
// function that adds the two numbers and returns the sum as a linked list.

import { SLL } from "./SLL";

function sumLists(list1: SLL, list2: SLL) {
  let carry = 0;
  let current1 = list1.head;
  let current2 = list2.head;
  let newSLL = new SLL();

  while (current1 || current2) {
    let val1 = current1.value ?? 0;
    let val2 = current2.value ?? 0;

    let sum = val1 + val2 + carry;
    let newNodeValue = sum % 10;
    carry = Math.floor(sum / 10);

    newSLL.push(newNodeValue);

    current1 = current1.next ?? null;
    current2 = current2.next ?? null;
  }

  return newSLL;
}
