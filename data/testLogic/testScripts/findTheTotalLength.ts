import { createTestScriptString } from '../../../utils/testScripts';
import { TestResult } from '../../../types';
import { extractTestCriteria } from '../../../utils/testScripts';

const totalLength = (inputArr: string[]) => {
  return inputArr.join('').length;
};

const findTheTotalLengthTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function totalLength.',
    passed: typeof totalLength === 'function',
    result: typeof totalLength,
  });
  testResults.push({
    test: 'Function returns a number.',
    passed: typeof totalLength(['this', 'is', 'a', 'test']) === 'number',
    result: typeof totalLength(['this', 'is', 'a', 'test']),
  });
  testResults.push({
    test: 'totalLength(["Somebody", "once", "told", "me"]) returns 18',
    passed: totalLength(['Somebody', 'once', 'told', 'me']) === 18,
    result: totalLength(['Somebody', 'once', 'told', 'me']),
  });
  testResults.push({
    test: 'totalLength(["the", "world", "is", "gonna", "roll", "me"]) return 21',
    passed: totalLength(['the', 'world', 'is', 'gonna', 'roll', 'me']) === 21,
    result: totalLength(['the', 'world', 'is', 'gonna', 'roll', 'me']),
  });
  testResults.push({
    test: `totalLength(["I", "ain't", "the", "sharpest", "tool", "in", "the", "shed"] returns 30`,
    passed: totalLength(['I', `ain't`, 'the', 'sharpest', 'tool', 'in', 'the', 'shed']) === 30,
    result: totalLength(['I', `ain't`, 'the', 'sharpest', 'tool', 'in', 'the', 'shed']),
  });

  return testResults;
};

export const findTheTotalLengthTestScript = createTestScriptString(findTheTotalLengthTests);
export const findTheTotalLengthTestCriteria = extractTestCriteria(findTheTotalLengthTests());
