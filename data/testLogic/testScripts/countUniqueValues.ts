import { createTestScriptString } from '../../../utils/testScripts';
import { deepEqual } from '../../../utils/utilityFunctions';

const countUnique = (inputArr: any[]) => {
  return [] as any[];
};

const countUniqueValuesTests = () => {
  const testResults = [];
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
  { name: 'deepEqual', func: deepEqual },
]);
