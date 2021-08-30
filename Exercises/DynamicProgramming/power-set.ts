// Return the power set of a given array

function powerSet(array): number [][] {
  if (!array || array.length === 0) return [];
  let result = [];
  let partial = [];

  function psCalculate(index) {
    // We need to go recurse to index = array.length, because if we do index = array.length - 1, we miss the last item!
    if (index === array.length) {
      result.push([...partial]);
      return;
    }

    // Two options: include array[index] and don't include array[index]
    partial.push(array[index]);
    psCalculate(index + 1);
    partial.pop();
    psCalculate(index + 1);
  }

  psCalculate(0);

  return result;
}
