import { CodingExerciseData } from '../types';
import { testScripts } from './testLogic';
import { solutions } from './solutions';

export const codingExercisesData: CodingExerciseData = {
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
    problemExplaination:
      'This one is pretty straight forward. Add two numbers together and make sure to return the result.',
    hints: ['Make sure you are returning the result in the function.'],
    solutionCode: solutions.sumTwoIntSolution,
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
    problemExplaination:
      'There are only two possiblities for the numbers to be even or odd. Even numbers divided by 2 always equal zero.',
    hints: ['The % operator gives the remainder after a dividing operation. For example, 4 % 2 = 0 and 5 % 2 = 1.'],
    solutionCode: solutions.evenOrOddSolution,
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
    problemExplaination:
      'Remember there are only 3 possible hands a player can play.  You will probably need to use a conditional statement (either an if or switch) to determine the answer based on the string passed to the function',
    hints: [
      'You should probably use if statements or switch statements.',
      'Rember you can use === to see if two strings equal one another',
    ],
    solutionCode: solutions.rockPaperScissorsSolution,
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
    problemExplaination:
      'For this problem, you will need to combine the array of words into a string, then it should be easier get the total length of the string.',
    hints: [
      'You can combine an array of strings into a single string using the join() method.',
      'You can find the length of a string with .length.',
    ],
    solutionCode: solutions.findTheTotalLengthSolution,
  },

  'reverse-string': {
    title: 'Reverse A String',
    description: 'Create a function that returns a string reversed.',
    instructions:
      'Create a function that takes in a single argument, a string, and returns a reversed version of that string.',
    testScriptCode: testScripts.reverseStringTestScript,
    startingCode: 'const reverseStr = (str) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called reverseStr',
      'Function returns a string',
      'reverseStr("Hello World") returns "dlroW olleH"',
      'reverseStr("Reverse Me") returns "eM esreveR"',
      'reverseStr("racecar") returns "racecar"',
    ],
    problemExplaination:
      'Take a string and reverse it.  Pretty straight foward. It may be easier to convert the string to a different data type.',
    hints: ['Try converting the string into an array.', 'There is a method for reversing arrays'],
    solutionCode: solutions.reverseAStringSolution,
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

  'check-object-keys': {
    title: 'Check Key in Object',
    description: 'Create a function that determines wether a given key exsits in an object',
    instructions:
      'Create a function called hasKey that takes in an object, and targetKey as a string.  The function should return a boolean value based on whether the given object contains the target key.',
    testScriptCode: testScripts.checkObjectKeysTestScript,
    startingCode: 'const hasKey = (obj, targetKey) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called hasKey',
      'function returns a boolean',
      'hasKey({ firstName: "Mark", lastName: "Mulligan" }, "firstName") \n returns true',
      'hasKey({ label: "Program on", value: "1" }, "labels") \n returns false',
      'hasKey({ dates: ["12-4-2022", "12-11-2022"], amounts: [10, 20] }, "dates") \n returns true',
      'hasKey({ test: "Test", tester: "Tester" }, "testing") \n returns false',
    ],
    problemExplaination:
      'Objects in javascript are made up of key, value pairs. In this case, we want to determine if a given key exists in a given object.',
    hints: [
      'the .hasOwnProperty(key: string) function can be called on objects in javascript.  It returns a boolean based on whether or not an object has a provided key.',
    ],
    solutionCode: solutions.checkObjectKeysSolution,
  },

  'prime-number': {
    title: 'Prime Number',
    description: 'Create a function that determines wheter or not a given number is a prime number.',
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
    problemExplaination:
      'A prime number is any number that is only divisible by itself and not any of ther number.  For example 17 is a prime number, 16 is not.',
    hints: [
      'You will need to check to see if the num is divisible by any number smaller than it excluding 1.',
      'You can use the % operator to see if there is a remainder in a division problem. If a number is divisible by another number, the % operator will return 0.',
    ],
    solutionCode: solutions.primeNumberSolution,
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
    problemExplaination:
      'For this problem, you will need to go through an array and order the numbers in that array from least to greatest.',
    hints: [
      'You will need way to iterate over the array or you can use the sort method.',
      'If using the sort method, make sure to pass the correct arguments/function.',
    ],
    solutionCode: solutions.sortArrIntsSolution,
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
    problemExplaination:
      'This problem will require you to do a couple of different things. One, you will need to convert the date string to a date object.  Then use that date object to return a string matching the desired results.',
    hints: [
      'You can create a date object by using new Date(pass dateStr)',
      'dateObj.getDay() returns the day of the week for a given date as a number (0 is Sunday, 6 is Saturday)',
      'Maybe store the day of the week results as strings in an data structure that can be indexed.',
    ],
    solutionCode: solutions.historicalDaySolution,
  },

  'alphabetize-names': {
    title: 'Alphabetize Names',
    description: 'Create a function that returns a list of name objects alphabetized.',
    instructions:
      'Create a function alphabetizeNames that takes in an two arguments, an array of name objects ex. [{ firstName: string, lastName: string }, {...}]. and a string that represents which name to order by (either "first" or "last").  Return a new array container all the name objects in the correct alphabetic order. If grouping by last name and two names are the same, use the first name to decide the order.  Vice versa if ordering by first name.',
    testScriptCode: testScripts.alphabetizeNamesTestScript,
    startingCode: 'const alphabetizeNames = (nameList, sortBy) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called alphabetizeNames',
      'Function returns a array of name objects',
      `alphabetizeNames(
      [
        { first: 'Harry', last: 'Potter' },
        { first: 'Ron', last: 'Weasly' },
        { first: 'Draco', last: 'Malfoy' },
      ],
      'last',
    ), \n returns [
      { first: 'Draco', last: 'Malfoy'}, 
      { first: 'Harry', last: 'Potter' }, 
      { first: 'Ron', last: 'Weasly' }
    ]`,
      `alphabetizeNames(
      [
        { first: 'Michael', last: 'Scott' },
        { first: 'Pam', last: 'Beasly' },
        { first: 'Dwight', last: 'Schrute' },
        { first: 'Jim', last: 'Halpert' },
      ],
      'first',
    ), \n returns [
      { first: 'Dwight', last: 'Schrute' },
      { first: 'Jim', last: 'Halpert' },
      { first: 'Michael', last: 'Scott' },
      { first: 'Pam', last: 'Beasly' },
    ]`,
      `alphabetizeNames(
      [
        { first: 'John', last: 'Smith' },
        { first: 'Jane', last: 'Smith' },
        { first: 'Other', last: 'Name' },
        { first: 'Another', last: 'Name' },
      ],
      'last',
    ), \n returns [
      { first: 'Another', last: 'Name' },
      { first: 'Other', last: 'Name' },
      { first: 'Jane', last: 'Smith' },
      { first: 'John', last: 'Smith' },
    ],`,
      `alphabetizeNames(
      [
        { first: 'John', last: 'Stewart' },
        { first: 'John', last: 'Stamos' },
        { first: 'Chris', last: 'Evans' },
        { first: 'Chris', last: 'Stapleton' },
      ],
      'last',
    ), \n returns [
      { first: 'Chris', last: 'Evans' },
      { first: 'Chris', last: 'Stapleton' },
      { first: 'John', last: 'Stamos' },
      { first: 'John', last: 'Stewart' },
    ]`,
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
  'military-time-conversion': {
    title: 'Military Time Conversion',
    description: 'Convert a given military time to standard time with AM/PM.',
    instructions:
      'Create a function that takes in a military time string, and returns a new formated string with standard time using AM/PM',
    testScriptCode: testScripts.militaryTimeConversionTestScript,
    startingCode: 'const militaryTimeConverter = (timeStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called militaryTimeConverter',
      'Function returns a string',
      'militaryTimeConverter("22:33:06") returns "10:33:06 PM"',
      'militaryTimeConverter("08:15:27") returns "08:15:27 AM"',
      'militaryTimeConverter("15:45:00") returns "03:45:00 PM"',
      'militaryTimeConverter("18:00:10") returns "06:00:10 PM"',
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
      'Create a function that takes in two agruments, both arrays, and combines them into a new array. This array must also be sorted. The arrays will have either strings or numbers so make sure the function can sort alphabetically. Also watch out for capitalization in the string values.',
    testScriptCode: testScripts.combineTwoArraysTestScript,
    startingCode: 'const combineArrs = (arr1, arr2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called combineArrs',
      'Function returns an array',
      'The Function returns a new array (not a reference to arr1 or arr2)',
      'combineArrs([1, 3, 5], [2, 4, 6]) \n returns [1, 2, 3, 4, 5, 6]',
      'combineArrs(["dogs", "cats", "hampsters"], ["snakes", "rats", "chickens"]) \n returns ["cats", "chickens", "dogs", "hampsters", "rats", "snakes"])',
      'combineArrs([5, -3, -1, 8, 2], [10, 9, -2, -4, 7]) \n returns [-4, -3, -2, -1, 2, 5, 7, 8, 9, 10]',
      'combineArrs(["mIxedCasing", "mIXedCase", "MixedcaSes"], ["MIXEDCASED", "mistake", "Mistaken"]) \n returns ["mistake", "Mistaken", "mIXedCase", "MIXEDCASED", "MixedcaSes", "mIxedCasing"])',
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
      'snakeToCamel("python_style") \n returns "pythonStyle"',
      'snakeToCamel("did_you_use_regex") \n returns "didYouUseRegex"',
      'snakeToCamel("what_about_stack_overflow") \n returns "whatAboutStackOverflow"',
      'snakeToCamel("Bad_ExAMPle_Of_SnakE_Case") \n returns "badExampleOfSnakeCase"',
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

  'query-parameters': {
    title: 'Query Parameters',
    description: 'Create a function that extracts the query paramters from a search url.',
    instructions:
      'Create a function called extractQueryParams that gets the query parameters from and search and stores them in an object. For example "https://example?search=test&length=3" would return { search: "test", length: "3" }. Normally I would recommend using URL and URLSearchParams api. However, due to the sandbox environment, you will not have access to these javascript apis, so you have have to find a different way to get the query parameters.',
    testScriptCode: testScripts.queryParametersTestScript,
    startingCode: 'const extractQueryParams = (urlStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User create a function called extractQueryParams',
      'Function returns an object',
      'extractQueryParams("https://example?search=test&length=3") returns  { search: "test", length: "3" }',
      'extractQueryParams("https://mysearchwebsite?q=google&results=50&past=false") returns  { q: "google", results: "50", past: "false" }',
      'extractQueryParams("https://weather?city=dallas&forecast=3day&unit=fahrenheit") returns  { city: "dallas", forecast: "3day", unit: "fahrenheit" }',
    ],
  },

  'world-timezones': {
    title: 'World Timezones',
    description:
      'Create a function that takes a GMT time stamp and converts it to the local time for a given region in the world.',
    instructions:
      'Create a function that takes in 2 arguments, inputDateTime - a GMT time, locationArr - An array objects with two properties, location (string) and offset (integer indicating the locations offset from GMT).  For example, Dallas, TX in the United states is -6 hours from GMT time. Hint, GMT is in military time so you will need to convert that to AM/PM.  Also, pay close attention to the test criteria examples so you format your result object correctly.',
    testScriptCode: testScripts.queryParametersTestScript,
    startingCode:
      'const worldTimezone = (inputDateTime, locationArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User create a function called worldTimezone',
      'Function returns a string',
      `worldTimezone("04 Dec 1995 00:12:00 GMT", 
      [
      \b \b { location: "Samoa", offset: 13},
      \b \b { location: "Seoul", offset: 9},
      \b \b { location: "Istanbul", offset: 2},
      \b \b { location: "London", offset: 0},
      \b \b { location: "Eastern Time (US & Canada)", offset: -5},
      \b \b { location: "Hawaii", offset: -10 },
      \b \b { location: "International Date Line West", offset: -12 },
      ]) 
      returns { "Samoa": "01:12:00 PM",
        "Seoul": "09:12:00 AM",
        "Istanbul": "02:12:00 AM",
        "London": "00:12:00 AM",
        "Eastern Time (US & Canada)": "07:12:00: PM",
        "Hawaii": "02:12:00 PM",
        "International Date Line West": "12:12:00 PM",
      }`,
      `worldTimezone("04 Dec 1995 23:25:00 GMT", 
      [
       \b \b { location: "Samoa", offset: 13},
       \b \b { location: "Seoul", offset: 9},
       \b \b { location: "Istanbul", offset: 2},
       \b \b { location: "London", offset: 0},
       \b \b { location: "Eastern Time (US & Canada)", offset: -5},
       \b \b { location: "Hawaii", offset: -10 },
       \b \b { location: "International Date Line West", offset: -12 },
      ]) 
      returns { "Samoa": "12:25:00 PM",
        "Seoul": "08:25:00 AM",
        "Istanbul": "01:25:00 AM",
        "London": "11:25:00 PM",
        "Eastern Time (US & Canada)": "06:25:00: PM",
        "Hawaii": "01:25:00 PM",
        "International Date Line West": "11:25:00 AM",
      }`,
      `worldTimezone("04 Dec 1995 13:55:00 GMT", 
      [
        \b \b { location: "Samoa", offset: 13},
        \b \b { location: "Seoul", offset: 9},
        \b \b { location: "Istanbul", offset: 2},
        \b \b { location: "London", offset: 0},
        \b \b { location: "Eastern Time (US & Canada)", offset: -5},
        \b \b { location: "Hawaii", offset: -10 },
        \b \b { location: "International Date Line West", offset: -12 },
      ])`,
      `worldTimezone("04 Dec 1995 06:10:00 GMT", 
      [
        \b \b { location: "Samoa", offset: 13},
        \b \b { location: "Seoul", offset: 9},
        \b \b { location: "Istanbul", offset: 2},
        \b \b { location: "London", offset: 0},
        \b \b { location: "Eastern Time (US & Canada)", offset: -5},
        \b \b { location: "Hawaii", offset: -10 },
        \b \b { location: "International Date Line West", offset: -12 },
      ])`,
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
      'ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["X", "O", "O"]]) \n returns "X wins"',
      'ticTacToe([["X", "O", "X"], ["O", "O", "X"], ["", "", "X"]]) \n returns "X wins"',
      'ticTacToe([["X", "X", "O"], ["X", "O", ""], ["O", "", ""]]) \n returns "O wins"',
      'ticTacToe([["O", "X", "X"], ["", "O", ""], ["X", "", "O"]]) \n returns "O wins"',
      'ticTacToe([["X", "", "O"], ["X", "O", ""], ["X", "O", "X"]]) \n returns "X wins"',
      'ticTacToe([["X", "O", "O"], ["O", "X", "X"], ["X", "X", "O"]]) \n returns "tie"',
    ],
  },
};
