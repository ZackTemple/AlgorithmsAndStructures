export function quickSort(array): number[] {
  if (array.length <= 1) return array;
  let result = [];
  let value = array[0];

  let lowerThan = [];
  let greaterThan = [];

  for (let i = 1; i < array.length; i++) {
    if (value > array[i]) {
      lowerThan.push(array[i]);
    }
    else {
      greaterThan.push(array[i]);
    }
  }

  return quickSort(lowerThan).concat([value].concat(quickSort(greaterThan)));
}

console.log(quickSort([4,2,8,4,6,1]));
