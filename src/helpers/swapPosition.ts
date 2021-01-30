/**
 * A helper function to sort the position of the values in the sorting algorithms
 *
 * @param items
 * @param leftIndex
 * @param rightIndex
 */
const swapPosition = (
  items: number[],
  leftIndex: number,
  rightIndex: number
) => {
  const temp: number = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;

  return items;
};

export default swapPosition;
