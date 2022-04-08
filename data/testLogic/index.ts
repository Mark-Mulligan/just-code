import { sumTwoIntsTestScript } from './testScripts/sumTwoInt';
import { evenOrOddTestScript } from './testScripts/evenOrOdd';
import { rockPaperScissorsTestScript } from './testScripts/rockPaperScissors';
import { findTheTotalLengthTestScript } from './testScripts/findTheTotalLength';
import { reverseStringTestScript } from './testScripts/reverseString';
import { largestNumInArrayTestScript } from './testScripts/largestNumInArray';
import { primeNumberTestScript } from './testScripts/primeNumber';
import { sortArrayIntsTests } from './testScripts/sortArrayInts';
import { removeDuplicatesArrTestScript } from './testScripts/removeDuplicatesArr';
import { militaryTimeConversionTestScript } from './testScripts/militaryTimeConversion';
import { countTheVowelsTestScript } from './testScripts/countTheVowels';
import { calculateTheTipTestScript } from './testScripts/calculateTheTip';
import { sortTheDaysTests } from './testScripts/sortTheDays';
import { historicalDayTestScript } from './testScripts/historicalDay';
import { findTheIndex1TestScript } from './testScripts/findTheIndex';
import { compareTwoObjsTestScript } from './testScripts/compareTwoObjs';
import { combineTwoArraysTestScript } from './testScripts/combineTwoArrays';
import { snakeToCamelTests } from './testScripts/snakeToCamel';
import { countUniqueValuesTestScript } from './testScripts/countUniqueValues';
import { queryParametersTestScript } from './testScripts/queryParameters';

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
  evenOrOddTestScript,
  rockPaperScissorsTestScript,
  findTheTotalLengthTestScript,
  reverseStringTestScript,
  largestNumInArrayTestScript,
  primeNumberTestScript,
  sortArrayIntsTestScript: createTestScriptString(sortArrayIntsTests),
  removeDuplicatesArrTestScript,
  militaryTimeConversionTestScript,
  countTheVowelsTestScript,
  calculateTheTipTestScript,
  sortTheDaysTestScript: createTestScriptString(sortTheDaysTests),
  historicalDayTestScript,
  findTheIndex1TestScript,
  compareTwoObjsTestScript,
  combineTwoArraysTestScript,
  snakeToCamelTestScript: createTestScriptString(snakeToCamelTests),
  countUniqueValuesTestScript,
  queryParametersTestScript,

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
