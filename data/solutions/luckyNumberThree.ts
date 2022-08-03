export const luckyNumberThreeSolution = `const hasThreeRepeatingValues = (arr) => {
  const uniqueValCount = {};

  for (let i = 0; i < arr.length; i++) {
    if (uniqueValCount.hasOwnProperty(arr[i])) {
      uniqueValCount[arr[i]] = uniqueValCount[arr[i]] + 1;
    } else {
      uniqueValCount[arr[i]] = 1;
    }

    if (uniqueValCount[arr[i]] === 3) {
      return true;
    }
  }

  return false;
};`;
