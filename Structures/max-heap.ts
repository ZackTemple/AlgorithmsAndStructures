export class MaxBinaryHeap {
  data: number[] = [];

  public insert(value: number): void {
    this.data.push(value);
    this.bubbleUp();
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
}
