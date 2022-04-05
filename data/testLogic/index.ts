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
  combineTwoArraysTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called combineArrs.',
      passed: typeof combineArrs === 'function',
      result: typeof combineArrs,
    });
    testResults.push({
      test: 'Function returns an array.',
      passed: Array.isArray(combineArrs([1, 3, 5], [2, 4, 6])),
      result: JSON.stringify(combineArrs([1, 3, 5], [2, 4, 6])),
    });

    let arr1 = [1, 3, 5];
    let arr2 = [2, 4, 6];
  
    const printResult = () => {
      let result = combineArrs(arr1, arr2);
  
      if (result === arr1) return 'Output array references arr1';
      else if (result === arr2) return 'Output array references arr2';
      else return 'New array created';
    };
  
    testResults.push({
      test: 'The function returns a new array (not a reference to arr1, or arr2).',
      passed: combineArrs(arr1, arr2) !== arr1 && combineArrs(arr1, arr2) !== arr2,
      result: printResult(),
    });
    testResults.push({
      test: 'combineArrs([1, 3, 5], [2, 4, 6]) returns [1, 2, 3, 4, 5, 6]',
      passed: JSON.stringify(combineArrs([1, 3, 5], [2, 4, 6])) === JSON.stringify([1, 2, 3, 4, 5, 6]),
      result: JSON.stringify(combineArrs([1, 3, 5], [2, 4, 6])),
    });
    testResults.push({
      test: 'combineArrs(["dogs", "cats", "hampsters"], ["snakes", "rats", "chickens"]) returns ["cats", "chickens", "dogs", "hampsters", "rats", "snakes"]',
      passed:
        JSON.stringify(combineArrs(['dogs', 'cats', 'hampsters'], ['snakes', 'rats', 'chickens'])) === JSON.stringify(['cats', 'chickens', 'dogs', 'hampsters', 'rats', 'snakes']),
      result: JSON.stringify(combineArrs(['dogs', 'cats', 'hampsters'], ['snakes', 'rats', 'chickens'])),
    });
    testResults.push({
      test: 'combineArrs([5, -3, -1, 8, 2], [10, 9, -2, -4, 7]) returns [-4, -3, -2, -1, 2, 5, 7, 8, 9, 10]',
      passed:
        JSON.stringify(combineArrs([5, -3, -1, 8, 2], [10, 9, -2, -4, 7])) === JSON.stringify([-4, -3, -2, -1, 2, 5, 7, 8, 9, 10]),
      result: JSON.stringify(combineArrs([5, -3, -1, 8, 2], [10, 9, -2, -4, 7])),
    });
    testResults.push({
      test: 'combineArrs(["mIxedCasing", "mIXedCase", "MixedcaSes"], ["MIXEDCASED", "mistake", "Mistaken"]) returns ["mistake", "Mistaken", "mIXedCase", "MIXEDCASED", "MixedcaSes", "mIxedCasing"]',
      passed:
        JSON.stringify(combineArrs(['mIxedCasing', 'mIXedCase', 'MixedcaSes'], ['MIXEDCASED', 'mistake', 'Mistaken'])) ===
        JSON.stringify(['mistake', 'Mistaken', 'mIXedCase', 'MIXEDCASED', 'MixedcaSes', 'mIxedCasing']),
      result: JSON.stringify(
        combineArrs(['mIxedCasing', 'mIXedCase', 'MixedcaSes'], ['MIXEDCASED', 'mistake', 'Mistaken']),
      ),
    });
  
    return testResults;
  };
  
  runTests();`,
  snakeToCamelTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called snakeToCamel.',
      passed: typeof snakeToCamel === 'function',
      result: typeof snakeToCamel,
    });
    testResults.push({
      test: 'Function returns a string',
      passed: typeof snakeToCamel('python_style') === 'string',
      result: typeof snakeToCamel('python_style'),
    });
    testResults.push({
      test: 'snakeToCamel("python_style") returns "pythonStyle"',
      passed: snakeToCamel('python_style') === 'pythonStyle',
      result: snakeToCamel('python_style'),
    });
    testResults.push({
      test: 'snakeToCamel("did_you_use_regex") returns "didYouUseRegex"',
      passed: snakeToCamel('did_you_use_regex') === 'didYouUseRegex',
      result: snakeToCamel('did_you_use_regex'),
    });
    testResults.push({
      test: 'snakeToCamel("what_about_stack_overflow") returns "pythonStyle"',
      passed: snakeToCamel('what_about_stack_overflow') === 'whatAboutStackOverflow',
      result: snakeToCamel('what_about_stack_overflow'),
    });
    testResults.push({
      test: 'snakeToCamel("Bad_ExAMPle_Of_SnakE_Case") returns "badExampleOfSnakeCase"',
      passed: snakeToCamel('Bad_ExAMPle_Of_SnakE_Case') === 'badExampleOfSnakeCase',
      result: snakeToCamel('Bad_ExAMPle_Of_SnakE_Case'),
    });
  
    return testResults;
  };
  
  runTests();`,
  countUniqueValuesTestScript: `const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) return true;
  
    if (isPrimitive(obj1) && isPrimitive(obj2)) return obj1 === obj2;
  
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  
    for (let key in obj1) {
      if (!(key in obj2)) return false;
      if (!deepEqual(obj1[key], obj2[key])) return false;
    }
  
    return true;
  };
  
  function isPrimitive(obj) {
    return obj !== Object(obj);
  }
  
  const runTests = () => {
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
  
  runTests();`,

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
