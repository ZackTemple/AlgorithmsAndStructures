export class NodeSLL {
  value: number;
  next: NodeSLL = null;

  constructor(val) {
    this.value = val;
  }
}

export class SLL {
  head: NodeSLL;
  tail: NodeSLL;
  size = 0;

  push(val: number) {
    let newNode = new NodeSLL(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }
}
