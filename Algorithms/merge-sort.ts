export function mergeSort(array: number[]): any {
  let midpoint: number;
  let leftArray: number[];
  let rightArray: number[];
  let resultsArray = [];

  if (array.length <= 1) return array;

  midpoint = Math.floor(array.length / 2);
  leftArray = mergeSort(array.slice(0, midpoint));
  rightArray = mergeSort(array.slice(midpoint, array.length));

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] <= rightArray [0]) {
      resultsArray.push(leftArray.shift());
    }
    else {
      resultsArray.push(rightArray.shift());
    }
  }

  return resultsArray.concat(leftArray.concat(rightArray));
}
