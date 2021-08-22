// Write code to partition a linked list around a value x, such that all nodes less than x come
// before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
// to be after the elements less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.

import { NodeSLL, SLL } from "./SLL";

function partitionBy(list: SLL, val: number) {
  let lessThanHead: NodeSLL;
  let lessThanTail: NodeSLL;
  let greaterThanHead: NodeSLL;
  let greaterThanTail: NodeSLL;
  let current = list.head;
  let next;

  while (current !== null) {
    // must sever current node ties in order to not create an endless loop
    next = current.next;
    current.next = null;

    // add to new SLL depending on current's value
    current.value < val ?
      [lessThanHead, lessThanTail] = addNode(lessThanHead, lessThanTail, current) :
      [greaterThanHead, greaterThanTail] = addNode(greaterThanHead, greaterThanTail, current);

    current = next;
  }

  // merge the two new lists
  lessThanTail.next = greaterThanHead;

  return lessThanHead;
}

function addNode(start, end, node) {
  if (!start) {
    start = node;
    end = node;
  } else {
    end.next = node;
    end = node;
  }

  return [start, end]
}
