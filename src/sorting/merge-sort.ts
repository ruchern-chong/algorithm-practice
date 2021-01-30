/**
 * Time complexity: O(n log n)
 *
 */
const mergeSort = (items: number[]): number[] => {
  if (items.length > 1) {
    let mid: number = Math.floor(items.length / 2);
    let leftArr: number[] = items.slice(0, mid);
    let rightArr: number[] = items.slice(mid);

    mergeSort(leftArr);
    mergeSort(rightArr);

    let i: number = 0,
      j: number = 0,
      k: number = 0;

    // While both arrays have contents
    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] < rightArr[j]) {
        items[k] = leftArr[i];
        i += 1;
      } else {
        items[k] = rightArr[j];
        j += 1;
      }
      k += 1;
    }

    while (i < leftArr.length) {
      items[k] = leftArr[i];
      i += 1;
      k += 1;
    }
    while (j < rightArr.length) {
      items[k] = rightArr[j];
      j += 1;
      k += 1;
    }
  }

  return items;
};

export default mergeSort;
