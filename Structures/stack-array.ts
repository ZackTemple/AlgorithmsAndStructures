export class Stack<T> {
  public elements: Array<T> = [];
  public size: number = 0;

  public push(value: T): void {
    this.elements.push(value);
    this.size++
  }

  public pop(): T | null {
    const topValue = this.elements.pop();
    const validValue = typeof topValue !== 'undefined';
    if (validValue) this.size--;

    return validValue ? topValue : null;
  }

  public peek(): T | null {
    return this.size > 0 ? this.elements[this.size - 1] : null;
  }

  public clear(): void {
    this.elements = [];
    this.size = 0;
  }
}
