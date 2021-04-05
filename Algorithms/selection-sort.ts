export function selectionSort(array: number[]): void {
  for(let outer = 0; outer <= array.length - 1; outer ++) {
    let min = outer;

    for(let inner = outer + 1; inner <= array.length - 1; inner ++) {
      min = array[min] > array[inner] ? inner : min;
    }

    const temp = array[outer];
    array[outer] = array[min];
    array[min] = temp;
  }
}
