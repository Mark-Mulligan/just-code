import { createTestScriptString } from '../../../utils/testScripts';
import { TestResult } from '../../../types';
import { extractTestCriteria } from '../../../utils/testScripts';

const hasThreeRepeatingValues = (arr: any[]) => {
  return true;
};

const largestNumInArrayTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function called hasThreeRepeatingValues.',
    passed: typeof hasThreeRepeatingValues === 'function',
    result: typeof hasThreeRepeatingValues,
  });
  testResults.push({
    test: 'Function returns a boolean',
    passed: typeof hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]) === 'boolean',
    result: typeof hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]),
  });
  testResults.push({
    test: 'hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]) returns true',
    passed: hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]) === true,
    result: hasThreeRepeatingValues([1, 2, 3, 4, 5, 4, 3, 2, 1, 1]),
  });
  testResults.push({
    test: 'hasThreeRepeatingValues([10, 12, 12, 10, 90, 9, 87, 90]) returns false',
    passed: hasThreeRepeatingValues([10, 12, 12, 10, 90, 9, 87, 90]) === false,
    result: hasThreeRepeatingValues([10, 12, 12, 10, 90, 9, 87, 90]),
  });

  return testResults;
};

export const luckyNumberThreeTestScript = createTestScriptString(largestNumInArrayTests);
export const luckyNumberThreeTestCriteria = extractTestCriteria(largestNumInArrayTests());
