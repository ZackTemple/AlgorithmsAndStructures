// Remove Dups: Write code to remove duplicates from an unsorted linked list.

import { NodeSLL, SLL } from "../SLL";

// Unsorted solution
function removeDups(list: SLL) {
  let frequencies = {};
  let current = list.head;
  let prev: NodeSLL = null;

  while(current !== null) {
    if (frequencies[current.value]) {
      prev.next = current.next;

      if (current === list.tail) {
        list.tail = prev;
      }

      list.size--;
    } else {
      frequencies[current.value] = true;
    }

    prev = current;
    current = current.next;
  }

  return SLL;
}
