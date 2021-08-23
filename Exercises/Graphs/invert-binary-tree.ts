import { NodeBST } from "./Graph";

// Invert a binary search tree (recursion)
var invertTree1 = function(root: NodeBST) {
  if (!root) return root;

  function inverter(node) {
      if (!node) return;

      // swap
      let right = node.right;
      node.right = node.left;
      node.left = right;

      // recurse over children
      inverter(node.left);
      inverter(node.right);

      return node;
  }

  return inverter(root);
};

// Invert a binary search tree (BFS)
var invertTree2 = function(root: NodeBST) {
  if (!root) return root;

  let currentNode;
  let queue = [];
  queue.push(root);

  while (queue.length) {
    currentNode = queue.shift();

    if (currentNode !== null) {
      // swap
      let right = currentNode.right;
      currentNode.right = currentNode.left;
      currentNode.left = right;

      // enqueue children
      queue.push(currentNode.left);
      queue.push(currentNode.right);
    }
  }

  return root;
};
