import { CodingExerciseData } from '../types';
import { testScripts, tests } from './testLogic';
import { solutions } from './solutions';
import { extractTestCriteria } from '../utils/testScripts';

export const codingExercisesData: CodingExerciseData = {
  'sum-two-ints': {
    title: 'Sum Two Integers',
    description: 'Create a function that returns the sum of two integers.',
    instructions:
      'Create a function that takes in two arguments (num1 & num2 that will both be integers) and returns a number that is the sum of the two integers provided.',
    testScriptCode: testScripts.sumTwoIntsTestScript,
    startingCode: 'const sum = (num1, num2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: extractTestCriteria(tests.sumTwoIntsTests()),
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
    problemExplaination:
      'You are given an array of intergers. You need to return the largest interger from that array. Numbers can be positive, negative, or both.',
    hints: [
      'You will probably need a variable to store your largest number',
      'You will need to set the variable storing the largest number to an intial value in the array (instead of 0 incase all the numbers are negative)',
      'You will need to iterate through the entire array to check all numbers.',
    ],
    solutionCode: solutions.largestNumInArrSolution,
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
    problemExplaination:
      'There are a few parts of this problem that need to be worked out.  First, you will need to find some sort of sorting method.  Then, you will need to iterate over an array of objects.  Lastly, you will need some condition that if two names are the same, you can sort by the other name.',
    hints: [
      'Maybe try using the built in sort() method for javascript.',
      'You can use the javascript localeCompare() to compare two strings for alphabetic order.',
      'You can use the second argument in the function to index the object.',
    ],
    solutionCode: solutions.alphabetizeNamesSolution,
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
    problemExplaination:
      'For this problem, you will only be working with finding primitive values in arrays so you will need to some way to iterate through the array and can use === to comapre values.',
    hints: [
      'You will need to iterate over the array (maybe a for loop for example)',
      'You can use === to compare primative values.',
    ],
    solutionCode: solutions.findTheIndexSolution,
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
    problemExplaination:
      'Given a string in military time, convert it to standard time. There are many different ways to do this.  Make sure to format the result exactly as the tests expect.',
    hints: [
      'It might help to seperate the given time into hours, minutes, and seconds',
      'You should convert the string values to numbers to make them easier to work with',
      'Conditionals will help to determine things such as AM/PM or leading 0s (example being 9 seconds on a time which would convert to 09)',
      'Make sure the result is converted back to a string',
    ],
    solutionCode: solutions.militaryTimeConversionSolution,
  },
  'sort-the-dates': {
    title: 'Sort The Dates',
    description: 'Create a function that puts an array of dates in order from earliest to latest.',
    instructions:
      'Create a function that takes in an array of date strings (formatted like "12-25-2018") and return an array of those same dates in order from earliest to latest.',
    testScriptCode: testScripts.sortTheDatesTestScript,
    startingCode: 'const sortDates = (inputArrDateStrs) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User created a function called sortDates.',
      'Function returns an array.',
      'sortDates(["12-25-2018", "11-24-2018", "10-31-2018"]) returns ["10-31-2018", "11-24-2018", "12-25-2018"]',
      'sortDates(["4-1-2000", "4-1-2008", "4-1-1994"]) returns ["4-1-1994", "4-1-2000", "4-1-2008"]',
      'sortDates(["5-1-1990", "5-2-1990", "10-6-1980", "11-7-2000", "7-3-2030"]) \n returns ["10-6-1980", "5-1-1990", "5-2-1990", "11-7-2000", "7-3-2030"]',
    ],
    problemExplaination:
      'For this problem, you will need to take an array of date strings and sort them in order from earliest date to latest date.',
    hints: [
      'The javascript sort method would be a good way to sort the dates',
      'You will need to provide a function to the sort method in order for the dates to be sorted',
      'You will need to convert the sorted strings to javascript date objects in order to sort them.',
    ],
    solutionCode: solutions.sortTheDatesSolution,
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
    problemExplaination:
      'You are given a string and need to count how many times vowels occur in that string. Vowels in this case will be a,e,i,o,u (not counting y in this case).',
    hints: [
      'Converting the string into an array will make it easier to check if each individual character is a vowel (the javascript split method can be of use)',
      'You will need a variable to keep track of home vowels have been counted',
      'For a challenge, consider storing the possible vowel values in the form of an array or object, then you can check each character against that instead of using a bunch of conditional statements',
    ],
    solutionCode: solutions.countTheVowelsSolution,
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
      'tipCalc("$32.12", "19%") returns $6.10',
    ],
    problemExplaination:
      'This problem will require you to convert strings to numbers and back to a string. It also deals with some import aspects in programming such as dealing with percents and money values.',
    hints: [
      'You will need to take the meal price and convert it to a number',
      'You will need to convert the tip percent to a floating point number (decimal)',
      'You will need to round the result to the nearst hundredth',
      'The result needs to be converted to money format (starts with a $ and always has two decimal numbers even if they are 0)',
    ],
    solutionCode: solutions.calculateTheTipSolution,
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
    problemExplaination:
      'For this problem, you will need to take an array and remove extra occurances of the same value. The result will be an array of only unique values.',
    hints: [
      'There are many ways to do this problem, but using the javascript set type is probably the easiest.',
      'When using the javascript set type, you will need es6 spread syntax as well.',
    ],
    solutionCode: solutions.removeDuplicatesArrSolution,
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
    problemExplaination:
      'For this problem, you are given a comma seperated string of abbreviated day values. You will need to sort these values and return the new sorted string. Note that for this problem, first value will be monday (not sunday which is the default in javascript). This problem will require several steps to complete and will require you to convert and format different data types.',
    hints: [
      'You will need to find a way to give values to the day strings.',
      'The javascript split() and join() functions may be of use in this challenge.',
      'There are only 7 possible day values so use that to your advantage',
    ],
    solutionCode: solutions.sortTheDaysSolution,
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
    problemExplaination:
      'This problem is a little more difficult then it may first appear. Remember, to compare two objects, you will need to do a deep comparision, make sure all keys and values are the same.',
    hints: [
      'Javascript objs are reference types so you can not compare them using ===',
      'You will need to look through all keys and values of each object directly.',
      'Do not forget to account for different data types such as Dates or Functions.',
    ],
    solutionCode: solutions.compareTwoObjsSolution,
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
    problemExplaination:
      'For this problem you will need to combine the values from two arrays into a new single array.  This array will also be sorted.  The arrays will either be numbers or strings only.  Make sure to watch out for capitalization as well when putting an array in aplhabetical order.',
    hints: [
      'You will need to first combine the two arrays into one',
      'After create the new combination array, you can use the javascript sort method to put the array in the correct order',
      'The sort method will need two different sorting logic passed into it.  One for sorting numbers and the other for sorting strings.',
      'Make sure to account for upper and lower case letters in your string sorting logic (maybe convert all letters to a single case).',
    ],
    solutionCode: solutions.combineTwoArraysSolution,
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
    problemExplaination:
      'This problem will involve you having to work and manipulate strings in javascript. Most variables in python are formatted in snake case while javascript mainly uses camelcase. By creating a function that converts snake case to camelcase, you will not only learn about the two naming conventions, you will also get exposed to many of javascript tools for working with strings.',
    hints: [
      'regex (aka regular expressions) might be useful for solving this problem.',
      'Some of the inputs are not 100% correct versions of snake case so account for that.',
    ],
    solutionCode: solutions.snakeToCamelSolution,
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
    problemExplaination:
      'For this problem, you will basically be converting an array into a javascript object. The keys of that object will be the unique values from the array, and the values for those keys will be the number of times each of those values occurs in the array.',
    hints: [
      'You will need to create a variable to store your new object',
      'You can use the hasOwnProperty function on an object to see a certain key already exsists on an object.',
      'You will need a way to intialize new properties to your result object.',
      'You can access property on any object dynamically using the bracket syntax (obj[targetKeyAsString]).',
    ],
    solutionCode: solutions.countUniqueValuesSolution,
  },

  'query-parameters': {
    title: 'Query Parameters',
    description: 'Create a function that extracts the query paramters from a search url.',
    instructions:
      'Create a function called extractQueryParams that gets the query parameters from a search and stores them in an object. For example "https://example?search=test&length=3" would return { search: "test", length: "3" }. Normally I would recommend using URL and URLSearchParams api. However, due to the sandbox environment, you will not have access to these javascript apis, so you have have to find a different way to get the query parameters.',
    testScriptCode: testScripts.queryParametersTestScript,
    startingCode: 'const extractQueryParams = (urlStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: [
      'User create a function called extractQueryParams',
      'Function returns an object',
      'extractQueryParams("https://example?search=test&length=3") returns  { search: "test", length: "3" }',
      'extractQueryParams("https://mysearchwebsite?q=google&results=50&past=false") returns  { q: "google", results: "50", past: "false" }',
      'extractQueryParams("https://weather?city=dallas&forecast=3day&unit=fahrenheit") returns  { city: "dallas", forecast: "3day", unit: "fahrenheit" }',
    ],
    problemExplaination:
      'This problem simulates a real world example of working with a url string. For this, you will be tasked with removing the query paramters from the url string and putting them into a javascript object.',
    hints: [
      'Normally when working with url strings, javascript has some built in options.  However, for this problem, you will not be able to use those.',
      'Try using regex or some other method for search through the string.',
      'Begin by breaking off the search parameters in the string (everything after the ?)',
      'From this point note all search params will be stored as [key]=[value] in the string',
      'Each parameter grouping is seperated by an "&" sign.',
    ],
    solutionCode: solutions.queryParametersSolution,
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
    problemExplaination:
      'Given an array of arrays that represent a tic tac toe gameboard, write a function that determines the winner or if there is a tie.',
    hints: [
      'Tic tac toe can be won in 3 different ways, 3 in row, 3 in a column, or 3 diagonally.',
      'You will need to iterate though the arrays in different orders to look for either X to win or O to win',
      'If you use nested for loops, you can change the index values (e.g. gamboard[firstIndexValue][secondIndexValue]) to iterate over the gamboard in different ways',
    ],
    solutionCode: solutions.ticTacToeSolution,
  },
};
