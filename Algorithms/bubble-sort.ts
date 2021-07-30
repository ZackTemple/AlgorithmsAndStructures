// add noSwaps for nearly sorted arrays
export function bubbleSort(array: number[]): number[] {
  let noSwaps: boolean;

  for (let outer = array.length; outer >= 1; outer--) {
    noSwaps = true;
    for (let inner = 0; inner <= outer - 1; inner++) {
      if (array[inner] > array[inner + 1]) {
        const temp = array[inner];
        array[inner] = array[inner + 1];
        array[inner + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return array;
}


