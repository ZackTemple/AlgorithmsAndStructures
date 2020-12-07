import { quickSort } from '../quick-sort';
import { expect } from 'chai';

describe('quickSort', () => {
  it('should sort the array in ascending order', () => {
    // sorted -> [1, 9, 16, 20, 37, 52, 75]
    let unsortedArray = [52, 16, 1, 75, 37, 20, 9];

    expect(quickSort(unsortedArray)).to.deep.equal([1, 9, 16, 20, 37, 52, 75])
  })
})
