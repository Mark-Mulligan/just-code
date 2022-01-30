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
      test: 'combineArrs(["dogs", "cats", "hampsters"], ["snakes", "rats", "chickens"]) returns [1, 2, 3, 4, 5, 6]',
      passed:
        JSON.stringify(combineArrs(['dogs', 'cats', 'hampsters'], ['snakes', 'rats', 'chickens'])) ===
        JSON.stringify(['cats', 'chickens', 'dogs', 'hampsters', 'rats', 'snakes']),
      result: JSON.stringify(combineArrs(['dogs', 'cats', 'hampsters'], ['snakes', 'rats', 'chickens'])),
    });
    testResults.push({
      test: 'combineArrs([1, 3, 5], [2, 4, 6]) returns [1, 2, 3, 4, 5, 6]',
      passed:
        JSON.stringify(combineArrs([5, -3, -1, 8, 2], [10, 9, -2, -4, 7])) ===
        JSON.stringify([-4, -3, -2, -1, 2, 5, 7, 8, 9, 10]),
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
