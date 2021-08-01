export class MaxBinaryHeap {
  data: number[] = [];

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
    let leftChildIndex = (ind) => 2 * ind + 1
    let leftChild = (ind) => this.data[leftChildIndex(ind)];
    let rightChildIndex = (ind) => 2 * ind + 2
    let rightChild = (ind) => this.data[rightChildIndex(ind)];

    while (index < leftChild(index) || index < rightChild(index)) {
      index = leftChild(index) > rightChild(index) ?
        this.siftDownSwap(index, leftChildIndex(index), leftChild(index)) :
        this.siftDownSwap(index, rightChildIndex(index), rightChild(index));
    }
  }

  private siftDownSwap(idx: number, childIdx: number, childVal: number): number {
    let temp;

    temp = this.data[idx];
    this.data[idx] = childVal;
    this.data[childIdx] = temp;
    idx = childIdx;

    return idx
  }
}
