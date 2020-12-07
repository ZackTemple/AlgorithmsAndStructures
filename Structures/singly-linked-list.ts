export class SinglyLinkedList {
  head: Node = null;
  foot: Node = null;

  push(val): void {
    let node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.foot = node;
    }
    else {
      this.foot.next = node;
      this.foot = node;
    }
  }

  pop(): void {
    if (this.head === null) {
      // do nothing
    }
    else if (this.head.next === null) {
      this.head = null;
      this.foot = null;
    }
    else {
      let temp = this.head;
      let prev = null;

      while (temp.next !== null) {
        prev = temp;
        temp = temp.next;
      }

      prev.next = null;
      this.foot = prev;
    }
  }

  unshift(val) {
    let node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.foot = node;
    }
    else {
      node.next = this.head;
      this.head = node;
    }
  }

  shift() {
    if (this.head === null) {
      // do nothing
    }
    else if (this.head.next === null) {
      this.head = null;
      this.foot = null;
    }
    else {
      this.head = this.head.next;
    }
  }
}

class Node {
  next: Node;
  value: number;

  constructor(val: number) {
    this.value = val;
  }

  updateValue(val: number): void {
    this.value = val;
  }
}
