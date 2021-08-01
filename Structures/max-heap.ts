export class MaxBinaryHeap {
  data: number[] = [];

  public leftChildIndex = (index: number) => 2 * index + 1;
  public leftChild = (index: number) => this.data[this.leftChildIndex(index)];
  public rightChildIndex = (index: number) => 2 * index + 2;
  public rightChild = (index: number) => this.data[this.rightChildIndex(index)];

  public insert(value: number): void {
    this.data.push(value);
    this.bubbleUp();
  }

  public extractMax(): number {
    if ( this.data.length === 0) return undefined;
    const removedRoot = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.pop();

    this.siftDown();

    return removedRoot;
  }

  private bubbleUp(): void {
    let index = this.data.length - 1;
    let newValue = this.data[index];
    let parentIndex = Math.floor((index - 1) / 2);
    let parent = this.data[parentIndex];
    let temp: number;

    while (parent < newValue) {
      temp = parent;
      this.data[parentIndex] = newValue;
      this.data[index] = temp;

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
      parent = this.data[parentIndex];
    }
  }

  private siftDown(): void {
    let index = 0;

    while (index < this.leftChild(index) || index < this.rightChild(index)) {
      // We have to check if right is undefined because the right child could not exist
      // We do not have to check if left is undefined, because if we have entered this loop, at least one of the children is defined (aka the left)
      if (this.leftChild(index) > this.rightChild(index) || this.rightChild(index) === undefined) {
        index = this.siftDownSwap(index, this.leftChildIndex(index), this.leftChild(index));
      } else {
        index = this.siftDownSwap(index, this.rightChildIndex(index), this.rightChild(index));
      }
    }
  }

  private siftDownSwap(idx: number, childIdx: number, childVal: number): number {
    let temp = this.data[idx];
    this.data[idx] = childVal;
    this.data[childIdx] = temp;
    idx = childIdx;

    return idx
  }
}
