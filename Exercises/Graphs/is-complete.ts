// Write an algorithm to determine if a tree is complete

import { NodeBST } from "./Graph";

function isCompleteBinaryTree(root: NodeBST) {
  if (root === null) return false;
  let queue = [];
  queue.push(root);
  let currentNode;
  let flag = false;

  while (queue.length > 0) {
    currentNode = queue.shift();

    if (currentNode.left) {
      if (flag) return false
      queue.push(currentNode.left);
    } else {
      flag = true;
    }

    if (currentNode.right) {
      if (flag) return false
      queue.push(currentNode.right);
    } else {
      flag = true;
    }
  }

  return true;
}
