export const largestResultSolution = `const largestResult = (num1, num2) => {
  let result = num1 + num2;

  if (num1 - num2 > result) {
    result = num1 - num2;
  }

  if (num2 - num1 > result) {
    result = num2 - num1;
  }

  if (num1 * num2 > result) {
    result = num1 * num2;
  }

  if (num1 / num2 > result) {
    result = num1 / num2;
  }

  if (num2 / num1 > result) {
    result = num2 / num1;
  }

  return result;
};`;
