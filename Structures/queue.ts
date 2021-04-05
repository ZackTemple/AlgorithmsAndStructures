export class Queue<T> {
  elements: Array<T> = [];

  public enqueue(value: T): void {
    this.elements.push(value);
  }

  public dequeue(): T | null {
    const oldestValue = this.elements.shift();
    return typeof oldestValue === 'undefined' ? null : oldestValue;
  }

  public peek(): T {
    return this.elements[0];
  }

  public clear() {
    this.elements = [];
  }
}
