/**
 * Return if an array is sorted
 *
 * @param items
 */
const isSorted = (items: number[]): boolean => {
  for (let i: number = 0; i < items.length - 1; i++) {
    if (items[i] > items[i + 1]) {
      return false;
    }
  }
  return true;
};

export default isSorted;
