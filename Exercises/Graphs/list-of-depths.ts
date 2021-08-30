// List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

import { NodeBST } from "./graph-exports";

// Structure: [[0], [1, 2], [3,4,5,6],...]
function listOfDepths(root: NodeBST) {
  if (root === null) return null;

  let depths = [];
  let queue = [root];
  let parents: NodeBST[];

  while (queue.length > 0) {
    // add last round to depths
    depths.push(queue);
    // grab parents from last round and reset queue
    parents = queue;
    queue = []

    // loop over children to add to queue
    parents.forEach(parentNode => {
      if (parentNode.left) queue.push(parentNode.left);
      if (parentNode.right) queue.push(parentNode.right);
    });
  }

  return depths;
}
