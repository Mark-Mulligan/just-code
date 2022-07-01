import { createTestScriptString } from '../../../utils/testScripts';
import { TestResult } from '../../../types';
import { extractTestCriteria } from '../../../utils/testScripts';

function isPrimitive(obj: { [key: string]: any }) {
  return obj !== Object(obj);
}

const deepEqual = (obj1: { [key: string]: any }, obj2: { [key: string]: any }) => {
  if (obj1 === obj2) return true;

  if (isPrimitive(obj1) && isPrimitive(obj2)) return obj1 === obj2;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
};

const countUnique = (arr: any[]) => {
  const result: any = {};

  arr.forEach((item) => {
    if (!result.hasOwnProperty(item)) {
      result[item] = 1;
    } else {
      result[item] += 1;
    }
  });

  return result;
};

const countUniqueValuesTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function countUnique.',
    passed: typeof countUnique === 'function',
    result: typeof countUnique,
  });
  testResults.push({
    test: 'Function returns an Object.',
    passed: typeof countUnique([1, 2, 1, 3, 4, 3, 3]) === 'object',
    result: typeof countUnique([1, 2, 1, 3, 4, 3, 3]),
  });
  testResults.push({
    test: 'countUnique([1, 2, 1, 3, 4, 3, 3]) returns { 1: 2, 2: 1, 3: 3, 4: 1 }',
    passed: deepEqual(countUnique([1, 2, 1, 3, 4, 3, 3]), { 1: 2, 2: 1, 3: 3, 4: 1 }),
    result: JSON.stringify(countUnique([1, 2, 1, 3, 4, 3, 3])),
  });
  testResults.push({
    test: 'countUnique(["Pam", "Jim", "Michael", "Pam", "Toby", "Jim", "Jim", "Michael"]) returns  { Pam: 2, Jim: 3, Michael: 2, Toby: 1 }',
    passed: deepEqual(countUnique(['Pam', 'Jim', 'Michael', 'Pam', 'Toby', 'Jim', 'Jim', 'Michael']), {
      Pam: 2,
      Jim: 3,
      Michael: 2,
      Toby: 1,
    }),
    result: JSON.stringify(countUnique(['Pam', 'Jim', 'Michael', 'Pam', 'Toby', 'Jim', 'Jim', 'Michael'])),
  });
  testResults.push({
    test: 'countUnique(["test", 1, "test", 1, "test", 2, "test", 3]) returns { test: 4, 1: 2, 2: 1, 3: 1 }',
    passed: deepEqual(countUnique(['test', 1, 'test', 1, 'test', 2, 'test', 3]), { test: 4, 1: 2, 2: 1, 3: 1 }),
    result: JSON.stringify(countUnique(['test', 1, 'test', 1, 'test', 2, 'test', 3])),
  });

  return testResults;
};

export const countUniqueValuesTestScript = createTestScriptString(countUniqueValuesTests, [
  { name: 'isPrimitive', func: isPrimitive },
  { name: 'deepEqual', func: deepEqual },
]);
export const countUniqueValuesTestCriteria = extractTestCriteria(countUniqueValuesTests());
