// Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
// this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
// node never differ by more than one

import { NodeBST } from "./graph-exports";


function isBalanced(root: NodeBST): boolean {
  if (root === null) return null;

  function traverse(node): number {
    let leftHeight = node.left ? traverse(node.left) : 0;
    if (leftHeight === Infinity) return Infinity; // early return (if we already have imbalnce in left side, no need to traverse right side)

    let rightHeight = node.right ? traverse(node.right) : 0;
    if (rightHeight === Infinity) return Infinity; // early return

    let difference = Math.abs(leftHeight - rightHeight);
    let maxHeight = Math.max(leftHeight, rightHeight);

    return difference > 1 ? Infinity : maxHeight + 1;
  }

  return traverse(root) <= 1;
}
