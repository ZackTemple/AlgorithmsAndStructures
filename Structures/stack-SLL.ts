class Node<T> {
  public value: T;
  public next: Node<T>;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

export class Stack<T> {
  public size: number = 0;
  public first: Node<T>;
  public last: Node<T>;

  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  public push(value: T): number {
    const newNode = new Node<T>(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  public pop(): T {
    if (!this.first) return undefined;
    const removed = this.first;

    if (this.size === 1) this.last = null;
    this.first = this.first.next;

    return removed.value;
  }
}
