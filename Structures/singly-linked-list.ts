class Node {
  next: Node;
  value: number;

  constructor(val: number, next = null) {
    this.value = val;
    this.next = next;
  }

  updateValue(val: number): void {
    this.value = val;
  }
}

export class SinglyLinkedList {
  head: Node = null;
  tail: Node = null;
  size = 0;

  push(val): void {
    let node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  pop(): Node {
    if (this.head === null) {
      return undefined
    }

    const nodeToReturn = this.tail;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head;
      let prev = null;

      while (curr.next !== null) {
        prev = curr;
        curr = curr.next;
      }

      prev.next = null;
      this.tail = prev;
    }

    this.size--;
    return nodeToReturn;
  }

  unshift(val): void {
    let node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  shift(): Node {
    let val = this.head;
    if (this.head === null) {
      return undefined;
    }

    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      this.head = this.head.next;
      this.size--;
    }

    return val;
  }

  reverseArray(): void {
    let curr = this.head;
    let prev = null;
    let next = null;

    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.tail = this.head;
    this.head = prev;
  }

  insertAt(index: number, value: number): boolean {
    if (index < 0 || index > this.size) return false;

    let newNode = new Node(value);
    let current = this.head;
    let previous: Node;

    for (let i = 1; i <= index; i++) {
      previous = current;
      current = current.next;
    }

    previous.next = newNode;
    newNode.next = current;
    if(newNode.next === null) this.tail = newNode;
    this.size++;

    return true;
  }

  insertAtWithOtherMethods(index: number, value: number): void {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.unshift(value);
    if (index === this.size + 1) return this.push(value);

    let newNode = new Node(value);
    let prev = this.getAt(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.size++;
  }

  getAt(index: number): Node {
    if(index < 0 || index >= this.size) return undefined;
    if(this.head === null) return undefined;
    let current = this.head;

    for(let i = 1; i <= index; i++) {
      current = current.next
    }

    return current;
  }

  setAt(index: number, value: number): boolean {
    const nodeToUpdate = this.getAt(index);

    if (nodeToUpdate) nodeToUpdate.value = value

    return Boolean(nodeToUpdate);
  }

  removeAt(index: number): boolean {
    if (index < 0 || index >= this.size) return false;
    if (index === 0) return !!this.shift();
    if (index === this.size - 1) this.pop();

    let previous = this.getAt(index - 1);
    let removed = previous.next;
    previous.next = removed.next;;
    this.size--;

    return true;
  }
}
