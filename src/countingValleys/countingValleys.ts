const countingValleys = (steps: number, path: string): number => {
  let altitude = 0,
    valleyCount = 0;

  [...path].forEach((direction: string) => {
    if (direction === 'U') {
      altitude++;
    } else {
      altitude--;
    }

    if (direction === 'U' && altitude === 0) {
      valleyCount++;
    }
  });

  return valleyCount;
};

export default countingValleys;
