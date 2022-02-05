/* 
  testCriteria: [
      'User create a function called extractQueryParams',
      'Function returns an object',
      'extractQueryParams("https://example?search=test&length=3") returns { search: "test", length: "3" }',
      'extractQueryParams("https://mysearchwebsite?q=google&results=50&past=false") returns  { q: "google", results: "50", past: "false" }',
      'extractQueryParams("https://weather?city=dallas&forecast=3day&unit=fahrenheit") returns  { city: "dallas", forecast: "3day", unit="fahrenheit" }',
    ],
*/

const deepEqual = (obj1, obj2) => {
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

const extractQueryParams = (num) => {
  return num;
};

const runTests = () => {
  const testResults = [];
  testResults.push({
    test: 'User create a function called extractQueryParams',
    passed: typeof extractQueryParams === 'function',
    result: typeof extractQueryParams,
  });
  testResults.push({
    test: 'Function returns an object',
    passed: typeof extractQueryParams('https://example?search=test&length=3') === 'object',
    result: typeof extractQueryParams('https://example?search=test&length=3'),
  });
  testResults.push({
    test: 'extractQueryParams("https://example?search=test&length=3") returns { search: "test", length: "3" }',
    passed: deepEqual(extractQueryParams('https://example?search=test&length=3'), { search: 'test', length: '3' }),
    result: deepEqual(extractQueryParams('https://example?search=test&length=3')),
  });
  testResults.push({
    test: 'extractQueryParams("https://mysearchwebsite?q=google&results=50&past=false") returns { q: "google", results: "50", past: "false" }',
    passed: deepEqual(extractQueryParams('https://mysearchwebsite?q=google&results=50&past=false'), {
      q: 'google',
      results: '50',
      past: 'false',
    }),
    result: deepEqual(extractQueryParams('https://mysearchwebsite?q=google&results=50&past=false')),
  });
  testResults.push({
    test: 'extractQueryParams("https://weather?city=dallas&forecast=3day&unit=fahrenheit") returns { city: "dallas", forecast: "3day", unit: "fahrenheit" }',
    passed: deepEqual(extractQueryParams('https://weather?city=dallas&forecast=3day&unit=fahrenheit'), {
      city: 'dallas',
      forecast: '3day',
      unit: 'fahrenheit',
    }),
    result: deepEqual(extractQueryParams('https://weather?city=dallas&forecast=3day&unit=fahrenheit')),
  });

  return testResults;
};

runTests();
