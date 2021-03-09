import factorial from './factorial';

describe('factorial', () => {
  test('should return 1 for base cases', () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
  });

  test('should return the number based on the n term', () => {
    expect(factorial(5)).toEqual(120);
  });
});
