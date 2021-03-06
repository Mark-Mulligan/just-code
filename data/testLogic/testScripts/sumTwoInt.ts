import { createTestScriptString } from '../../../utils/testScripts';
import { extractTestCriteria } from '../../../utils/testScripts';
import { TestResult } from '../../../types';

const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

export const sumTwoIntsTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function called sum.',
    passed: typeof sum === 'function',
    result: typeof sum,
  });
  testResults.push({
    test: 'Function returns a number',
    passed: typeof sum(1, 2) === 'number',
    result: typeof sum(1, 2),
  });
  testResults.push({ test: 'sum(1, 2) returns 3', passed: sum(1, 2) === 3, result: sum(1, 2) });
  testResults.push({ test: 'sum(5, 10) returns 15', passed: sum(5, 10) === 15, result: sum(5, 10) });
  testResults.push({ test: 'sum(-1, -4) returns -5', passed: sum(-1, -4) === -5, result: sum(-1, -4) });
  return testResults;
};

export const sumTwoIntsTestScript = createTestScriptString(sumTwoIntsTests);
export const sumTwoIntsTestCriteria = extractTestCriteria(sumTwoIntsTests());
