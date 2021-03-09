/**
 * The algorithm for the Fibonacci number sequence
 *
 * @param num
 */
const fibonacci = (num: number): number => {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

export default fibonacci;
