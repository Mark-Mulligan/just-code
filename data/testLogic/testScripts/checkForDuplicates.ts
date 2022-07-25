import { createTestScriptString } from '../../../utils/testScripts';
import { TestResult } from '../../../types';
import { extractTestCriteria } from '../../../utils/testScripts';

const checkForDuplicates = (arr: string[] | number[]) => {
  return true;
};

const checkForDuplicatesTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function checkForDuplicates.',
    passed: typeof checkForDuplicates === 'function',
    result: typeof checkForDuplicates,
  });
  testResults.push({
    test: 'Function returns a boolean.',
    passed: typeof checkForDuplicates([1, 2, 3, 4, 5, 1]) === 'boolean',
    result: typeof checkForDuplicates([1, 2, 3, 4, 5, 1]),
  });
  testResults.push({
    test: 'checkForDuplicates([1, 2, 3, 4, 5, 1]) return true',
    passed: checkForDuplicates([1, 2, 3, 4, 5, 1]) === true,
    result: checkForDuplicates([1, 2, 3, 4, 5, 1]),
  });
  testResults.push({
    test: 'checkForDuplicates(10, 12, 31, 4, 25, -3]) return false',
    passed: checkForDuplicates([10, 12, 31, 4, 25, -3]) === false,
    result: checkForDuplicates([10, 12, 31, 4, 25, -3]),
  });
  testResults.push({
    test: `checkForDuplicates(['cheese', 'cake', 'cookies', 'fries']) return false`,
    passed: checkForDuplicates(['cheese', 'cake', 'cookies', 'fries']) === false,
    result: checkForDuplicates(['cheese', 'cake', 'cookies', 'fries']),
  });
  testResults.push({
    test: `checkForDuplicates(['test', 'testing', 'test', 'testing', 'tested']) return true`,
    passed: checkForDuplicates(['test', 'testing', 'test', 'testing', 'tested']) === true,
    result: checkForDuplicates(['test', 'testing', 'test', 'testing', 'tested']),
  });

  return testResults;
};

export const checkForDuplicatesTestScript = createTestScriptString(checkForDuplicatesTests);
export const checkForDuplicatesTestCriteria = extractTestCriteria(checkForDuplicatesTests());
