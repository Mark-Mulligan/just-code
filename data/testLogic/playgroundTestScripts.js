/* 
  testCriteria: [
      'User created a function called rockPaperScissors',
      'Function returns a string',
      'rockPaperScissors("rock") returns "paper"',
      'rockPaperScissors("paper") returns "scissors"',
      'rockPaperScissors("scissors") returns "rock"',
    ],
*/

const rockPaperScissors = (arr) => {
  return arr;
};

const runTests = () => {
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
    passed: rockPaperScissors('scissors') === 'scissors',
    result: rockPaperScissors('scissors'),
  });
  testResults.push({
    test: 'rockPaperScissors("scissors") returns "rock"',
    passed: rockPaperScissors('scissors') === 'rock',
    result: rockPaperScissors('scissors'),
  });

  return testResults;
};

runTests();
