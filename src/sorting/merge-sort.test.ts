import mergeSort from './merge-sort';
import { sortedArr, unsortedArr } from './__mocks__/data';

describe('merge-sort', () => {
  test('should sort accordingly', () => {
    expect(mergeSort(unsortedArr)).toEqual(sortedArr);
  });
});
