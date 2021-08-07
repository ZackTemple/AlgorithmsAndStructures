function binarySearchIterative(array, val){
  let left = 0;
  let right = array.length - 1;
  let midpoint = Math.floor((left + right) / 2);

  while(array[midpoint] !== val && left <= right) {
      array[midpoint] < val ?
        left = midpoint + 1 :
        right = midpoint - 1;

    midpoint = Math.floor((left + right) / 2);
  }

  return array[midpoint] === val ? midpoint : -1;
}

function binarySearchRecursive(array, val) {
  let left = 0;
  let right = array.length - 1;

  return bsrHelper(array, val, left, right);
}

function bsrHelper(array, val, left, right) {
  // Base Cases
  if (left > right) return -1;
  let midpoint = Math.floor((right + left) / 2);
  if (array[midpoint] === val) return midpoint;


  if (array[midpoint] < val) {
    return bsrHelper(array, val, midpoint + 1, right);
  } else {
    return bsrHelper(array, val, left, midpoint - 1);
  }
}
