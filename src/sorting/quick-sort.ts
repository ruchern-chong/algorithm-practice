import swapPosition from '../helpers/swapPosition';

const quickSort = (items: number[], first: number, last: number): number[] => {
  if (first < last) {
    const pivotIndex: number = partition(items, first, last);

    quickSort(items, first, pivotIndex - 1);
    quickSort(items, pivotIndex + 1, last);
  }

  return items;
};

/**
 *
 * @param items
 * @param first
 * @param last
 */
const partition = (items: number[], first: number, last: number): number => {
  const pivot: number = items[first];

  let lower: number = first + 1,
    upper: number = last;

  let done: boolean = false;

  while (!done) {
    // Advance the lower index
    while (lower <= upper && items[lower] <= pivot) {
      lower += 1;
    }

    // Advance the upper index
    while (upper >= lower && items[upper] >= pivot) {
      upper -= 1;
    }

    // Indexes crosses; split point found
    if (upper < lower) {
      done = true;
    } else {
      swapPosition(items, lower, upper);
    }
  }

  // Split point, swap position
  swapPosition(items, first, upper);

  // Return the split point index
  return upper;
};

export default quickSort;
