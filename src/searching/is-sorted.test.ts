import isSorted from './is-sorted';
import { sortedArr, unsortedArr } from '../sorting/__mocks__/data';

describe('is-sorted', () => {
  test('should return if array is sorted', () => {
    expect(isSorted(sortedArr)).toBeTruthy();
  });

  test('should return if array is unsorted', () => {
    expect(isSorted(unsortedArr)).toBeFalsy();
  });
});
