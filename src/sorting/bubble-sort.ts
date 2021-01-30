import swapPosition from '../helpers/swapPosition';

/**
 * Bubble sorting algorithm
 *
 * Time complexity: O(n^2)
 *
 * @param items
 */
const bubbleSort = (items: number[]): number[] => {
  for (let i: number = 0; i < items.length; i++) {
    for (let j: number = i + 1; j < items.length; j++) {
      // Swap the position of the two numbers in the array if the value of the bigger index is a smaller value
      if (items[j] > items[j + 1]) {
        swapPosition(items, j, j + 1);
      }
    }
  }

  return items;
};

export default bubbleSort;
