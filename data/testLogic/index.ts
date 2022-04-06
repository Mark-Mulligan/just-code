import { sumTwoIntTests } from './testScripts/sumTwoInt';
import { evenOrOddTests } from './testScripts/evenOrOdd';
import { rockPaperScissorsTests } from './testScripts/rockPaperScissors';
import { findTheTotalLengthTests } from './testScripts/findTheTotalLength';
import { reverseStringTests } from './testScripts/reverseString';
import { largestNumInArrayTests } from './testScripts/largestNumInArray';
import { primeNumberTests } from './testScripts/primeNumber';
import { sortArrayIntsTests } from './testScripts/sortArrayInts';
import { removeDuplicatesArrTests } from './testScripts/removeDuplicatesArr';
import { militaryTimeConversionTests } from './testScripts/militaryTimeConversion';
import { countTheVowelsTests } from './testScripts/countTheVowels';
import { calculateTheTipTests } from './testScripts/calculateTheTip';
import { sortTheDaysTests } from './testScripts/sortTheDays';
import { historicalDaysTests } from './testScripts/historicalDay';
import { findTheIndexTests } from './testScripts/findTheIndex';
import { compareTwoObjsTests } from './testScripts/compareTwoObjs';
import { combineTwoArraysTests } from './testScripts/combineTwoArrays';
import { snakeToCamelTests } from './testScripts/snakeToCamel';
import { countUniqueValuesTests } from './testScripts/countUniqueValues';

const createTestScriptString = (testFunc: Function) => {
  return `const runTests = ${testFunc.toString()} \n runTests();`;
};

export const testScripts = {
  sumTwoIntsTestScript: createTestScriptString(sumTwoIntTests),
  evenOrOddTestScript: createTestScriptString(evenOrOddTests),
  rockPaperScissorsTestScript: createTestScriptString(rockPaperScissorsTests),
  findTheTotalLengthTestScript: createTestScriptString(findTheTotalLengthTests),
  reverseStringTestScript: createTestScriptString(reverseStringTests),
  largestNumInArrayTestScript: createTestScriptString(largestNumInArrayTests),
  primeNumberTestScript: createTestScriptString(primeNumberTests),
  sortArrayIntsTestScript: createTestScriptString(sortArrayIntsTests),
  removeDuplicatesArrTestScript: createTestScriptString(removeDuplicatesArrTests),
  militaryTimeConversionTestScript: createTestScriptString(militaryTimeConversionTests),
  countTheVowelsTestScript: createTestScriptString(countTheVowelsTests),
  calculateTheTipTestScript: createTestScriptString(calculateTheTipTests),
  sortTheDaysTestScript: createTestScriptString(sortTheDaysTests),
  historicalDayTestScript: createTestScriptString(historicalDaysTests),
  findTheIndex1TestScript: createTestScriptString(findTheIndexTests),
  compareTwoObjsTestScript: createTestScriptString(compareTwoObjsTests),
  combineTwoArraysTestScript: createTestScriptString(combineTwoArraysTests),
  snakeToCamelTestScript: createTestScriptString(snakeToCamelTests),
  countUniqueValuesTestScript: createTestScriptString(countUniqueValuesTests),
  queryParametersTestScript: `function object_equals(x, y) {
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
  }
  
  const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User create a function called extractQueryParams',
      passed: typeof extractQueryParams === 'function',
      result: typeof extractQueryParams,
    });
    testResults.push({
      test: 'Function returns an object',
      passed: typeof extractQueryParams('https://example?search=test&length=3') === 'object',
      result: typeof extractQueryParams('https://example?search=test&length=3'),
    });
    testResults.push({
      test: 'extractQueryParams("https://example?search=test&length=3") returns { search: "test", length: "3" }',
      passed: object_equals(extractQueryParams('https://example?search=test&length=3'), { search: 'test', length: '3' }),
      result: JSON.stringify(extractQueryParams('https://example?search=test&length=3')),
    });
    testResults.push({
      test: 'extractQueryParams("https://mysearchwebsite?q=google&results=50&past=false") returns { q: "google", results: "50", past: "false" }',
      passed: object_equals(extractQueryParams('https://mysearchwebsite?q=google&results=50&past=false'), {
        q: 'google',
        results: '50',
        past: 'false',
      }),
      result: JSON.stringify(extractQueryParams('https://mysearchwebsite?q=google&results=50&past=false')),
    });
    testResults.push({
      test: 'extractQueryParams("https://weather?city=dallas&forecast=3day&unit=fahrenheit") returns { city: "dallas", forecast: "3day", unit: "fahrenheit" }',
      passed: object_equals(extractQueryParams('https://weather?city=dallas&forecast=3day&unit=fahrenheit'), {
        city: 'dallas',
        forecast: '3day',
        unit: 'fahrenheit',
      }),
      result: JSON.stringify(extractQueryParams('https://weather?city=dallas&forecast=3day&unit=fahrenheit')),
    });
  
    return testResults;
  };
  
  runTests();`,

  ticTacToeTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function ticTacToe.',
      passed: typeof ticTacToe === 'function',
      result: typeof ticTacToe,
    });
    testResults.push({
      test: 'Function returns a string.',
      passed:
        typeof ticTacToe([
          ['X', 'O', 'O'],
          ['O', 'X', 'X'],
          ['X', 'X', 'O'],
        ]) === 'string',
      result: typeof ticTacToe([
        ['X', 'O', 'O'],
        ['O', 'X', 'X'],
        ['X', 'X', 'O'],
      ]),
    });
    testResults.push({
      test: 'ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["X", "O", "O"]]) returns "X wins"',
      passed:
        ticTacToe([
          ['X', 'X', 'X'],
          ['O', 'O', 'X'],
          ['X', 'O', 'O'],
        ]) === 'X wins',
      result: ticTacToe([
        ['X', 'X', 'X'],
        ['O', 'O', 'X'],
        ['X', 'O', 'O'],
      ]),
    });
    testResults.push({
      test: 'ticTacToe([["X", "O", "X"], ["O", "O", "X"], ["", "", "X"]]) returns "X wins"',
      passed:
        ticTacToe([
          ['X', 'O', 'X'],
          ['O', 'O', 'X'],
          ['', '', 'X'],
        ]) === 'X wins',
      result: ticTacToe([
        ['X', 'O', 'X'],
        ['O', 'O', 'X'],
        ['', '', 'X'],
      ]),
    });
    testResults.push({
      test: 'ticTacToe([["X", "X", "O"], ["X", "O", ""], ["O", "", ""]]) returns "O wins"',
      passed:
        ticTacToe([
          ['X', 'X', 'O'],
          ['X', 'O', ''],
          ['O', '', ''],
        ]) === 'O wins',
      result: ticTacToe([
        ['X', 'X', 'O'],
        ['X', 'O', ''],
        ['O', '', ''],
      ]),
    });
    testResults.push({
      test: 'ticTacToe([["O", "X", "X"], ["", "O", ""], ["X", "", "O"]]) returns "O wins"',
      passed:
        ticTacToe([
          ['O', 'X', 'X'],
          ['', 'O', ''],
          ['X', '', 'O'],
        ]) === 'O wins',
      result: ticTacToe([
        ['O', 'X', 'X'],
        ['', 'O', ''],
        ['X', '', 'O'],
      ]),
    });
    testResults.push({
      test: 'ticTacToe([["X", "", "O"], ["X", "O", ""], ["X", "O", "X"]]) returns "X wins"',
      passed:
        ticTacToe([
          ['X', '', 'O'],
          ['X', 'O', ''],
          ['X', 'O', 'X'],
        ]) === 'X wins',
      result: ticTacToe([
        ['X', '', 'O'],
        ['X', 'O', ''],
        ['X', 'O', 'X'],
      ]),
    });
    testResults.push({
      test: 'ticTacToe([["X", "O", "O"], ["O", "X", "X"], ["X", "X", "O"]]) returns "tie"',
      passed:
        ticTacToe([
          ['X', 'O', 'O'],
          ['O', 'X', 'X'],
          ['X', 'X', 'O'],
        ]) === 'tie',
      result: ticTacToe([
        ['X', 'O', 'O'],
        ['O', 'X', 'X'],
        ['X', 'X', 'O'],
      ]),
    });
  
    return testResults;
  };
  
  runTests();`,
};
