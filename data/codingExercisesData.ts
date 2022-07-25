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
    problemExplanation:
      'This one is pretty straight forward. Add two numbers together and make sure to return the result.',
    hints: ['Make sure you are returning the result in the function.'],
    solutionCode: solutions.sumTwoIntSolution,
  },

  'even-or-odd': {
    title: 'Even or Odd?',
    description: 'Create a function that determines whether a number is even or odd.',
    instructions:
      'Create a function that takes in a single argument, an integer greater than 0, and returns "even" if the number is even or "odd" if the number is odd.',
    testScriptCode: testScripts.evenOrOddTestScript,
    startingCode: 'const evenOrOdd = (num) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.evenOrOddTestCriteria,
    problemExplanation:
      'There are only two possibilities for the numbers to be even or odd. Even numbers divided by 2 always equal zero.',
    hints: ['The % operator gives the remainder after a dividing operation. For example, 4 % 2 = 0 and 5 % 2 = 1.'],
    solutionCode: solutions.evenOrOddSolution,
  },

  'rock-paper-scissors': {
    title: 'Rock, Paper, Scissors',
    description: 'Create a function that returns the winning choice in rock, paper, scissors.',
    instructions:
      'Create a function that takes in a string ("rock", "paper", or "scissors") and returns the hand that would beat it. For example, if "rock" is passed in, the function would return "paper"',
    testScriptCode: testScripts.rockPaperScissorsTestScript,
    startingCode: 'const rockPaperScissors = (turn) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.rockPaperScissorsTestCriteria,
    problemExplanation:
      'Remember there are only 3 possible hands a player can play.  You will probably need to use a conditional statement (either an if or switch) to determine the answer based on the string passed to the function',
    hints: [
      'You should probably use if statements or switch statements.',
      'Remember you can use === to see if two strings equal one another',
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
    problemExplanation:
      'For this problem, you will need to combine the array of words into a string, then it should be easier get the total length of the string.',
    hints: [
      'You can combine an array of strings into a single string using the join() method.',
      'You can find the length of a string with .length.',
    ],
    solutionCode: solutions.findTheTotalLengthSolution,
  },

  'divide-and-round': {
    title: 'Divide and Round',
    description:
      'Create a function that takes two numbers and divides the first number by the second and rounds the result.',
    instructions:
      'Create a function called divide that takes in two numbers, num1 and num2. The function will divide num1 by num2 and return the result as a number rounded to the nearest hundredths',
    testScriptCode: testScripts.divideAndRoundTestScript,
    startingCode: 'const divide = (num1, num2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.divideAndRoundTestCriteria,
    problemExplanation:
      'The trickiest part about this problem is the rounding and order of operations. Make sure to first divide and then round the result of that division problem.',
    hints: [
      'Math.round() is usefully for rounding. However, you will need to use a modified version of it to round to the hundredths',
      `If you don't want to use math.round, you can use .toFixed(2). Just make sure to convert the result of the toFixed function to a number (toFixed returns a string).`,
    ],
    solutionCode: solutions.divideAndRoundSolution,
  },

  'reverse-string': {
    title: 'Reverse A String',
    description: 'Create a function that returns a string reversed.',
    instructions:
      'Create a function that takes in a single argument, a string, and returns a reversed version of that string.',
    testScriptCode: testScripts.reverseStringTestScript,
    startingCode: 'const reverseStr = (str) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.findTheTotalLengthTestCriteria,
    problemExplanation:
      'Take a string and reverse it.  Pretty straight forward. It may be easier to convert the string to a different data type.',
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
    problemExplanation:
      'You are given an array of integers. You need to return the largest integer from that array. Numbers can be positive, negative, or both.',
    hints: [
      'You will probably need a variable to store your largest number',
      'You will need to set the variable storing the largest number to an initial value in the array (instead of 0 incase all the numbers are negative)',
      'You will need to iterate through the entire array to check all numbers.',
    ],
    solutionCode: solutions.largestNumInArrSolution,
  },

  'add-numbers-in-range': {
    title: 'Add Numbers in Range',
    description: 'Create a function that adds all the numbers together in a given range.',
    instructions:
      'Create a function called addNumbersInRange that takes in two integers, startingNum and endingNum. The function should return the sum of all numbers in that range including the starting and ending number.',
    testScriptCode: testScripts.addNumbersInRangeTestScript,
    startingCode:
      'const addNumbersInRange = (startingNum, endingNum) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.addNumbersInRangeTestCriteria,
    problemExplanation:
      'Given a range, calculate the sum of all numbers in that range. The simplest way to go about this is using a for loop and a variable to keep track of the total.',
    hints: [
      'You can use a for loop to iterate through all the numbers in the range.',
      'Consider using a variable to keep track of the total,',
      'The for loop should start at the startingNum and end at the endingNum (not before)',
    ],
    solutionCode: solutions.addNumbersInRangeSolution,
  },

  'check-object-keys': {
    title: 'Check Key in Object',
    description: 'Create a function that determines wether a given key exist in an object.',
    instructions:
      'Create a function called hasKey that takes in an object, and targetKey as a string.  The function should return a boolean value based on whether the given object contains the target key.',
    testScriptCode: testScripts.checkObjectKeysTestScript,
    startingCode: 'const hasKey = (obj, targetKey) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.checkObjectKeysTestCriteria,
    problemExplanation:
      'Objects in javascript are made up of key, value pairs. In this case, we want to determine if a given key exists in a given object.',
    hints: [
      'the .hasOwnProperty(key: string) function can be called on objects in javascript.  It returns a boolean based on whether or not an object has a provided key.',
    ],
    solutionCode: solutions.checkObjectKeysSolution,
  },

  'longest-word': {
    title: 'Longest Word',
    description: 'Create a function that finds the longest word in a sentence.',
    instructions:
      'Create a function called longestWord, that takes in a string and returns the longest word in that string. The string will be a normal sentence that begins with a capital letter and ends with punctuation. If two of the longest words have the same length, return the first one that occurs in the sentence.',
    testScriptCode: testScripts.longestWordTestScript,
    startingCode: 'const longestWord = (sentence) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.longestWordTestCriteria,
    problemExplanation:
      'You will need to find the longest word in a the sentence. Words are separated by spaces so use this to you advantage. Remember the built in length property for strings and to removed the punctuation if the longest word happens to be at the end of the sentence.',
    hints: [
      `Make sure to get ride of the punctuation at the end of the sentence`,
      `Separate the sentence into words. You can use the split(' ') method to put all the words into an array`,
    ],
    solutionCode: solutions.longestWordSolution,
  },

  'fizz-buzz': {
    title: 'Fizz Buzz',
    description: 'The classic fizzBuzz exercise used in a lot of coding interviews.',
    instructions: `Write a function called fizzBuzz that returns an array of numbers from 1 to 100. If the number is number is a multiple of 3, it should print 'fizz'. If the number is a multiple of 5, it should print 'buzz'.  If the number is a multiple of 3 and 5, it should print 'fizzbuzz'. All other numbers should just be printed as numbers (ex 1 would print 1).`,
    testScriptCode: testScripts.fizzBuzzTestScript,
    startingCode: 'const fizzBuzz = () => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.fizzBuzzTestCriteria,
    problemExplanation:
      'This problem is a take on the famous fizzBuzz interview question. In this case, your function will return an array of number from 1 to 100, replacing those numbers divisible by 3 with "fizz", numbers divisible by 5 with "buzz", and numbers divisible by both 3 and 5 with "fizzbuzz".  All other numbers will be exist as themselves in the returned array.',
    hints: [
      'You will need to use an iterator to move from 1 to 100.',
      'You will need to push values into an array.',
      `The '%' operator can be used to see how much is left over after dividing by a number.`,
      'Remember in conditional statements, start with the most specific cases first.',
    ],
    solutionCode: solutions.fizzBuzzSolution,
  },

  // 'update-user': {
  //   title: 'Update User',
  //   description: 'Update a user in given collection.',
  //   instructions:
  //     'Create a function called updateUser that takes in two arguments, an array of user objects and an object with a userId and updated username. Users will be objects that have a userId and username.',
  //   testScriptCode: '',
  //   startingCode: '',
  //   testCriteria: [''],
  //   problemExplanation: '',
  //   hints: [''],
  //   solutionCode: '',
  // },

  'combine-two-objs': {
    title: 'Combine Two Objects',
    description: 'Create a function that combines two objects into a single one.',
    instructions:
      'Create a function called combineTwoObjs that takes in two objects, and returns a single object with all the key value pairs from each object. The function should return a new object. You can assume both objects will have unique key value pairs.',
    testScriptCode: testScripts.combineTwoObjsTestScript,
    startingCode: 'const combineTwoObjs = (obj1, obj2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.combineTwoObjsTestCriteria,
    problemExplanation:
      'There a different ways to do this problem, but the easiest will be using some of the ES6 syntax of working with objects.',
    hints: ['Make sure to return a new object.', 'Using the spread syntax will make this problem a lot easier.'],
    solutionCode: solutions.combineTwoObjsSolution,
  },

  'prime-number': {
    title: 'Prime Number',
    description: 'Create a function that determines wether or not a given number is a prime number.',
    instructions:
      'Create a function called isPrime that takes in an integer and returns true if that integer is prime or false if it is not prime.',
    testScriptCode: testScripts.primeNumberTestScript,
    startingCode: 'const isPrime = (num) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.primeNumberTestCriteria,
    problemExplanation:
      'A prime number is any number that is only divisible by itself and not any other number.  For example 17 is a prime number, 16 is not.',
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
    problemExplanation:
      'For this problem, you will need to go through an array and order the numbers in that array from least to greatest.',
    hints: [
      'You will need way to iterate over the array or you can use the sort method.',
      'If using the sort method, make sure to pass the correct arguments/function.',
    ],
    solutionCode: solutions.sortArrIntsSolution,
  },
  'historical-day': {
    title: 'Historical Day',
    description: 'Create a function that takes a date string and returns what day of the week that date occurred on.',
    instructions:
      'Create a function that takes in one argument, a date string formatted like "10-19-1987", and returns what day of the week that date occurred on.  Return values should be one of the follow: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.',
    testScriptCode: testScripts.historicalDayTestScript,
    startingCode: 'const findDay = (dateStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.historicalDayTestCriteria,
    problemExplanation:
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
    problemExplanation:
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
    problemExplanation:
      'For this problem, you will only be working with finding primitive values in arrays so you will need to some way to iterate through the array and can use === to compare values.',
    hints: [
      'You will need to iterate over the array (maybe a for loop for example)',
      'You can use === to compare primitive values.',
    ],
    solutionCode: solutions.findTheIndexSolution,
  },

  'largest-result': {
    title: 'Largest Result',
    description:
      'Given 2 numbers return the largest possible value of those two numbers when doing a standard arithmetic process (add, subtract, multiply, divide).',
    instructions:
      'Create a function called largestResult, that takes in two numbers and returns the largest value from those two numbers achieved through either addition, subtraction, division, or multiplication.',
    testScriptCode: testScripts.largestResultTestScript,
    startingCode: 'const largestResult = (timeStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.largestResultTestCriteria,
    problemExplanation:
      'For this problem, you will need to use the most common arithmetic expressions in javascript. You will need to check all the possible values from these expressions to see which yield the largest result.',
    hints: [
      'Make sure to check all possible arithmetic expressions.',
      `Some expressions will yield different answers depending on the order they are called (for example num1 / num2 may be different than num2 / num1).`,
    ],
    solutionCode: solutions.largestResultSolution,
  },

  'check-for-duplicates': {
    title: 'Check For Duplicates',
    description: 'Write a function that checks if there are any duplicate values in an array.',
    instructions:
      'Write a function called hasDuplicateValues that takes in an array and returns a boolean value of whether or not that array has duplicate values. Not, the arrays provided to function will only have primitive values (strings and numbers).',
    testScriptCode: testScripts.checkForDuplicatesTestScript,
    startingCode: 'const hasDuplicateValues = (arr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.checkForDuplicatesTestCriteria,
    problemExplanation:
      'Check an array for duplicate values. You will need to iterate through all possible combinations in an array to see two values match.',
    hints: [
      'Nested for loops can help you iterate through all possible combinations.',
      'You can use "===" to compare two primitive values for equality.',
      'As soon you find a duplicate value, you can return the result without having to continue going through the array',
    ],
    solutionCode: solutions.checkForDuplicatesSolution,
  },

  'military-time-conversion': {
    title: 'Military Time Conversion',
    description: 'Convert a given military time to standard time with AM/PM.',
    instructions:
      'Create a function that takes in a military time string, and returns a new formatted string with standard time using AM/PM',
    testScriptCode: testScripts.militaryTimeConversionTestScript,
    startingCode: 'const militaryTimeConverter = (timeStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.militaryTimeConversionTestCriteria,
    problemExplanation:
      'Given a string in military time, convert it to standard time. There are many different ways to do this.  Make sure to format the result exactly as the tests expect.',
    hints: [
      'It might help to separate the given time into hours, minutes, and seconds',
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
    startingCode: 'const sortDates = (inputArrDateStrings) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.sortTheDatesTestCriteria,
    problemExplanation:
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
    problemExplanation:
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
      'Create a function that takes in two arguments, the meal price (a string, ex. "$24.94") and the tip percent (a string, ex. "20%"), and returns the amount the tip should be. This amount should be return as a string in dollar format (ex. "$5.23", $10.00"). Include two digits for the decimal place even if they are 0.',
    testScriptCode: testScripts.calculateTheTipTestScript,
    startingCode: 'const tipCalc = (mealPrice, tipPercent) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.calculateTheTipTestCriteria,
    problemExplanation:
      'This problem will require you to convert strings to numbers and back to a string. It also deals with some import aspects in programming such as dealing with percents and money values.',
    hints: [
      'You will need to take the meal price and convert it to a number',
      'You will need to convert the tip percent to a floating point number (decimal)',
      'You will need to round the result to the nearest hundredth',
      'The result needs to be converted to money format (starts with a $ and always has two decimal numbers even if they are 0)',
    ],
    solutionCode: solutions.calculateTheTipSolution,
  },
  'remove-duplicates-array': {
    title: 'Remove Duplicates From Array',
    description: 'Create a function that removes the duplicate values from a given array.',
    instructions:
      'Create a function that takes in a single argument, an array, and returns an array with all the duplicates removed. For the purpose of this problem, you can return a new array or the original one modified, your choice.',
    testScriptCode: testScripts.removeDuplicatesArrTestScript,
    startingCode: 'const removeDuplicates = (arr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.removeDuplicatesArrTestCriteria,
    problemExplanation:
      'For this problem, you will need to take an array and remove extra occurrences of the same value. The result will be an array of only unique values.',
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
      "Create a function that takes in a string of days separated by commas (ex. 'mon,wed,tues').  Return a string of days sorted with Monday being the start of the week and sunday being the last. The possible values in the provided string are 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'.",
    testScriptCode: testScripts.sortTheDaysTestScript,
    startingCode: 'const sortDays = (dayStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.sortTheDaysTestCriteria,
    problemExplanation:
      'For this problem, you are given a comma separated string of abbreviated day values. You will need to sort these values and return the new sorted string. Note that for this problem, first value will be monday (not sunday which is the default in javascript). This problem will require several steps to complete and will require you to convert and format different data types.',
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
    problemExplanation:
      'This problem is a little more difficult then it may first appear. Remember, to compare two objects, you will need to do a deep comparison, make sure all keys and values are the same.',
    hints: [
      'Javascript objs are reference types so you can not compare them using ===',
      'You will need to look through all keys and values of each object directly.',
      'Do not forget to account for different data types such as Dates or Functions.',
    ],
    solutionCode: solutions.compareTwoObjsSolution,
  },

  'thanksgiving-date': {
    title: 'Thanksgiving Date',
    description: 'Create a function that returns the date that Thanksgiving will occur in a given year.',
    instructions:
      'Create a function called findThanksgivingDate.  This function will take in a number (a target year), and return a date object representing the date Thanksgiving will occur that year. Thanksgiving always occurs on the fourth Thursday in November each year.',
    testScriptCode: testScripts.thanksgivingDateTestScript,
    startingCode: 'const findThanksgivingDate = (year) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.thanksgivingDateTestCriteria,
    problemExplanation: `To solve this problem, you will need to create a date object given the year. You will also need to loop through the month of November to find the fourth Thursday in that month. Then you will need to return the corresponding date object.`,
    hints: [
      `Create a date object using the year and November 1st`,
      `Iterate through the month of november, create a new date during each iteration.`,
      `You can check what day each date is by using date.getDay()`,
      `You will need to keep track of all the thursday since Thanksgiving occurs on the 4th Thursday in November.`,
      `Make sure to return the date object.`,
    ],
    solutionCode: solutions.thanksgivingDateSolution,
  },

  'combine-two-arrays': {
    title: 'Combine Two Arrays',
    description: 'Create a function that combines two arrays into one array that is sorted.',
    instructions:
      'Create a function that takes in two arguments, both arrays, and combines them into a new array. This array must also be sorted. The arrays will have either strings or numbers so make sure the function can sort alphabetically. Also watch out for capitalization in the string values.',
    testScriptCode: testScripts.combineTwoArraysTestScript,
    startingCode: 'const combineArrs = (arr1, arr2) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.combineTwoArraysTestCriteria,
    problemExplanation:
      'For this problem you will need to combine the values from two arrays into a new single array.  This array will also be sorted.  The arrays will either be numbers or strings only.  Make sure to watch out for capitalization as well when putting an array in alphabetical order.',
    hints: [
      'You will need to first combine the two arrays into one',
      'After create the new combination array, you can use the javascript sort method to put the array in the correct order',
      'The sort method will need two different sorting logic passed into it.  One for sorting numbers and the other for sorting strings.',
      'Make sure to account for upper and lower case letters in your string sorting logic (maybe convert all letters to a single case).',
    ],
    solutionCode: solutions.combineTwoArraysSolution,
  },

  'snake-to-camel': {
    title: 'Snake Case to Camel Case',
    description: 'Create a function that converts a snake case string to a camel case string.',
    instructions:
      'Create a function that takes in one argument, a snake case string, and converts that string into camel case',
    testScriptCode: testScripts.snakeToCamelTestScript,
    startingCode: 'const snakeToCamel = (str) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.snakeToCamelTestCriteria,
    problemExplanation:
      'This problem will involve you having to work and manipulate strings in javascript. Most variables in python are formatted in snake case while javascript mainly uses camel case. By creating a function that converts snake case to camel case, you will not only learn about the two naming conventions, you will also get exposed to many of javascript tools for working with strings.',
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
    problemExplanation:
      'For this problem, you will basically be converting an array into a javascript object. The keys of that object will be the unique values from the array, and the values for those keys will be the number of times each of those values occurs in the array.',
    hints: [
      'You will need to create a variable to store your new object',
      'You can use the hasOwnProperty function on an object to see a certain key already exists on an object.',
      'You will need a way to initialize new properties to your result object.',
      'You can access property on any object dynamically using the bracket syntax (obj[targetKeyAsString]).',
    ],
    solutionCode: solutions.countUniqueValuesSolution,
  },

  'query-parameters': {
    title: 'Query Parameters',
    description: 'Create a function that extracts the query parameters from a search url.',
    instructions:
      'Create a function called extractQueryParams that gets the query parameters from a search and stores them in an object. For example "https://example?search=test&length=3" would return { search: "test", length: "3" }. Normally I would recommend using URL and URLSearchParams api. However, due to the sandbox environment, you will not have access to these javascript apis, so you have have to find a different way to get the query parameters.',
    testScriptCode: testScripts.queryParametersTestScript,
    startingCode: 'const extractQueryParams = (urlStr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.queryParametersTestCriteria,
    problemExplanation:
      'This problem simulates a real world example of working with a url string. For this, you will be tasked with removing the query parameters from the url string and putting them into a javascript object.',
    hints: [
      'Normally when working with url strings, javascript has some built in options.  However, for this problem, you will not be able to use those.',
      'Try using regex or some other method for search through the string.',
      'Begin by breaking off the search parameters in the string (everything after the ?)',
      'From this point note all search params will be stored as [key]=[value] in the string',
      'Each parameter grouping is separated by an "&" sign.',
    ],
    solutionCode: solutions.queryParametersSolution,
  },

  'largest-sum': {
    title: 'Largest Sum',
    description: 'Create a function that returns the largest sum possible in a given array.',
    instructions:
      'Create function that take in one argument, an array of integers and returns the largest sum possible using any two numbers from that array. You will also need to include the indexes of those two numbers in the given area. The result should be stored in a object with two keys, largestSum (a number) and indexes (a 2 value number[]).',
    testScriptCode: testScripts.largestSumTestScript,
    startingCode: 'const largestSum = (numberArr) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.largestSumTestCriteria,
    problemExplanation:
      'Create a function that returns the largest sum possible in a given array as well as the indexes for those two numbers. This problem will require you to iterate through all the combinations in an array. It will also require that you can manipulate objects since you have to return multiple values for this function. This problem is useful for showing you how to derive multiple pieces of data from a single function.',
    hints: [
      'There are two main approaches for solving this, either looping through every combination of two numbers in the array, or sorting the array.',
      'Looping through every combination will require nested for loops. You will also need to stored the largest sum in a variable.',
      `If you sort the array, you will need to use the last two numbers for the largest sum in the sorted array. Then you will need to search for those two number's indexes in the original array`,
    ],
    solutionCode: solutions.largestSumSolution,
  },

  'tic-tac-toe': {
    title: 'Tic-Tac-Toe',
    description: 'Create a function that determines the winner (if there is one) in a game of tic-tac-toe.',
    instructions:
      'Create a function that takes in an array which contains three arrays (each array within the array represents one row of the tic-tac-toe board).  Using these arrays determine the winner or if the game was a tie. If X wins, return "X wins".  If O wins return "O wins".  If the game was a tie, return "tie". Note, values in the arrays can be "X", "O" or ""',
    testScriptCode: testScripts.ticTacToeTestScript,
    startingCode: 'const ticTacToe = (gameBoard) => {\n  // Add Code Below\n\n\n  // Add Code Above\n}',
    testCriteria: testCriteria.ticTacToeTestCriteria,
    problemExplanation:
      'Given an array of arrays that represent a tic tac toe game board, write a function that determines the winner or if there is a tie.',
    hints: [
      'Tic tac toe can be won in 3 different ways, 3 in row, 3 in a column, or 3 diagonally.',
      'You will need to iterate though the arrays in different orders to look for either X to win or O to win',
      'If you use nested for loops, you can change the index values (e.g. gameBoard[firstIndexValue][secondIndexValue]) to iterate over the game board in different ways',
    ],
    solutionCode: solutions.ticTacToeSolution,
  },
};
