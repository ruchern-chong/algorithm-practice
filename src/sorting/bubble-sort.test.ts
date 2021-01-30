import bubbleSort from './bubble-sort';
import { sortedArr, unsortedArr } from './__mocks__/data';

describe('bubble-sort', () => {
  test('should sort accordingly', () => {
    expect(bubbleSort(unsortedArr)).toEqual(sortedArr);
  });
});
