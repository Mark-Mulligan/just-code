import { createTestScriptString } from '../../../utils/testScripts';
import { extractTestCriteria } from '../../../utils/testScripts';
import { TestResult } from '../../../types';

const findThanksgivingDate = (year: number) => {
  let numberOfThursdays = 0;
  let thanksgivingDate;

  for (let day = 1; day < 31; day++) {
    let date = new Date(`11-${day}-${year}`);

    if (date.getDay() === 4) {
      numberOfThursdays++;
    }

    if (numberOfThursdays === 4) {
      thanksgivingDate = date;
      break;
    }
  }

  return thanksgivingDate;
};

export const thanksgivingDateTests = () => {
  const testResults: TestResult[] = [];
  testResults.push({
    test: 'User created a function called findThanksgivingDate.',
    passed: typeof findThanksgivingDate === 'function',
    result: typeof findThanksgivingDate,
  });
  testResults.push({
    test: 'Function returns a date object',
    passed: Object.prototype.toString.call(findThanksgivingDate(2022)) === '[object Date]',
    result: JSON.stringify(findThanksgivingDate(2022)),
  });
  testResults.push({
    test: 'findThanksgivingDate(2022) returns \n2022-11-24T06:00:00.000Z',
    passed: findThanksgivingDate(2022)?.toDateString() === new Date('11-24-2022').toDateString(),
    result: JSON.stringify(findThanksgivingDate(2022)),
  });
  testResults.push({
    test: 'findThanksgivingDate(1980) returns \n 1980-11-27T06:00:00.000Z',
    passed: findThanksgivingDate(1980)?.toDateString() === new Date('11-27-1980').toDateString(),
    result: JSON.stringify(findThanksgivingDate(1980)),
  });
  testResults.push({
    test: 'findThanksgivingDate(1995) returns \n 1995-11-23T06:00:00.000Z',
    passed: findThanksgivingDate(1995)?.toDateString() === new Date('11-23-1995').toDateString(),
    result: JSON.stringify(findThanksgivingDate(1995)),
  });
  testResults.push({
    test: 'findThanksgivingDate(2030) returns \n2030-11-28T06:00:00.000Z',
    passed: findThanksgivingDate(2030)?.toDateString() === new Date('11-28-2030').toDateString(),
    result: JSON.stringify(findThanksgivingDate(2030)),
  });

  return testResults;
};

export const thanksgivingDateTestScript = createTestScriptString(thanksgivingDateTests);
export const thanksgivingDateTestCriteria = extractTestCriteria(thanksgivingDateTests());
