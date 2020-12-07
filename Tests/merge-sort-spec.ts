import { mergeSort } from '../MergeSort/merge-sort';
import { expect } from 'chai';

describe('mergeSort', () => {
  it('should sort the array', () => {
    // sorted -> [1, 9, 16, 20, 37, 52, 75]
    let unsortedArray = [52, 16, 1, 75, 37, 20, 9];

    expect(mergeSort(unsortedArray)).to.deep.equal([1, 9, 16, 20, 37, 52, 75])
  })
})
