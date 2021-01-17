/**
 * Count the number of ways to climb a stairs
 *
 * This uses the dynamic programming method to reduce its complexity
 *
 * @param n - Number of steps
 */
const climbStairs = (n: number): number => {
  // There is only 1 way to climb 1 step
  if (n === 0) return 1;

  const steps: number[] = new Array(n + 1);
  steps[0] = 1; // 0 steps = 1 way
  steps[1] = 1; // 1 step = 1 way

  for (let i: number = 2; i <= n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }

  return steps[n];
};

export default climbStairs;
