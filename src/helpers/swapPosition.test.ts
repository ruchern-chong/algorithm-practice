import swapPosition from './swapPosition';

describe('swapPosition', () => {
  test('should successfully swap the position of the values', () => {
    expect(swapPosition([1, 3, 5], 0, 2)).toEqual([5, 3, 1]);
  });
});
