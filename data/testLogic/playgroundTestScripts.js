/* 
  [
      'User create a function called worldTimezone',
      'Function returns a string',
      `worldTimezone("04 Dec 1995 00:12:00 GMT", [
        { location: "Samoa", offset: 13},
        { location: "Seoul", offset: 9},
        { location: "Istanbul", offset: 2},
        { location: "London", offset: 0},
        { location: "Eastern Time (US & Canada)", offset: -5},
        { location: "Hawaii", offset: -10 },
        { location: "International Date Line West", offset: -12 },
      ]) returns { 
        "Samoa": "01:12:00 PM",
        "Seoul": "09:12:00 AM",
        "Istanbul": "02:12:00 AM",
        "London": "00:12:00 AM",
        "Eastern Time (US & Canada)": "07:12:00: PM",
        "Hawaii": "02:12:00 PM",
        "International Date Line West": "12:12:00 PM",
      }`,
      `worldTimezone("04 Dec 1995 23:25:00 GMT", [
        { location: "Samoa", offset: 13},
        { location: "Seoul", offset: 9},
        { location: "Istanbul", offset: 2},
        { location: "London", offset: 0},
        { location: "Eastern Time (US & Canada)", offset: -5},
        { location: "Hawaii", offset: -10 },
        { location: "International Date Line West", offset: -12 },
      ]) returns { 
        "Samoa": "12:25:00 PM",
        "Seoul": "08:25:00 AM",
        "Istanbul": "01:25:00 AM",
        "London": "11:25:00 PM",
        "Eastern Time (US & Canada)": "06:25:00: PM",
        "Hawaii": "01:25:00 PM",
        "International Date Line West": "11:25:00 AM",
      }`,
      `worldTimezone("04 Dec 1995 13:55:00 GMT", [
        { location: "Samoa", offset: 13},
        { location: "Seoul", offset: 9},
        { location: "Istanbul", offset: 2},
        { location: "London", offset: 0},
        { location: "Eastern Time (US & Canada)", offset: -5},
        { location: "Hawaii", offset: -10 },
        { location: "International Date Line West", offset: -12 },
      ])`,
      `worldTimezone("04 Dec 1995 06:10:00 GMT", [
        { location: "Samoa", offset: 13},
        { location: "Seoul", offset: 9},
        { location: "Istanbul", offset: 2},
        { location: "London", offset: 0},
        { location: "Eastern Time (US & Canada)", offset: -5},
        { location: "Hawaii", offset: -10 },
        { location: "International Date Line West", offset: -12 },
      ])`,
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

const worldTimezone = (num) => {
  return num;
};

const runTests = () => {
  const testResults = [];
  testResults.push({
    test: 'User create a function called extractQueryParams',
    passed: typeof worldTimezone === 'function',
    result: typeof worldTimezone,
  });
  testResults.push({
    test: 'Function returns an object',
    passed:
      typeof worldTimezone('04 Dec 1995 00:12:00 GMT', [
        { location: 'Samoa', offset: 13 },
        { location: 'Seoul', offset: 9 },
        { location: 'Istanbul', offset: 2 },
        { location: 'London', offset: 0 },
        { location: 'Eastern Time (US & Canada)', offset: -5 },
        { location: 'Hawaii', offset: -10 },
        { location: 'International Date Line West', offset: -12 },
      ]) === 'object',
    result: typeof worldTimezone('04 Dec 1995 00:12:00 GMT', [
      { location: 'Samoa', offset: 13 },
      { location: 'Seoul', offset: 9 },
      { location: 'Istanbul', offset: 2 },
      { location: 'London', offset: 0 },
      { location: 'Eastern Time (US & Canada)', offset: -5 },
      { location: 'Hawaii', offset: -10 },
      { location: 'International Date Line West', offset: -12 },
    ]),
  });
  testResults.push({
    test: 'extractQueryParams("https://example?search=test&length=3") returns { search: "test", length: "3" }',
    passed: deepEqual(worldTimezone('https://example?search=test&length=3'), { search: 'test', length: '3' }),
    result: deepEqual(worldTimezone('https://example?search=test&length=3')),
  });
  testResults.push({
    test: 'extractQueryParams("https://mysearchwebsite?q=google&results=50&past=false") returns { q: "google", results: "50", past: "false" }',
    passed: deepEqual(worldTimezone('https://mysearchwebsite?q=google&results=50&past=false'), {
      q: 'google',
      results: '50',
      past: 'false',
    }),
    result: deepEqual(worldTimezone('https://mysearchwebsite?q=google&results=50&past=false')),
  });
  testResults.push({
    test: 'extractQueryParams("https://weather?city=dallas&forecast=3day&unit=fahrenheit") returns { city: "dallas", forecast: "3day", unit: "fahrenheit" }',
    passed: deepEqual(worldTimezone('https://weather?city=dallas&forecast=3day&unit=fahrenheit'), {
      city: 'dallas',
      forecast: '3day',
      unit: 'fahrenheit',
    }),
    result: deepEqual(worldTimezone('https://weather?city=dallas&forecast=3day&unit=fahrenheit')),
  });

  return testResults;
};

runTests();
