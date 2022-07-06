export const largestSumSolution = `const largestSum = (numberArr) => {
  let largestSum = 0;
  let indexes = [];

  for (let i = 0; i < numberArr.length; i++) {
    for (let j = i + 1; j < numberArr.length; j++) {
      if (numberArr[i] + numberArr[j] > largestSum) {
        largestSum = numberArr[i] + numberArr[j];
        indexes = [i, j];
      }
    }
  }

  return { largestSum, indexes };
};`;
