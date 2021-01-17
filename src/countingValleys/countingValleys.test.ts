import countingValleys from './countingValleys';

describe('countingValleys', () => {
  [
    {
      steps: 8,
      path: `UDDDUDUU`,
      count: 1
    },
    {
      steps: 12,
      path: `DDUUDDUDUUUD`,
      count: 2
    }
  ].forEach(({ steps, path, count }) =>
    test(`should return the number of valleys`, () => {
      expect(countingValleys(steps, path)).toEqual(count);
    })
  );
});
