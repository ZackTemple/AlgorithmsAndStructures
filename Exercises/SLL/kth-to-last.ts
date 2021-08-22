// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

import { SLL } from "./SLL";

function kthToLast(list: SLL, k: number) {
  if (list.head === null) return null;

  let p1 = list.head;
  let p2 = list.head;

  // Put p2 (k minus length) away from p1 at the start
  for (let i = 0; i < k; i++) {
    if (p2 === null) return null;
    p2 = p2.next;
  }

  // When p2 equals null, p1 will be Length - k items away from the end
  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}
