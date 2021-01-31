/**
 * Find the maximum value in an array
 *
 * @param items
 */
const findMax = (items: number[]): number => {
  // Base case - If there is only 1 value in an array, return that value as the maximum value
  if (items.length === 1) return items[0];

  const opt1: number = items[1],
    opt2: number = findMax(items.slice(1));

  return opt1 > opt2 ? opt1 : opt2;
};

export default findMax;
