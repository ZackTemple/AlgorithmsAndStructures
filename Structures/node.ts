export class Node {
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
