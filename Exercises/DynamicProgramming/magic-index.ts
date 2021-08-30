// Magic Index: A magic index in an array A[1, ... , n-1] is defined to be an index such that A[ i]
// i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in
// array A.

function findMagicNumber(array: number[]): number {

  function search(left: number, right: number): number {
    if (left > right) return -1;

    let midpoint = Math.floor((left + right) / 2);
    if (array[midpoint] === midpoint) {
      return midpoint;
    } else if (midpoint > array[midpoint]) {
      // if we have distinct integers in array and midpoint is greater than array[midpoint], then array[midpoint - n]
      // must be less than (midpoint - n), so no need to search any items positioned less than midpoint
      return search(midpoint + 1, right);
    } else {
      // same logic as above, but vice versa
      return search(left, midpoint - 1);
    }
  }

  return search(0, array.length - 1);
}


// [0, 1, 2, 3, 4, 5, 6]
// [-2, -1, 0, 1, 2, 3, 4]
