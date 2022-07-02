import { createTestScriptString } from '../../../utils/testScripts';
import { TestResult } from '../../../types';
import { extractTestCriteria } from '../../../utils/testScripts';

const object_equals = (x: any, y: any) => {
  if (x === y) return true;
  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  if (x.constructor !== y.constructor) return false;

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue;
    if (!y.hasOwnProperty(p)) return false;
    if (x[p] === y[p]) continue;
    if (typeof x[p] !== 'object') return false;
    if (!object_equals(x[p], y[p])) return false;
  }

  for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;

  return true;
};

const largestSumReturnTypeCheck = (largestSumResult: { largestSum: number; indexs: number[] }) => {
  if (typeof largestSumResult !== 'object') {
    return false;
  }

  if (Object.keys(largestSumResult).length !== 2) {
    return false;
  }

  if (!largestSumResult.hasOwnProperty('largestSum') || !largestSumResult.hasOwnProperty('indexs')) {
    return false;
  }

  if (
    typeof largestSumResult['largestSum'] !== 'number' ||
    !Array.isArray(largestSumResult['indexs']) ||
    largestSumResult['indexs'].length !== 2
  ) {
    return false;
  }

  if (typeof largestSumResult['indexs'][0] !== 'number' || typeof largestSumResult['indexs'][1] !== 'number') {
    return false;
  }

  return true;
};

const largestSum = (numberArr: number[]) => {
  return { largestSum: 0, indexs: [0, 1] };
};

export const queryParametersTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User create a function called largestSum',
    passed: typeof largestSum === 'function',
    result: typeof largestSum,
  });
  testResults.push({
    test: 'Function returns an object containing two keys, largestSum (number), and indexs, (number[])',
    passed: largestSumReturnTypeCheck(largestSum([1, 2, 3])),
    result: JSON.stringify(largestSum([1, 2, 3])),
  });
  testResults.push({
    test: 'largestSum([1, 2, 3]) returns { largestSum: 5, indexs: [1, 2] }',
    passed: object_equals(largestSum([1, 2, 3]), { largestSum: 5, indexs: [1, 2] }),
    result: JSON.stringify(largestSum([1, 2, 3])),
  });
  testResults.push({
    test: 'largestSum([10, 6, 2, 7]) returns { largestSum: 17, indexs: [0, 3]}',
    passed: object_equals(largestSum([10, 6, 2, 7]), {
      largestSum: 17,
      indexs: [0, 3],
    }),
    result: JSON.stringify(largestSum([10, 6, 2, 7])),
  });
  testResults.push({
    test: 'largestSum([3, 27, 31, 4]) returns { largestSum: 58, indexs: [1, 2] }',
    passed: object_equals(largestSum([3, 27, 31, 4]), {
      largestSum: 58,
      indexs: [1, 2],
    }),
    result: JSON.stringify(largestSum([3, 27, 31, 4])),
  });

  return testResults;
};

export const largestSumTestScript = createTestScriptString(queryParametersTests, [
  { name: 'object_equals', func: object_equals },
  { name: 'largestSumReturnTypeCheck', func: largestSumReturnTypeCheck },
]);
export const largestSumTestCriteria = extractTestCriteria(queryParametersTests());
