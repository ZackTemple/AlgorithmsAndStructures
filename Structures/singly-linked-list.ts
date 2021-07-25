import { Node } from './node';

export class SinglyLinkedList {
  head: Node = null;
  foot: Node = null;
  size = 0;

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

    this.size++;
  }

  pop(): void {
    if (this.head === null) {
      // do nothing
    }
    else if (this.head.next === null) {
      this.head = null;
      this.foot = null;
      this.size--;
    }
    else {
      let curr = this.head;
      let prev = null;

      while (curr.next !== null) {
        prev = curr;
        curr = curr.next;
      }

      prev.next = null;
      this.foot = prev;
      this.size--;
    }
  }

  unshift(val): void {
    let node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.foot = node;
    }
    else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  shift() {
    let val = this.head;
    if (this.head === null) {
      // do nothing
    }
    else if (this.head.next === null) {
      this.head = null;
      this.foot = null;
      this.size--;
    }
    else {
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

    this.foot = this.head;
    this.head = prev;
  }

  insertAt(val: number, index: number): void {
    if (index < 0 || index > this.size) {
      return;
    }

    let node = new Node(val);
    let current = this.head;
    let previous: Node;
    let counter = 0;

    if (index === 0) {
      node.next = current;
      this.head = node;
      this.size++;
      return;
    }

    while (counter < index) {
      previous = current;
      current = current.next;
      counter ++;
    }

    node.next = current;
    previous.next = node;
    if (!node.next) this.foot = node;
    this.size++;
  }
}
