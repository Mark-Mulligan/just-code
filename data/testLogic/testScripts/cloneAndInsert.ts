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

// used to test if object in function is cloned, not just modified.
const originalObj = { state: 'TX', address: '1234 Storyboard ln' };
const keyValuePairs = { zip: '12345' };

const cloneAndInsert = (originalObj: any, keyValuePairs: any) => {
  return { ...originalObj, ...keyValuePairs };
};

const cloneAndInsertTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function cloneAndInsert.',
    passed: typeof cloneAndInsert === 'function',
    result: typeof cloneAndInsert,
  });
  testResults.push({
    test: 'Function returns an Object.',
    passed: typeof cloneAndInsert(originalObj, keyValuePairs) === 'object',
    result: typeof cloneAndInsert(originalObj, keyValuePairs),
  });
  testResults.push({
    test: 'Function returns a new object, not a copy of either object in the arguments to the function.',
    passed:
      cloneAndInsert(originalObj, keyValuePairs) !== originalObj ||
      cloneAndInsert(originalObj, keyValuePairs) !== keyValuePairs,
    result: JSON.stringify(cloneAndInsert(originalObj, keyValuePairs)),
  });
  testResults.push({
    test: `cloneAndInsert({ state: 'TX', address: '1234 Storyboard ln' }, { zip: '12345' }) returns
    {
      state: 'TX',
      address: '1234 Storyboard ln',
      zip: '12345',
    }`,
    passed: deepEqual(cloneAndInsert({ state: 'TX', address: '1234 Storyboard ln' }, { zip: '12345' }), {
      state: 'TX',
      address: '1234 Storyboard ln',
      zip: '12345',
    }),
    result: JSON.stringify(cloneAndInsert({ state: 'TX', address: '1234 Storyboard ln' }, { zip: '12345' })),
  });
  testResults.push({
    test: `cloneAndInsert({ movie: 'Batman Begins' }, { director: 'Christopher Nolan', releaseDate: '06-15-2005' }) returns { 1: 2, 2: 1, 3: 3, 4: 1 }`,
    passed: deepEqual(
      cloneAndInsert({ movie: 'Batman Begins' }, { director: 'Christopher Nolan', releaseDate: '06-15-2005' }),
      {
        movie: 'Batman Begins',
        director: 'Christopher Nolan',
        releaseDate: '06-15-2005',
      },
    ),
    result: JSON.stringify(
      cloneAndInsert({ movie: 'Batman Begins' }, { director: 'Christopher Nolan', releaseDate: '06-15-2005' }),
    ),
  });

  return testResults;
};

export const cloneAndInsertTestScript = createTestScriptString(cloneAndInsertTests, [
  { name: 'isPrimitive', func: isPrimitive },
  { name: 'deepEqual', func: deepEqual },
]);
export const cloneAndInsertTestCriteria = extractTestCriteria(cloneAndInsertTests());
