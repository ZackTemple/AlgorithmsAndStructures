export function insertionSort(array: number[]): void {
  for (let outer = 1; outer <= array.length - 1; outer++) {
    let temp = array[outer];
    let inner = outer;

    while (inner > 0 && array[inner - 1] >= temp) {
      array[inner] = array[inner - 1];
      inner -= 1;
    }
    array[inner] = temp;
  }
}
