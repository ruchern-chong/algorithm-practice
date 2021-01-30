import quickSort from './quick-sort';
import { sortedArr, unsortedArr } from './__mocks__/data';

describe('quick-sort', () => {
  test('should sort accordingly', () => {
    expect(quickSort(unsortedArr, 0, unsortedArr.length - 1)).toEqual(
      sortedArr
    );
  });
});
