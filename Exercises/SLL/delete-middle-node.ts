// Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
// the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
// that node.

import { NodeSLL } from "./SLL";

function deleteMiddle(node: NodeSLL): boolean {
  // can't delete if node is the head or tail, or if the node is null
  if (node === null || node.next === null) return false;

  let next = node.next;
  next.value = node.value;
  node.next = next.next;

  return true;
}
