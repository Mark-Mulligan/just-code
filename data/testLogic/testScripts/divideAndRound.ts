import { createTestScriptString } from '../../../utils/testScripts';
import { extractTestCriteria } from '../../../utils/testScripts';
import { TestResult } from '../../../types';

const divide = (num1: number, num2: number) => {
  return Math.round((num1 / num2) * 100) / 100;
};

export const divideAndRoundTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function called divide.',
    passed: typeof divide === 'function',
    result: typeof divide,
  });
  testResults.push({
    test: 'Function returns a number',
    passed: typeof divide(2, 1) === 'number',
    result: typeof divide(2, 1),
  });
  testResults.push({ test: 'divide(2, 1) returns 3', passed: divide(2, 1) === 2, result: divide(2, 1) });
  testResults.push({ test: 'divide(9, 7) returns 1.29', passed: divide(9, 7) === 1.29, result: divide(9, 7) });
  testResults.push({
    test: 'divide(607.97, 8.28) returns 73.43',
    passed: divide(607.97, 8.28) === 73.43,
    result: divide(607.97, 8.28),
  });
  return testResults;
};

export const divideAndRoundTestScript = createTestScriptString(divideAndRoundTests);
export const divideAndRoundTestCriteria = extractTestCriteria(divideAndRoundTests());
