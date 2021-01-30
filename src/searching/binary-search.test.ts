import binarySearch from './binary-search';
import { sortedArr } from '../sorting/__mocks__/data';
import { matchingSearch, nonMatchingSearch } from './__mocks__/data';

describe('binary-search', () => {
  test('should return the index for a matching search item', () => {
    expect(binarySearch(sortedArr, matchingSearch)).toBe(3);
  });

  test('should return null for a no matching search item', () => {
    expect(binarySearch(sortedArr, nonMatchingSearch)).toBeNull();
  });
});
