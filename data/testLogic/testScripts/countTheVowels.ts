import { createTestScriptString } from '../../../utils/testScripts';
import { TestResult } from '../../../types';
import { extractTestCriteria } from '../../../utils/testScripts';

const vowelCount = (text: string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = 0;
  let textArr = text.split('');

  textArr.forEach((char) => {
    if (vowels.includes(char.toLowerCase())) {
      result++;
    }
  });

  return result;
};

const countTheVowelsTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function called vowelCount.',
    passed: typeof vowelCount === 'function',
    result: typeof vowelCount,
  });
  testResults.push({
    test: 'Function returns a number',
    passed: typeof vowelCount('abcdefg') === 'number',
    result: typeof vowelCount('abcdefg'),
  });
  testResults.push({
    test: 'vowelCount("This is a test sentence.") returns 7 ',
    passed: vowelCount('This is a test sentence.') === 7,
    result: vowelCount('This is a test sentence.'),
  });
  testResults.push({
    test: 'vowelCount("If you have not checked out FreeCodeCamp, you should. It is Awesome!!!") returns 25',
    passed: vowelCount('If you have not checked out FreeCodeCamp, you should. It is Awesome!!!') === 25,
    result: vowelCount('If you have not checked out FreeCodeCamp, you should. It is Awesome!!!'),
  });
  testResults.push({
    test: 'vowelCount("THIS IS UPPER CASE. this is lowercase.") returns 12',
    passed: vowelCount('THIS IS UPPER CASE. this is lowercase.') === 12,
    result: vowelCount('THIS IS UPPER CASE. this is lowercase.'),
  });
  return testResults;
};

export const countTheVowelsTestScript = createTestScriptString(countTheVowelsTests);
export const countTheVowelsTestCriteria = extractTestCriteria(countTheVowelsTests());
