import climbStairs from './staircase';
import { staircases } from './__mocks__/data';

describe('climbStairs', () => {
  staircases.forEach(({ steps, ways }) => {
    test(`should return ${ways} ways to climb a stairs of ${steps} steps`, () => {
      expect(climbStairs(steps)).toEqual(ways);
    });
  });
});
