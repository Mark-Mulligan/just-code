import { codingExerciseOverview } from '../types';
import { testScripts } from './testLogic';

interface codingExerciseData {
  [key: string]: codingExerciseOverview;
}

export const codingExercisesData: codingExerciseData = {
  'sum-two-ints': {
    title: 'Sum Two Integers',
    description: 'Create a function that returns the sum of two integers.',
    instructions:
      'Create a function that takes in two arguments (num1 & num2 that will both be integers) and returns a number that is the sum of the two integers provided.',
    testScriptCode: testScripts.sumTwoIntsTestScript,
    startingCode: 'const sum = (num1, num2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called sum',
      'Function returns a number',
      'sum(1, 2) returns 3',
      'sum(5, 10) returns 15',
      'sum(-1, -4) returns -5',
    ],
  },

  'reverse-string': {
    title: 'Reverse A String',
    description: 'Create a function that returns a string reversed.',
    instructions:
      'Create a function that takes in a single argument, a string, and returns a reversed version of that string.',
    testScriptCode: testScripts.reversStringTestScript,
    startingCode: 'const reverseStr = (str) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called reverseStr',
      'Function returns a string',
      'reverseStr("Hello World") returns "dlroW olleH"',
      'reverseStr("Reverse Me") returns "eM esreveR"',
      'reverseStr("racecar") returns "racecar"',
    ],
  },
  'sort-array-ints': {
    title: 'Sort Array Of Integers',
    description: 'Create a function that returns a sorted array of integers',
    instructions:
      'Create a function that takes in one argument (an array of integers) and a new array with those same integers sorted from least to greatest.',
    testScriptCode: testScripts.sortArrayIntsTestScript,
    startingCode: 'const sortArr = (numArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called sortArr',
      'sortArr([1, 2, 6, 4, 2]) returns [1, 2, 2, 4, 6]',
      'sortArr([10, -3, 2, -1, 7, 9]) returns [-3, -1, 2, 7, 9, 10]',
      'sortArr([-1, 1000, 10, 22, -22, 3]) returns [-22, -1, 3, 10, 22, 1000]',
    ],
  },
  'largest-num-in-array': {
    title: 'Find Largest Number',
    description: 'Create a function that returns a the largest number from an array of integers',
    instructions: 'Given a function that takes in an array of integers, return the largest number from that array.',
    testScriptCode: testScripts.largestNumInArrayTestScript,
    startingCode: 'const largestNum = (numArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called largestNum',
      'function return a number',
      'largestNum([1, 8, 10, 5, 12]) returns 12',
      'largestNum([-4, 1, 80, 2, 1]) returns 80',
      'largestNum([-5, -2, -1, -3, -20]) returns -1',
    ],
  },
  'count-the-vowels': {
    title: 'Count The Vowels',
    description: 'Create a function that counts the number of vowels there are in a string.',
    instructions:
      'Given a function that takes in a string, return the number of vowels that occur in that string.  Vowels will be a,e,i,o,u (we will not count y). Make sure to look for upper and lower case letters.',
    testScriptCode: testScripts.countTheVowelsTestScript,
    startingCode: 'const vowelCount = (str) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called vowelCount',
      'vowelCount returns a number',
      "vowelCount('This is a test sentence.') returns 7",
      "vowelCount('If you have not checked out FreeCodeCamp, you should. It is Awesome!!!') returns 27",
      "vowelCount('THIS IS UPPER CASE. this is lowercase.') returns 12",
    ],
  },
  'sort-the-days': {
    title: 'Sort The Days',
    description: 'Create a function that sorts the given days of the week.',
    instructions:
      "Create a function that takes in a string of days seperated by commas (ex. 'mon,wed,tues').  Return a string of days sorted with Monday being the start of the week and sunday being the last. The possible values in the provided string are 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'.",
    testScriptCode: testScripts.sortTheDaysTestScript,
    startingCode: 'const sortDays = (dayStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called sortDays',
      'Function returns a string',
      "sortDays('mon,wed,tues,sat') returns 'mon,tues,wed,sat'",
      "sortDays('sun,sat,fri,thurs,wed,tues,mon') returns 'mon,tues,wed,thrus,fri,sat,sun'",
      "sortDays('wed,tues,sat,fri') returns 'tues,wed,fri,sat'",
    ],
  },

  'find-the-index-1': {
    title: 'Find the Index (Level 1)',
    description: 'Create a function that returns the index of a give value in an array.',
    instructions:
      'Create a function that takes in two arguments, an array and a target value. The function will return the index of that value in the array. If the target value is not in the array or the array is empty, return -1.',
    testScriptCode: testScripts.findTheIndex1TestScript,
    startingCode: 'const findIndex = (sourceArr, targetValue) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called findIndex',
      'Function returns a number',
      'findIndex([0, 2, 10, -10, 3], -10) returns 3',
      "findIndex(['testing', 'test', 'tester', 'tested'], 'test') returns 1",
      "findIndex([], 'something') returns -1",
      "findIndex(['apple', 'orange', 'grape'], 'pineapple') returns -1",
    ],
  },

  'compare-two-objs': {
    title: 'Compare Two Objects',
    description: 'Create a function that sees if two objects contain the same key, value pairs.',
    instructions:
      'Create a function that takes in two arguments, two objects, and returns a boolean of whether or not those two objects have the same key, value pairs. Remember, objects in javascript are reference types so you can use === to compare them.',
    testScriptCode: testScripts.compareTwoObjsTestScript,
    startingCode: 'const compareObjs = (obj1, obj2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called compareObjs',
      'Functions reutrns a boolean',
      'compareObjs({ name: "John", job: "Web Developer" }, { name: "Steve", job: "Welder" }) returns false',
      'compareObjs({ title: "The Witcher", streaming: "Netflix" }, { title: "The Witcher", streaming: "Netflix" }) returns true',
      'compareObjs({ favorites: { food: "pizza", color: "green" }, age: 27 }, { age: 27, favorites: {food: "pizza", color: "green" }}) returns true',
    ],
  },

  'combine-two-arrays': {
    title: 'Combine Two Arrays',
    description: 'Create a function that combines two arrays into one array that is sorted.',
    instructions:
      'Create a fucntion that takes in two agruments, both arrays, and combines them into a new array. This array must also be sorted. The arrays will have either strings or numbers so make sure the function can sort alphabetically. Also watch out for capitalization in the string values.',
    testScriptCode: testScripts.combineTwoArraysTestScript,
    startingCode: 'const combineArrs = (arr1, arr2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called combineArrs',
      'Function returns an array',
      'The Function returns a new array (not a reference to arr1 or arr2)',
      'combineArrs([1, 3, 5], [2, 4, 6]) returns [1, 2, 3, 4, 5, 6]',
      'combineArrs(["dogs", "cats", "hampsters"], ["snakes", "rats", "chickens"]) returns ["cats", "chickens", "dogs", "hampsters", "rats", "snakes"])',
      'combineArrs([5, -3, -1, 8, 2], [10, 9, -2, -4, 7]) returns [-4, -3, -2, -1, 2, 5, 7, 8, 9, 10]',
      'combineArrs(["mIxedCasing", "mIXedCase", "MixedcaSes"], ["MIXEDCASED", "mistake", "Mistaken"]) returns ["mistake", "Mistaken", "mIXedCase", "MIXEDCASED", "MixedcaSes", "mIxedCasing"])',
    ],
  },

  'snake-to-camel': {
    title: 'Snakecase to Camelcase',
    description: 'Create a function that converts a snake case string to a camel case string.',
    instructions:
      'Create a function that takes in one argument, a snake case string, and converts that string into camel case',
    testScriptCode: testScripts.snakeToCamelTestScript,
    startingCode: 'const snakeToCamel = (str) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User create a function called snakeToCamel',
      'Function returns a string',
      'snakeToCamel("python_style") returns "pythonStyle"',
      'snakeToCamel("did_you_use_regex") returns "didYouUseRegex',
      'snakeToCamel("what_about_stack_overflow") returns "whatAboutStackOverflow',
      'snakeToCamel("Bad_ExAMPle_Of_SnakE_Case") returns "badExampleOfSnakeCase"',
    ],
  },
};
