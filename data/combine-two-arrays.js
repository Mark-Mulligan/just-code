const combineArrs = (arr1, arr2) => {
  // Add Code Below
  let newArr = [...arr1, ...arr2];

  if (typeof newArr[0] === 'number') {
    return newArr.sort((a, b) => a - b);
  }

  return newArr.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});;
  

  // Add Code Above
}
const runTests = () => {
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
      passed: combineArrs(arr1, arr2) !== arr1 || combineArrs(arr1, arr2) !== arr2,
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
  
  runTests();