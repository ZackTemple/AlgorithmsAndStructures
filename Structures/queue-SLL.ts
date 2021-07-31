class Node<T> {
  value: T;
  next: Node<T>;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

export class Queue<T> {
  first: Node<T>
  last: Node<T>;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  public enqueue(val: T): number {
    const newNode = new Node<T>(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  public dequeue(): T {
    if (!this.first) return undefined;
    const dequeued = this.first;

    if (this.size === 1) this.last = null;
    this.first = this.first.next;
    this.size--;

    return dequeued.value;
  }
}
