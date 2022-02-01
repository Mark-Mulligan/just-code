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

  'even-or-odd': {
    title: 'Even or Odd?',
    description: 'Create a function that determines whether a number is even or odd.',
    instructions:
      'Create a function that takes in a single argument, an interger greater than 0, and returns "even" if the number is even or "odd" if the number is odd.',
    testScriptCode: testScripts.evenOrOddTestScript,
    startingCode: 'const evenOrOdd = (num) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called evenOrOdd',
      'Function returns a string',
      'evenOrOdd(11) returns "odd"',
      'evenOrOdd(30) returns "even"',
      'evenOrOdd(17) returns "odd"',
      'evenOrOdd(22) returns "even"',
    ],
  },

  'rock-paper-scissors': {
    title: 'Rock, Paper, Scissors',
    description: 'Create a function that returns the winner choice in rock, paper, scissors.',
    instructions:
      'Create a function that takes in a string ("rock", "paper", or "scissors") and returns the hand that would beat it. For example, if "rock" is passed in, the function would return "paper"',
    testScriptCode: testScripts.rockPaperScissorsTestScript,
    startingCode: 'const rockPaperScissors = (turn) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called rockPaperScissors',
      'Function returns a string',
      'rockPaperScissors("rock") returns "paper"',
      'rockPaperScissors("paper") returns "scissors"',
      'rockPaperScissors("scissors") returns "rock"',
    ],
  },

  'find-the-total-length': {
    title: 'Find The Total Length',
    description: 'Create a function that finds the total length of all the string in an array combined.',
    instructions:
      'Create a function that takes in an array of strings. Return the length of all the strings in that array combined. In others words, the length of what the string would be if all elements of the array were combined into one long string.',
    testScriptCode: testScripts.findTheTotalLengthTestScript,
    startingCode: 'const totalLength = (strArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called totalLength',
      'Function returns a number',
      'totalLength(["Somebody", "once", "told", "me"]) returns 18',
      'totalLength(["the", "world", "is", "gonna", "roll", "me"]) return 21',
      'totalLength(["I", "aint", "the", "sharpest", "tool", "in", "the", "shed"]) returns 29',
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
  'largest-num-in-array': {
    title: 'Find Largest Number',
    description: 'Create a function that returns a the largest number from an array of integers.',
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
  'prime-number': {
    title: 'Prime Number',
    description: 'Create a function that determines wheter not a given number is a prime number.',
    instructions:
      'Create a function called isPrime that takes in an integer and returns true if that integer is prime or false if it is not prime.',
    testScriptCode: testScripts.primeNumberTestScript,
    startingCode: 'const isPrime = (num) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called isPrime',
      'function return a boolean',
      'isPrime(29) returns true',
      'isPrime(32) returns false',
      'isPrime(97) returns true',
      'isPrime(100) returns false',
      'isPrime(5851) returns true',
      'isPrime(5853) returns false',
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
      'Function returns an array',
      'sortArr([1, 2, 6, 4, 2]) returns [1, 2, 2, 4, 6]',
      'sortArr([10, -3, 2, -1, 7, 9]) returns [-3, -1, 2, 7, 9, 10]',
      'sortArr([-1, 1000, 10, 22, -22, 3]) returns [-22, -1, 3, 10, 22, 1000]',
    ],
  },
  'historical-day': {
    title: 'Historical Day',
    description: 'Create a function that takes a date string and returns what day of the week that date occured on.',
    instructions:
      'Create a function that takes in one arguement, a date string formatted like "10-19-1987", and returns what day of the week that date occured on.  Return values should be one of the follow: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.',
    testScriptCode: testScripts.historicalDayTestScript,
    startingCode: 'const findDay = (dateStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called findDay',
      'Function returns a string',
      'findDay("10-19-1987") returns "Monday"',
      'findDay("05-25-1977") returns "Wednesday',
      'findDay("07-21-1969") returns "Monday"',
      'findDay("06-29-2007") returns "Friday"',
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
  'calculate-the-tip': {
    title: 'Tip Calculator',
    description: 'Create function that determines how much tip should be left on a meal dining out.',
    instructions:
      'Create a function that takes in two arguments, the meal price (a string, ex. "$24.94") and the tip percent (a string, ex. "20%"), and returns the amount the tip should be. This amout should be return as a string in dollar format (ex. "$5.23", $10.00"). Include two digits for the decimal place even if they are 0.',
    testScriptCode: testScripts.calculateTheTipTestScript,
    startingCode: 'const tipCalc = (mealPrice, tipPercent) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called tipCalc',
      'tipCalc returns a string',
      'tipCalc("$25.97", "20%") returns $5.19',
      'tipCalc("$43.28", "21%") returns $9.09',
      'tipCalc("$12.63", "18%") returns $2.27',
      'tipCalc("$101.73", "25%") returns $25.43',
      'tipCalc("$10.91", "5%") retuns $0.55',
    ],
  },
  'remove-duplicates-array': {
    title: 'Remove Duplicates From Array',
    description: 'Create a function that removes the duplicate values from a given array.',
    instructions:
      'Create a function that takes in a single argument, an array, and returns an array with all the duplicates removed. For the purpose of this problem, you can return a new array or the orignal one modified, your choice.',
    testScriptCode: testScripts.removeDuplicatesArrTestScript,
    startingCode: 'const removeDuplicates = (arr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called removeDuplicates',
      'Function returns an array',
      'removeDuplcates([1, 2, 1, 3, 2, 3, 4]) returns [1, 2, 3, 4]',
      'removeDuplcates(["Sam", "Frodo", "Sam", "Gollum", "Gollum", "Aragon"]) returns ["Sam", "Frodo", "Gollum", "Aragon"]',
      'removeDuplcates([10, 10, "test", "test", 73, "73"]) returns [10, "test", 73, "73"]',
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

  'count-unique-values': {
    title: 'Count The Unique Values',
    description: 'Create a function that counts the unique values in an array',
    instructions:
      'Create a function that takes in one argument, an array, and returns an object. The return object will contains keys of all the unique items in that array with values that are the number of time that unique value occurs in the array.',
    testScriptCode: testScripts.countUniqueValuesTestScript,
    startingCode: 'const countUnique = (arr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User create a function called countUnique',
      'Function returns an object',
      'countUnique([1, 2, 1, 3, 4, 3, 3]) returns { 1: 2, 2: 1, 3: 3, 4: 1 }',
      'countUnique(["Pam", "Jim", "Michael", "Pam", "Toby", "Jim", "Jim", "Michael"]) returns { Pam: 2, Jim: 3, Michael: 2, Toby: 1 }',
      'countUnique(["test", 1, "test", 1, "test", 2, "test", 3]) returns { test: 4, 1: 2, 2: 1, 3: 1 }',
    ],
  },

  'tic-tac-toe': {
    title: 'Tic-Tac-Toe',
    description: 'Create a function that determines the winner (if there is one) in a game of tic-tac-toe.',
    instructions:
      'Create a function that takes in an array which contains three arrays (each array within the array represents one row of the tic-tac-toe board).  Using these arrays determine the winner or if the game was a tie. If X wins, return "X wins".  If O wins return "O wins".  If the game was a tie, return "tie". Note, values in the arrays can be "X", "O" or ""',
    testScriptCode: testScripts.ticTacToeTestScript,
    startingCode: 'const ticTacToe = (gameboard) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User create a function called ticTacToe',
      'Function returns a string',
      'ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["X", "O", "O"]]) returns "X wins"',
      'ticTacToe([["X", "O", "X"], ["O", "O", "X"], ["", "", "X"]]) returns "X wins"',
      'ticTacToe([["X", "X", "O"], ["X", "O", ""], ["O", "", ""]]) returns "O wins"',
      'ticTacToe([["O", "X", "X"], ["", "O", ""], ["X", "", "O"]]) returns "O wins"',
      'ticTacToe([["X", "", "O"], ["X", "O", ""], ["X", "O", "X"]]) returns "X wins"',
      'ticTacToe([["X", "O", "O"], ["O", "X", "X"], ["X", "X", "O"]]) returns "tie"',
    ],
  },
};
