import { createTestScriptString } from '../../../utils/testScripts';
import { TestResult } from '../../../types';
import { extractTestCriteria } from '../../../utils/testScripts';

const largestResult = (num1: number, num2: number) => {
  let result = num1 + num2;

  if (num1 - num2 > result) {
    result = num1 - num2;
  }

  if (num1 * num2 > result) {
    result = num1 * num2;
  }

  if (num2 - num1 > result) {
    result = num2 - num1;
  }

  if (num1 / num2 > result) {
    result = num1 / num2;
  }

  if (num2 / num1 > result) {
    result = num2 / num1;
  }

  return result;
};

const largestResultTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function called largestResult.',
    passed: typeof largestResult === 'function',
    result: typeof largestResult,
  });
  testResults.push({
    test: 'Function returns a number',
    passed: typeof largestResult(1, 2) === 'number',
    result: typeof largestResult(1, 2),
  });
  testResults.push({
    test: 'largestResult(1, 2) returns 3',
    passed: largestResult(1, 2) === 3,
    result: largestResult(1, 2),
  });
  testResults.push({
    test: 'largestResult(3, 0.5) returns 6',
    passed: largestResult(3, 0.5) === 6,
    result: largestResult(3, 0.5),
  });
  testResults.push({
    test: 'largestResult(-4, -2) returns 8',
    passed: largestResult(-4, -2) === 8,
    result: largestResult(-4, -2),
  });
  return testResults;
};

export const largestResultTestScript = createTestScriptString(largestResultTests);
export const largestResultTestCriteria = extractTestCriteria(largestResultTests());
