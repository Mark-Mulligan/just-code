export const queryParametersTests = () => {
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
    passed: object_equals(extractQueryParams('https://example?search=test&length=3'), { search: 'test', length: '3' }),
    result: JSON.stringify(extractQueryParams('https://example?search=test&length=3')),
  });
  testResults.push({
    test: 'extractQueryParams("https://mysearchwebsite?q=google&results=50&past=false") returns { q: "google", results: "50", past: "false" }',
    passed: object_equals(extractQueryParams('https://mysearchwebsite?q=google&results=50&past=false'), {
      q: 'google',
      results: '50',
      past: 'false',
    }),
    result: JSON.stringify(extractQueryParams('https://mysearchwebsite?q=google&results=50&past=false')),
  });
  testResults.push({
    test: 'extractQueryParams("https://weather?city=dallas&forecast=3day&unit=fahrenheit") returns { city: "dallas", forecast: "3day", unit: "fahrenheit" }',
    passed: object_equals(extractQueryParams('https://weather?city=dallas&forecast=3day&unit=fahrenheit'), {
      city: 'dallas',
      forecast: '3day',
      unit: 'fahrenheit',
    }),
    result: JSON.stringify(extractQueryParams('https://weather?city=dallas&forecast=3day&unit=fahrenheit')),
  });

  return testResults;
};
