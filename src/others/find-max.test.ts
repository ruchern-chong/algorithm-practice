import findMax from './find-max';
import { unsortedArr } from '../sorting/__mocks__/data';

describe('find-max', () => {
  test('should return the highest value in the array', () => {
    expect(findMax(unsortedArr)).toEqual(87);
  });
});
