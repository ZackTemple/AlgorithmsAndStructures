export function bubbleSort(array: number[]): void {
  for (let outer = array.length; outer >= 1; outer--) {
    for (let inner = 0; inner <= outer - 1; inner++) {
      if (array[inner] > array[inner + 1]) {
        const temp = array[inner];
        array[inner] = array[inner + 1];
        array[inner + 1] = temp;
      }
    }
  }
}


