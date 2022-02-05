export const testScripts = {
  sumTwoIntsTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called sum.',
      passed: typeof sum === 'function',
      result: typeof sum,
    });
    testResults.push({
      test: 'Function returns a number',
      passed: typeof sum(1, 2) === 'number',
      result: typeof sum(1, 2),
    });
    testResults.push({ test: 'sum(1, 2) returns 3', passed: sum(1, 2) === 3, result: sum(1, 2) });
    testResults.push({ test: 'sum(5, 10) returns 15', passed: sum(5, 10) === 15, result: sum(5, 10) });
    testResults.push({ test: 'sum(-1, -4) returns -5', passed: sum(-1, -4) === -5, result: sum(-1, -4) });
    return testResults;
  };
  
  runTests();`,
  evenOrOddTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function evenOrOdd.',
      passed: typeof evenOrOdd === 'function',
      result: typeof evenOrOdd,
    });
    testResults.push({
      test: 'Function returns a string.',
      passed: typeof evenOrOdd(11) === 'string',
      result: typeof evenOrOdd(11),
    });
    testResults.push({
      test: 'evenOrOdd(11) returns "odd"',
      passed: evenOrOdd(11) === 'odd',
      result: evenOrOdd(11),
    });
    testResults.push({
      test: 'evenOrOdd(30) returns "even"',
      passed: evenOrOdd(30) === 'even',
      result: evenOrOdd(30),
    });
    testResults.push({
      test: 'evenOrOdd(17) returns "odd"',
      passed: evenOrOdd(17) === 'odd',
      result: evenOrOdd(17),
    });
    testResults.push({
      test: 'evenOrOdd(22) returns "even"',
      passed: evenOrOdd(22) === 'even',
      result: evenOrOdd(22),
    });
  
    return testResults;
  };
  
  runTests();`,
  rockPaperScissorsTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function rockPaperScissors.',
      passed: typeof rockPaperScissors === 'function',
      result: typeof rockPaperScissors,
    });
    testResults.push({
      test: 'Function returns a string.',
      passed: typeof rockPaperScissors('rock') === 'string',
      result: typeof rockPaperScissors('rock'),
    });
    testResults.push({
      test: 'rockPaperScissors("rock") returns "paper"',
      passed: rockPaperScissors('rock') === 'paper',
      result: rockPaperScissors('rock'),
    });
    testResults.push({
      test: 'rockPaperScissors("paper") returns "scissors"',
      passed: rockPaperScissors('paper') === 'scissors',
      result: rockPaperScissors('paper'),
    });
    testResults.push({
      test: 'rockPaperScissors("scissors") returns "rock"',
      passed: rockPaperScissors('scissors') === 'rock',
      result: rockPaperScissors('scissors'),
    });
  
    return testResults;
  };
  
  runTests();`,
  findTheTotalLengthTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function totalLength.',
      passed: typeof totalLength === 'function',
      result: typeof totalLength,
    });
    testResults.push({
      test: 'Function returns a number.',
      passed: typeof totalLength(['this', 'is', 'a', 'test']) === 'number',
      result: typeof totalLength(['this', 'is', 'a', 'test']),
    });
    testResults.push({
      test: 'totalLength(["Somebody", "once", "told", "me"]) returns 18',
      passed: totalLength(['Somebody', 'once', 'told', 'me']) === 18,
      result: totalLength(['Somebody', 'once', 'told', 'me']),
    });
    testResults.push({
      test: 'totalLength(["the", "world", "is", "gonna", "roll", "me"]) return 21',
      passed: totalLength(['the', 'world', 'is', 'gonna', 'roll', 'me']) === 21,
      result: totalLength(['the', 'world', 'is', 'gonna', 'roll', 'me']),
    });
    testResults.push({
      test: 'totalLength(["I", "aint", "the", "sharpest", "tool", "in", "the", "shed"] returns 29',
      passed: totalLength(['I', 'aint', 'the', 'sharpest', 'tool', 'in', 'the', 'shed']) === 29,
      result: totalLength(['I', 'aint', 'the', 'sharpest', 'tool', 'in', 'the', 'shed']),
    });
  
    return testResults;
  };
  
  runTests();`,
  reversStringTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called reverseStr.',
      passed: typeof reverseStr === 'function',
      result: typeof reverseStr,
    });
    testResults.push({
      test: 'Function returns a string',
      passed: typeof reverseStr('test') === 'string',
      result: typeof reverseStr('test'),
    });
    testResults.push({
      test: 'reverseStr("Hello World") returns "dlroW olleH"',
      passed: reverseStr('Hello World') === 'dlroW olleH',
      result: reverseStr('Hellow World'),
    });
    testResults.push({
      test: 'reverseStr("Reverse Me") returns "eM esreveR"',
      passed: reverseStr('Reverse Me') === 'eM esreveR',
      result: reverseStr('Reverse Me'),
    });
    testResults.push({
      test: 'reverseStr("racecar") returns "racecar"',
      passed: reverseStr('racecar') === 'racecar',
      result: reverseStr('racecar'),
    });
  
    return testResults;
  };
  
  runTests();`,
  primeNumberTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function isPrime.',
      passed: typeof isPrime === 'function',
      result: typeof isPrime,
    });
    testResults.push({
      test: 'Function returns a boolean.',
      passed: typeof isPrime(11) === 'boolean',
      result: typeof isPrime(11),
    });
    testResults.push({
      test: 'isPrime(29) returns true',
      passed: isPrime(29) === true,
      result: JSON.stringify(isPrime(29)),
    });
    testResults.push({
      test: 'isPrime(32) returns false',
      passed: isPrime(32) === false,
      result: JSON.stringify(isPrime(32)),
    });
    testResults.push({
      test: 'isPrime(97) returns true',
      passed: isPrime(97) === true,
      result: JSON.stringify(isPrime(97)),
    });
    testResults.push({
      test: 'isPrime(100) returns false',
      passed: isPrime(100) === false,
      result: JSON.stringify(isPrime(100)),
    });
    testResults.push({
      test: 'isPrime(5851) returns true',
      passed: isPrime(5851) === true,
      result: JSON.stringify(isPrime(5851)),
    });
    testResults.push({
      test: 'isPrime(5853) returns false',
      passed: isPrime(5853) === false,
      result: JSON.stringify(isPrime(5853)),
    });
  
    return testResults;
  };
  
  runTests();`,

  sortArrayIntsTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called sortArr.',
      passed: typeof sortArr === 'function',
      result: typeof sortArr,
    });
    testResults.push({
      test: 'Function returns an array',
      passed: Array.isArray(sortArr([1, 4, 3, 2])),
      result: JSON.stringify(sortArr([1, 4, 3, 2])),
    });
    testResults.push({
      test: 'sortArr([1, 2, 6, 4, 2]) returns [1, 2, 2, 4, 6] ',
      passed: JSON.stringify(sortArr([1, 2, 6, 4, 2])) === JSON.stringify([1, 2, 2, 4, 6]),
      result: JSON.stringify(sortArr([1, 2, 6, 4, 2])),
    });
    testResults.push({
      test: 'sortArr([10, -3, 2, -1, 7, 9]) returns [-3, -1, 2, 7, 9, 10]',
      passed: JSON.stringify(sortArr([10, -3, 2, -1, 7, 9])) === JSON.stringify([-3, -1, 2, 7, 9, 10]),
      result: JSON.stringify(sortArr([10, -3, 2, -1, 7, 9])),
    });
    testResults.push({
      test: 'sortArr([-1, 1000, 10, 22, -22, 3]) returns [-22, -1, 3, 10, 22, 1000]',
      passed: JSON.stringify(sortArr([-1, 1000, 10, 22, -22, 3])) === JSON.stringify([-22, -1, 3, 10, 22, 1000]),
      result: JSON.stringify(sortArr([-1, 1000, 10, 22, -22, 3])),
    });
    return testResults;
  };
  
  runTests();`,
  removeDuplicatesArrTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called removeDuplicates.',
      passed: typeof removeDuplicates === 'function',
      result: typeof removeDuplicates,
    });
    testResults.push({
      test: 'Function returns an array.',
      passed: Array.isArray(removeDuplicates([1, 2, 2, 3, 4])),
      result: JSON.stringify(removeDuplicates([1, 2, 2, 3, 4])),
    });
    testResults.push({
      test: 'removeDuplcates([1, 2, 1, 3, 2, 3, 4]) returns [1, 2, 3, 4]',
      passed: JSON.stringify(removeDuplicates([1, 2, 1, 3, 2, 3, 4])) === JSON.stringify([1, 2, 3, 4]),
      result: JSON.stringify(removeDuplicates([1, 2, 1, 3, 2, 3, 4])),
    });
    testResults.push({
      test: 'removeDuplcates([1, 2, 1, 3, 2, 3, 4]) returns [1, 2, 3, 4]',
      passed:
        JSON.stringify(removeDuplicates(['Sam', 'Frodo', 'Sam', 'Gollum', 'Gollum', 'Aragon'])) ===
        JSON.stringify(['Sam', 'Frodo', 'Gollum', 'Aragon']),
      result: JSON.stringify(removeDuplicates(['Sam', 'Frodo', 'Sam', 'Gollum', 'Gollum', 'Aragon'])),
    });
    testResults.push({
      test: 'removeDuplcates(["Sam", "Frodo", "Sam", "Gollum", "Gollum", "Aragon"]) returns ["Sam", "Frodo", "Gollum", "Aragon"]',
      passed:
        JSON.stringify(removeDuplicates([10, 10, 'test', 'test', 73, '73'])) === JSON.stringify([10, 'test', 73, '73']),
      result: JSON.stringify(removeDuplicates([10, 10, 'test', 'test', 73, '73'])),
    });
  
    return testResults;
  };
  
  runTests();`,

  largestNumInArrayTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({ test: 'User created a function called largestNum.', passed: typeof largestNum === 'function', result: typeof largestNum });
    testResults.push({ test: 'Function returns a number', passed: typeof largestNum([1, 2, 3, 4]) === 'number', result: typeof largestNum([1, 2, 3, 4]) });
    testResults.push({
      test: 'largestNum([1, 8, 10, 5, 12]) returns 12',
      passed: largestNum([1, 8, 10, 5, 12]) === 12,
      result: largestNum([1, 8, 10, 5, 12])
    });
    testResults.push({
      test: 'largestNum([1, 8, 10, 5, 12]) returns 80',
      passed: largestNum([-4, 1, 80, 2, 1]) === 80,
      result: largestNum([-4, 1, 80, 2, 1])
    });
    testResults.push({
      test: 'largestNum([-5, -2, -1, -3, -20]) returns -1',
      passed: largestNum([-5, -2, -1, -3, -20]) === -1,
      result: largestNum([-5, -2, -1, -3, -20])
    });
    return testResults;
  };
  
  runTests();`,

  militaryTimeConversionTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function militaryTimeConverter.',
      passed: typeof militaryTimeConverter === 'function',
      result: typeof militaryTimeConverter,
    });
    testResults.push({
      test: 'Function returns a string.',
      passed: typeof militaryTimeConverter('22:33:06') === 'string',
      result: typeof militaryTimeConverter('22:33:06'),
    });
    testResults.push({
      test: 'militaryTimeConverter("22:33:06") returns "10:33:06 PM"',
      passed: militaryTimeConverter('22:33:06') === '10:33:06 PM',
      result: militaryTimeConverter('22:33:06'),
    });
    testResults.push({
      test: 'militaryTimeConverter("08:15:27") returns "08:15:27 AM"',
      passed: militaryTimeConverter('08:15:27') === '08:15:27 AM',
      result: militaryTimeConverter('08:15:27'),
    });
  
    testResults.push({
      test: 'militaryTimeConverter("15:45:00") returns "03:45:00 PM"',
      passed: militaryTimeConverter('15:45:00') === '03:45:00 PM',
      result: militaryTimeConverter('15:45:00'),
    });
    testResults.push({
      test: 'militaryTimeConverter("18:00:10") returns "06:00:10 PM"',
      passed: militaryTimeConverter('18:00:10') === '06:00:10 PM',
      result: militaryTimeConverter('18:00:10'),
    });
  
    return testResults;
  };
  
  runTests();`,

  countTheVowelsTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called vowelCount.',
      passed: typeof vowelCount === 'function',
      result: typeof vowelCount,
    });
    testResults.push({
      test: 'Function returns a number',
      passed: typeof vowelCount('abcdefg') === 'number',
      result: typeof vowelCount('abcdefg'),
    });
    testResults.push({
      test: 'vowelCount("This is a test sentence.") returns 7 ',
      passed: vowelCount('This is a test sentence.') === 7,
      result: vowelCount('This is a test sentence.'),
    });
    testResults.push({
      test: 'vowelCount("If you have not checked out FreeCodeCamp, you should. It is Awesome!!!") returns 25',
      passed: vowelCount('If you have not checked out FreeCodeCamp, you should. It is Awesome!!!') === 25,
      result: vowelCount('If you have not checked out FreeCodeCamp, you should. It is Awesome!!!'),
    });
    testResults.push({
      test: 'vowelCount("THIS IS UPPER CASE. this is lowercase.") returns 12',
      passed: vowelCount('THIS IS UPPER CASE. this is lowercase.') === 12,
      result: vowelCount('THIS IS UPPER CASE. this is lowercase.'),
    });
    return testResults;
  };
  
  runTests();`,
  calculateTheTipTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function tipCalc.',
      passed: typeof tipCalc === 'function',
      result: typeof tipCalc,
    });
    testResults.push({
      test: 'Function returns a string.',
      passed: typeof tipCalc('$25.97', '20%') === 'string',
      result: typeof tipCalc('$25.97', '20%'),
    });
    testResults.push({
      test: 'tipCalc("$25.97", "20%") returns $5.19',
      passed: tipCalc('$25.97', '20%') === '$5.19',
      result: tipCalc('$25.97', '20%'),
    });
    testResults.push({
      test: 'tipCalc("$43.28", "21%") returns $9.09',
      passed: tipCalc('$43.28', '21%') === '$9.09',
      result: tipCalc('$43.28', '21%'),
    });
    testResults.push({
      test: 'tipCalc("$12.63", "18%") returns $2.27',
      passed: tipCalc('$12.63', '18%') === '$2.27',
      result: tipCalc('$12.63', '18%'),
    });
    testResults.push({
      test: 'tipCalc("101.73", "25%") returns $25.43',
      passed: tipCalc('$101.73', '25%') === '$25.43',
      result: tipCalc('$101.73', '25%'),
    });
    testResults.push({
      test: 'tipCalc("$10.91", "5%") retuns $0.55',
      passed: tipCalc("$10.91", "5%") === '$0.55',
      result: tipCalc("$10.91", "5%"),
    });
  
    return testResults;
  };
  
  runTests();`,
  sortTheDaysTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called sortDays.',
      passed: typeof sortDays === 'function',
      result: typeof sortDays,
    });
    testResults.push({
      test: 'Function returns a string',
      passed: typeof sortDays('mon,wed,tues') === 'string',
      result: typeof sortDays('mon,wed,tues'),
    });
    testResults.push({
      test: 'sortDays("mon,wed,tues,sat") returns "mon,tues,wed,sat" ',
      passed: sortDays('mon,wed,tues,sat') === 'mon,tues,wed,sat',
      result: sortDays('mon,wed,tues,sat'),
    });
    testResults.push({
      test: 'sortDays("sun,sat,fri,thurs,wed,tues,mon") returns "mon,tues,wed,thurs,fri,sat,sun"',
      passed: sortDays('sun,sat,fri,thurs,wed,tues,mon') === 'mon,tues,wed,thurs,fri,sat,sun',
      result: sortDays('sun,sat,fri,thurs,wed,tues,mon'),
    });
    testResults.push({
      test: 'vowelCount("wed,tues,sat,fri") returns "tues,wed,fri,sat"',
      passed: sortDays('wed,tues,sat,fri') === 'tues,wed,fri,sat',
      result: sortDays('wed,tues,sat,fri'),
    });
    return testResults;
  };
  
  runTests();`,
  historicalDayTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function findDay.',
      passed: typeof findDay === 'function',
      result: typeof findDay,
    });
    testResults.push({
      test: 'Function returns a string.',
      passed: typeof findDay('10-19-1987') === 'string',
      result: typeof findDay('10-19-1987'),
    });
    testResults.push({
      test: 'findDay("10-19-1987") returns Monday',
      passed: findDay('10-19-1987') === 'Monday',
      result: findDay('10-19-1987'),
    });
    testResults.push({
      test: 'findDay("05-25-1977") returns Wednesday',
      passed: findDay('05-25-1977') === 'Wednesday',
      result: findDay('05-25-1977'),
    });
    testResults.push({
      test: 'findDay("07-21-1969") returns Monday',
      passed: findDay('07-21-1969') === 'Monday',
      result: findDay('07-21-1969'),
    });
    testResults.push({
      test: 'findDay("06-29-2007") returns "Friday"',
      passed: findDay('06-29-2007') === 'Friday',
      result: findDay('06-29-2007'),
    });
  
    return testResults;
  };
  
  runTests();`,
  findTheIndex1TestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called findIndex.',
      passed: typeof findIndex === 'function',
      result: typeof findIndex,
    });
    testResults.push({
      test: 'Function returns a string',
      passed: typeof findIndex([1, 2, 3, 4]) === 'number',
      result: typeof findIndex([1, 2, 3, 4]),
    });
    testResults.push({
      test: 'findIndex([0, 2, 10, -10, 3], -10) returns 3',
      passed: findIndex([0, 2, 10, -10, 3], -10) === 3,
      result: findIndex([0, 2, 10, -10, 3], -10),
    });
    testResults.push({
      test: 'findIndex(["testing", "test", "tester", "tested"], "test") returns 1',
      passed: findIndex(['testing', 'test', 'tester', 'tested'], 'test') === 1,
      result: findIndex(['testing', 'test', 'tester', 'tested'], 'test'),
    });
    testResults.push({
      test: 'findIndex([], "something") returns -1',
      passed: findIndex([], 'something') === -1,
      result: findIndex([], 'something'),
    });
    testResults.push({
      test: 'findIndex([]) returns -1',
      passed: findIndex(['apple', 'orange', 'grape'], 'pineapple') === -1,
      result: findIndex(['apple', 'orange', 'grape'], 'pineapple'),
    });
    return testResults;
  };
  
  runTests();`,

  compareTwoObjsTestScript: `const runTests = () => {
    const testResults = [];
    testResults.push({
      test: 'User created a function called compareObjs.',
      passed: typeof compareObjs === 'function',
      result: typeof compareObjs,
    });
    testResults.push({
      test: 'Function returns a boolean',
      passed: typeof compareObjs({ name: 'test' }, { name: 'test' }) === 'boolean',
      result: typeof compareObjs({ name: 'test' }, { name: 'test' }),
    });
    testResults.push({
      test: 'compareObjs({ name: "John", job: "Web Developer" }, { name: "Steve", job: "Welder" }) returns false',
      passed: compareObjs({ name: 'John', job: 'Web Developer' }, { name: 'Steve', job: 'Welder' }) === false,
      result: JSON.stringify(compareObjs({ name: 'John', job: 'Web Developer' }, { name: 'Steve', job: 'Welder' })),
    });
    testResults.push({
      test: 'compareObjs({ title: "The Witcher", streaming: "Netflix" }, { title: "The Witcher", streaming: "Netflix" })  returns true',
      passed:
        compareObjs({ title: 'The Witcher', streaming: 'Netflix' }, { title: 'The Witcher', streaming: 'Netflix' }) ===
        true,
      result: JSON.stringify(compareObjs({ title: 'The Witcher', streaming: 'Netflix' }, { title: 'The Witcher', streaming: 'Netflix' })),
    });
    testResults.push({
      test: 'compareObjs({ favorites: { food: "pizza", color: "green" }, age: 27 }, { age: 27, favorites: {food: "pizza", color: "green" }}) returns true',
      passed:
        compareObjs(
          { favorites: { food: 'pizza', color: 'green' }, age: 27 },
          { age: 27, favorites: { food: 'pizza', color: 'green' } },
        ) === true,
      result: JSON.stringify(compareObjs(
        { favorites: { food: 'pizza', color: 'green' }, age: 27 },
        { age: 27, favorites: { food: 'pizza', color: 'green' } },
      )),
    });
    return testResults;
  };
  
  runTests();`,
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
