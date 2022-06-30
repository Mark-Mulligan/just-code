import { TestResult } from '../types';

interface testUtilFunction {
  name: string;
  func: Function;
}

export const createTestScriptString = (testFunc: Function, utilFuncs?: testUtilFunction[]) => {
  let resultStr = '';
  if (utilFuncs && utilFuncs.length > 0) {
    utilFuncs.forEach((utilFunc) => {
      resultStr += `const ${utilFunc.name} = ${utilFunc.func.toString()} \n`;
    });
  }

  resultStr += `const runTests = ${testFunc.toString()} \n runTests();`;
  return resultStr;
};

export const extractTestCriteria = (testLogic: TestResult[]) => {
  return testLogic.map((testResult) => {
    return testResult.test;
  });
};
