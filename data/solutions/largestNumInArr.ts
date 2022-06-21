export const largestNumInArrSolution = `const largestNum = (numArr) => {
  let largestNum = numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > largestNum) {
      largestNum = numArr[i]
    }
  }

  return largestNum;
}`;
