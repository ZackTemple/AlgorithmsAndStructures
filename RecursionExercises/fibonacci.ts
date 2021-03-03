export function fibonacci(num: number): number[] {
  let array;

  if (num === 0) return [];
  if (num === 1) return [1];
  if (num === 2) return [1, 1];

  array = fibonacci(num - 1);
  let firstVal = array[array.length - 1];
  let secondVal = array[array.length - 2];

  return array.concat(firstVal + secondVal);
}
