import { CodingExerciseData } from '../types';
import { testScripts, testCriteria } from './testLogic';
import { solutions } from './solutions';

export const codingExercisesData: CodingExerciseData = {
  'sum-two-ints': {
    title: 'Sum Two Integers',
    description: 'Create a function that returns the sum of two integers.',
    instructions:
      'Create a function that takes in two arguments (num1 & num2 that will both be integers) and returns a number that is the sum of the two integers provided.',
    testScriptCode: testScripts.sumTwoIntsTestScript,
    startingCode: 'const sum = (num1, num2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.sumTwoIntsTestCriteria,
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
    testCriteria: testCriteria.evenOrOddTestCriteria,
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
    testCriteria: testCriteria.rockPaperScissorsTestCriteria,
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
    testCriteria: testCriteria.findTheTotalLengthTestCriteria,
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
    testCriteria: testCriteria.findTheTotalLengthTestCriteria,
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
    testCriteria: testCriteria.largestNumInArrayTestCriteria,
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
    description: 'Create a function that determines wether a given key exsits in an object.',
    instructions:
      'Create a function called hasKey that takes in an object, and targetKey as a string.  The function should return a boolean value based on whether the given object contains the target key.',
    testScriptCode: testScripts.checkObjectKeysTestScript,
    startingCode: 'const hasKey = (obj, targetKey) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.checkObjectKeysTestCriteria,
    problemExplaination:
      'Objects in javascript are made up of key, value pairs. In this case, we want to determine if a given key exists in a given object.',
    hints: [
      'the .hasOwnProperty(key: string) function can be called on objects in javascript.  It returns a boolean based on whether or not an object has a provided key.',
    ],
    solutionCode: solutions.checkObjectKeysSolution,
  },
  'fizz-buzz': {
    title: 'Fizz Buzz',
    description: 'The classic fizzbuzz exercise used in a lot of coding interviews.',
    instructions: `Write a function called fizzBuzz that returns an array of numbers from 1 to 100. If the number is number is a multiple of 3, it should print 'fizz'. If the number is a multiple of 5, it shuld print 'buzz'.  If the number is a multiple of 3 and 5, it should print 'fizzbuzz'. All other numbers should just be printed as numbers (ex 1 would print 1).`,
    testScriptCode: testScripts.fizzBuzzTestScript,
    startingCode: 'const fizzBuzz = () => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.fizzBuzzTestCriteria,
    problemExplaination:
      'This problem is a take on the famous fizzBuzz interview question. In this case, your function will return an array of number from 1 to 100, replacing those numbers divisible by 3 with "fizz", numbers divisible by 5 with "buzz", and numbers divisible by both 3 and 5 with "fizzbuzz".  All other numbers will be exsist as themselves in the returned array.',
    hints: [
      'You will need to use an iterator to move from 1 to 100.',
      'You will need to push values into an array.',
      `The '%' operator can be used to see how much is left over after dividing by a number.`,
      'Remember in conditional statements, start with the most speific cases first.',
    ],
    solutionCode: solutions.fizzBuzzSolution,
  },

  'prime-number': {
    title: 'Prime Number',
    description: 'Create a function that determines wheter or not a given number is a prime number.',
    instructions:
      'Create a function called isPrime that takes in an integer and returns true if that integer is prime or false if it is not prime.',
    testScriptCode: testScripts.primeNumberTestScript,
    startingCode: 'const isPrime = (num) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.primeNumberTestCriteria,
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
    testCriteria: testCriteria.sortArrayIntsTestCriteria,
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
    testCriteria: testCriteria.historicalDayTestCriteria,
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
    testCriteria: testCriteria.alphabetizeNamesTestCriteria,
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
    testCriteria: testCriteria.findTheIndex1TestCriteria,
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
    testCriteria: testCriteria.militaryTimeConversionTestCriteria,
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
    testCriteria: testCriteria.sortTheDatesTestCriteria,
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
    testCriteria: testCriteria.countTheVowelsTestCriteria,
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
    testCriteria: testCriteria.calculateTheTipTestCriteria,
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
    testCriteria: testCriteria.removeDuplicatesArrTestCriteria,
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
    testCriteria: testCriteria.sortTheDaysTestCriteria,
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
    testCriteria: testCriteria.compareTwoObjsTestCriteria,
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
    testCriteria: testCriteria.combineTwoArraysTestCriteria,
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
    testCriteria: testCriteria.snakeToCamelTestCriteria,
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
    testCriteria: testCriteria.countUniqueValuesTestCriteria,
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
    testCriteria: testCriteria.queryParamatersTestCriteria,
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
    testCriteria: testCriteria.ticTacToeTestCriteria,
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
