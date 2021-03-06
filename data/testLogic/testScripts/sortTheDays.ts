import { createTestScriptString, extractTestCriteria } from '../../../utils/testScripts';
import { TestResult } from '../../../types';

const sortDays = (inputStr: string) => {
  return inputStr;
};

const sortTheDaysTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function called sortDays.',
    passed: typeof sortDays === 'function',
    result: typeof sortDays,
  });
  testResults.push({
    test: 'Function returns a string',
    passed: typeof sortDays('mon,wed,tues') === 'string',
    result: typeof sortDays('mon,wed,tues'),
  });
  testResults.push({
    test: 'sortDays("mon,wed,tues,sat") returns "mon,tues,wed,sat" ',
    passed: sortDays('mon,wed,tues,sat') === 'mon,tues,wed,sat',
    result: sortDays('mon,wed,tues,sat'),
  });
  testResults.push({
    test: 'sortDays("sun,sat,fri,thurs,wed,tues,mon") returns "mon,tues,wed,thurs,fri,sat,sun"',
    passed: sortDays('sun,sat,fri,thurs,wed,tues,mon') === 'mon,tues,wed,thurs,fri,sat,sun',
    result: sortDays('sun,sat,fri,thurs,wed,tues,mon'),
  });
  testResults.push({
    test: 'vowelCount("wed,tues,sat,fri") returns "tues,wed,fri,sat"',
    passed: sortDays('wed,tues,sat,fri') === 'tues,wed,fri,sat',
    result: sortDays('wed,tues,sat,fri'),
  });
  return testResults;
};

export const sortTheDaysTestScript = createTestScriptString(sortTheDaysTests);
export const sortTheDaysTestCriteria = extractTestCriteria(sortTheDaysTests());
