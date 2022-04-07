import { sumTwoIntsTestScript } from './testScripts/sumTwoInt';
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
import { compareTwoObjsTestScript } from './testScripts/compareTwoObjs';
import { combineTwoArraysTests } from './testScripts/combineTwoArrays';
import { snakeToCamelTests } from './testScripts/snakeToCamel';
import { countUniqueValuesTests } from './testScripts/countUniqueValues';
import { queryParametersTests } from './testScripts/queryParameters';

import { object_equals } from '../../utils/utilityFunctions';

interface testUtilFunction {
  name: string;
  func: Function;
}

const createTestScriptString = (testFunc: Function, utilFuncs?: testUtilFunction[]) => {
  let resultStr = '';
  if (utilFuncs && utilFuncs.length > 0) {
    utilFuncs.forEach((utilFunc) => {
      resultStr += `const ${utilFunc.name} = ${utilFunc.func.toString()} \n`;
    });
  }

  resultStr += `const runTests = ${testFunc.toString()} \n runTests();`;
  return resultStr;
};

export const testScripts = {
  sumTwoIntsTestScript,
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
  compareTwoObjsTestScript,
  combineTwoArraysTestScript: createTestScriptString(combineTwoArraysTests),
  snakeToCamelTestScript: createTestScriptString(snakeToCamelTests),
  countUniqueValuesTestScript: createTestScriptString(countUniqueValuesTests),
  queryParametersTestScript: createTestScriptString(queryParametersTests, [
    { name: 'object_equals', func: object_equals },
  ]),

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
