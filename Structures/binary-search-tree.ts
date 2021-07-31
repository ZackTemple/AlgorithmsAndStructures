class Node {
  left: Node;
  right: Node;
  value: number;

  constructor(val: any) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: Node;

  public constructor() {
    this.root = null;
  }

  public insert(value: number, node = this.root): void {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else if (value === node.value) {
      return;
    } else if (value < node.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insert(value, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insert(value, node.right);
      }
    }
  }

  public find(value: number, node = this.root): Node {
    if (this.root === null) return undefined;

    if (value === node.value) return node;

    if (value < node.value) {
      if (node.left === null) {
        return undefined;
      } else {
          return this.find(value, node.left)
      }
    } else {
      if (node.right === null) {
        return undefined;
      } else {
        return this.find(value, node.right);
      }
    }
  }

  public BFS(): number[] {
    let data = [];
    let queue = [];
    let currentNode = this.root;
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      data.push(currentNode.value);
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }

    return data;
  }

  // ----- DFS with Pure Recursion -----
  public DFSPreOrder(node = this.root): number[] {
    let data = [];

    data.push(node.value);
    let left = node.left !== null ? this.DFSPreOrder(node.left) : [];
    let right = node.right !== null ? this.DFSPreOrder(node.right) : [];

    return data.concat(left.concat(right));
  }

  public DFSPostOrder(node = this.root): number[] {
    let data = [];

    let left = node.left !== null ? this.DFSPreOrder(node.left) : [];
    let right = node.right !== null ? this.DFSPreOrder(node.right) : [];
    data.push(node.value);

    return data.concat(left.concat(right));
  }

  public DFSInOrder(node = this.root): number[] {
    let data = [];

    let left = node.left !== null ? this.DFSPreOrder(node.left) : [];
    data.push(node.value);
    let right = node.right !== null ? this.DFSPreOrder(node.right) : [];

    return data.concat(left.concat(right));
  }

  // ----- DFS with Helper Method Recursion -----
  public DFSPreOrderV2(): number[] {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left !== null) traverse(node.left);
      if (node.right !== null) traverse(node.right);
    }

    traverse(current);
    return data;
  }

  public DFSPostOrderV2(): number[] {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left !== null) traverse(node.left);
      if (node.right !== null) traverse(node.right);
      data.push(node.value);
    }

    traverse(current);
    return data;
  }
  public DFSInOrderV2(): number[] {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left !== null) traverse(node.left);
      data.push(node.value);
      if (node.right !== null) traverse(node.right);
    }

    traverse(current);
    return data;
  }
}
