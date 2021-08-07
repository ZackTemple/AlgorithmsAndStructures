export class NodePQ {
  value: string;
  priority: number;

  constructor(val: string, p: number) {
    this.value = val;
    this.priority = p;
  }
}

export class PriorityQueue {
  public data: NodePQ[] = [];

  public leftChildIndex = (index: number) => 2 * index + 1;
  public leftChild = (index: number) => this.data[this.leftChildIndex(index)];
  public leftChildPriority = (index: number) => this.leftChild(index)?.priority;

  public rightChildIndex = (index: number) => 2 * index + 2;
  public rightChild = (index: number) => this.data[this.rightChildIndex(index)];
  public rightChildPriority = (index: number) => this.rightChild(index)?.priority;

  public enqueue(val: string, p: number): void {
    const node = new NodePQ(val, p);
    this.data.push(node);
    this.bubbleUp();
  }

  public dequeue(): NodePQ {
    const min = this.data[0];
    const end = this.data.pop();
    if(this.data.length > 0){
        this.data[0] = end;
        this.siftDown();
    }

    return min;
  }

  private bubbleUp(): void {
    let index = this.data.length - 1;
    let newNode = this.data[index]
    let parentIndex = Math.floor((index - 1) / 2);
    let parent = this.data[parentIndex];
    let temp;

    while (!!parent && newNode.priority < parent.priority) {
      temp = parent;
      this.data[parentIndex] = newNode;
      this.data[index] = temp;

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
      parent = this.data[parentIndex];
    }
  }

  private siftDown(): void {
    let index = 0;
    const nodeToSiftPriority = this.data[index].priority;

    // We have to check if right is undefined because the right child could not exist
    // We do not have to check if left is undefined, because if we have entered this loop, at least one of the children is defined (aka the left)
    while(nodeToSiftPriority > this.leftChildPriority(index) || nodeToSiftPriority > this.rightChildPriority(index)) {
      if (this.leftChildPriority(index) < this.rightChildPriority[index] || this.rightChild === undefined) {
        index = this.pqSwap(index, this.leftChild(index), this.leftChildIndex(index));
      } else {
        index = this.pqSwap(index, this.rightChild(index), this.rightChildIndex(index));
      }
    }
  }

  private pqSwap(index: number, childNode: NodePQ, childIndex: number): number {
    let temp = childNode;
    this.data[childIndex] = this.data[index];
    this.data[index] = temp;
    index = childIndex;

    return index
  }
}
