import { createTestScriptString } from '../../../utils/testScripts';
import { TestResult } from '../../../types';
import { extractTestCriteria } from '../../../utils/testScripts';

const findIndex = (source: string[] | number[], target: string | number) => {
  for (let i = 0; i < source.length; i++) {
    if (source[i] === target) return i;
  }
};

const findTheIndexTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function called findIndex.',
    passed: typeof findIndex === 'function',
    result: typeof findIndex,
  });
  testResults.push({
    test: 'Function returns a string',
    passed: typeof findIndex([1, 2, 3, 4], 2) === 'number',
    result: typeof findIndex([1, 2, 3, 4], 2),
  });
  testResults.push({
    test: 'findIndex([0, 2, 10, -10, 3], -10) returns 3',
    passed: findIndex([0, 2, 10, -10, 3], -10) === 3,
    result: findIndex([0, 2, 10, -10, 3], -10),
  });
  testResults.push({
    test: 'findIndex(["testing", "test", "tester", "tested"], "test") returns 1',
    passed: findIndex(['testing', 'test', 'tester', 'tested'], 'test') === 1,
    result: findIndex(['testing', 'test', 'tester', 'tested'], 'test'),
  });
  testResults.push({
    test: 'findIndex([], "something") returns -1',
    passed: findIndex([], 'something') === -1,
    result: findIndex([], 'something'),
  });
  testResults.push({
    test: 'findIndex([]) returns -1',
    passed: findIndex(['apple', 'orange', 'grape'], 'pineapple') === -1,
    result: findIndex(['apple', 'orange', 'grape'], 'pineapple'),
  });
  return testResults;
};

export const findTheIndex1TestScript = createTestScriptString(findTheIndexTests);
export const findTheIndex1TestCriteria = extractTestCriteria(findTheIndexTests());
