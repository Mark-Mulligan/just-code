import { createTestScriptString } from '../../../utils/testScripts';
import { TestResult } from '../../../types';
import { extractTestCriteria } from '../../../utils/testScripts';

const evenOrOdd = (num: number) => {
  return num % 2 === 0 ? 'even' : 'odd';
};

const evenOrOddTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function evenOrOdd.',
    passed: typeof evenOrOdd === 'function',
    result: typeof evenOrOdd,
  });
  testResults.push({
    test: 'Function returns a string.',
    passed: typeof evenOrOdd(11) === 'string',
    result: typeof evenOrOdd(11),
  });
  testResults.push({
    test: 'evenOrOdd(11) returns "odd"',
    passed: evenOrOdd(11) === 'odd',
    result: evenOrOdd(11),
  });
  testResults.push({
    test: 'evenOrOdd(30) returns "even"',
    passed: evenOrOdd(30) === 'even',
    result: evenOrOdd(30),
  });
  testResults.push({
    test: 'evenOrOdd(17) returns "odd"',
    passed: evenOrOdd(17) === 'odd',
    result: evenOrOdd(17),
  });
  testResults.push({
    test: 'evenOrOdd(22) returns "even"',
    passed: evenOrOdd(22) === 'even',
    result: evenOrOdd(22),
  });

  return testResults;
};

export const evenOrOddTestScript = createTestScriptString(evenOrOddTests);
export const evenOrOddTestCriteria = extractTestCriteria(evenOrOddTests());
