/**
 * Return the index if a search item is found
 *
 * @param items
 * @param searchItem
 */
const binarySearch = (items: number[], searchItem: number): number => {
  const sizeOfItems: number = items.length - 1;

  let lowerIndex: number = 0,
    upperIndex: number = sizeOfItems;

  while (lowerIndex <= upperIndex) {
    const midpoint: number = Math.floor(lowerIndex + upperIndex / 2);

    if (items[midpoint] === searchItem) return midpoint;

    if (searchItem > items[midpoint]) {
      lowerIndex = midpoint + 1;
    } else {
      upperIndex = midpoint - 1;
    }

    if (lowerIndex > upperIndex) return null;
  }
};

export default binarySearch;
