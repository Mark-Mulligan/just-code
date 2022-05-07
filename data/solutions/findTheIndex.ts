export const findTheIndexSolution = `const findIndex = (sourceArr, targetValue) => {
  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] === targetValue) return i;
  }

  return -1;
}`;
