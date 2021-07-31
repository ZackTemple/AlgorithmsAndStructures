export class Node {
  value: number;
  next: Node;
  previous: Node;

  constructor(val: number) {
    this.value = val;
    this.next = null;
    this.previous = null;
  }
}

export class DoublyLinkedList {
  head: Node;
  tail: Node;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val: number): DoublyLinkedList {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this.size++;
    return this;
  }

  pop(): Node {
    if (!this.head) return undefined;
    const oldTail = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.previous;
      this.tail.next = null;
      // must sever all ties to previous
      oldTail.previous = null;
    }

    this.size--;
    return oldTail;
  }

  shift(): Node {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if( this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }

    this.size--;
    return oldHead;
  }

  unshift(val: number): DoublyLinkedList {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }

    this.size++;
    return this;
  }

  getAt(index: number): Node {
    if( index < 0 || index >= this.size) return undefined;

    const midPoint = Math.floor(this.size / 2);
    let current;
    let count;

    if (index <= midPoint) {
      current = this.head;
      count = 0;

      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.size - 1;

      while (count !== index) {
        current = current.previous;
        count--;
      }
    }

    return current;
  }

  setAt(index: number, val: number): boolean {
    const nodeToUpdate = this.getAt(index);

    if (nodeToUpdate) {
      nodeToUpdate.value = val;
      return true;
    }

    return false;
  }

  insertAt(index: number, val: number): boolean {
    if( index < 0 || index >= this.size) return false;
    if (index === 0) !!this.unshift(val);
    if (index === this.size) !!this.push(val);

    const beforeNode = this.getAt(index - 1);
    const newNode = new Node(val);

    // store node at index in temp variable
    const afterNode = beforeNode.next;

    // tie together new node to insert and its previous node
    beforeNode.next = newNode;
    newNode.previous = beforeNode;

    // tie together new node at index to the old node at index
    newNode.next = afterNode;
    afterNode.previous = newNode;

    this.size++;

    return true;
  }

  removeAt(index: number): Node {
    if (index < 0 || index >= this.size) return undefined;
    if (index === 0) return this.shift();
    if (index === this.size -1) return this.pop();

    const nodeToRemove = this.getAt(index);

    nodeToRemove.previous.next = nodeToRemove.next;
    nodeToRemove.next.previous = nodeToRemove.previous;

    // sever all ties
    nodeToRemove.next = null;
    nodeToRemove.previous = null;

    this.size--;
    return nodeToRemove;
  }
}
