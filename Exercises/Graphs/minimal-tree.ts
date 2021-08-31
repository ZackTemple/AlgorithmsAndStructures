// Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an
// algorithm to create a binary search tree with minimal height.

import { NodeBST } from "./graph-exports";

function minimalTree(array: number[]): NodeBST {
  function createMinimalBST(start: number, end: number): NodeBST {
    if (start > end) return null;

    let midPoint = Math.floor((start + end) / 2);
    const newNode = new NodeBST(array[midPoint]);
    newNode.left = createMinimalBST(start, midPoint - 1);
    newNode.right = createMinimalBST(midPoint + 1, end);
  }

  return createMinimalBST(0, array.length - 1);
}
