// Invert a binary search tree (recursion)
var invertTree = function(root) {
  if (!root) return root;

  function inverter(node) {
      if (!node) return;

      let right = node.right;
      node.right = node.left;
      node.left = right;

      inverter(node.left);
      inverter(node.right);

      return node;
  }

  return inverter(root);
};

// Invert a binary search tree (BFS)
var invertTree = function(root) {
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

// Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes

class GraphNode {
  value: string;
  neighbors: Node[];

  constructor(val: string) {
    this.value = val;
  }
}

class Graph {
  public adjacencyList = {};

  // lets assume it's not a wide graph, so use DFS
  routeBetweenNodes(node1: string, node2: string) {
    if (node1 === node2) return true;

    let currentNode;
    let stack = [node1];
    let visited = {};
    visited[node1] = true;

    while(stack.length > 0) {
      currentNode = stack.pop();

      if (currentNode === node2) {
        return true;
      }

      if (currentNode) {
        this.adjacencyList[currentNode].neighbors.forEach(neighbor => {
          if (!visited[neighbor.value]) {
            visited[neighbor.value] = true;
            stack.push(neighbor.value);
          }
        })
      }
    }
  }
}

