import { createTestScriptString } from '../../../utils/testScripts';
import { TestResult } from '../../../types';
import { extractTestCriteria } from '../../../utils/testScripts';

const longestWord = (sentence: string) => {
  let sentenceNoPunctuation = sentence.slice(0, -1);
  let words = sentenceNoPunctuation.split(' ');
  let longestWord = words[0];

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
};

const longestWordTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function longestWord.',
    passed: typeof longestWord === 'function',
    result: typeof longestWord,
  });
  testResults.push({
    test: 'Function returns a string.',
    passed: typeof longestWord('This is a test sentence.') === 'string',
    result: typeof longestWord('This is a test sentence.'),
  });
  testResults.push({
    test: 'longestWord("This is a test sentence.") returns "sentence"',
    passed: longestWord('This is a test sentence.') === 'sentence',
    result: longestWord('This is a test sentence.'),
  });
  testResults.push({
    test: 'longestWord("Batman is my favorite movie!") return "favorite"',
    passed: longestWord('Batman is my favorite movie!') === 'favorite',
    result: longestWord('Batman is my favorite movie!'),
  });
  testResults.push({
    test: 'longestWord("Does this phrase have two words that are the same length?") returns "phrase"',
    passed: longestWord('Does this phrase have two words that are the same length?') === 'phrase',
    result: longestWord('Does this phrase have two words that are the same length?'),
  });

  return testResults;
};

export const longestWordTestScript = createTestScriptString(longestWordTests);
export const longestWordTestCriteria = extractTestCriteria(longestWordTests());
