import { extractTestCriteria, createTestScriptString } from '../../../utils/testScripts';
import { sumTwoIntsTests } from '../../../data/testLogic/testScripts/sumTwoInt';
import { largestSumTests } from '../../../data/testLogic/testScripts/largestSum';
import { object_equals, largestSumReturnTypeCheck } from '../../../utils/utilityFunctions';
import { VM } from 'vm2';

describe('Test Script Util Functions', () => {
  describe('extractTestCriteriaFunction', () => {
    it('should return an array of strings', () => {
      let result = extractTestCriteria(sumTwoIntsTests());

      expect(Array.isArray(result)).toBe(true);
      result.forEach((item) => {
        expect(typeof item).toBe('string');
      });
    });

    it('should return an array the same length as number of testResults', () => {
      let testResults = sumTwoIntsTests();
      let result = extractTestCriteria(sumTwoIntsTests());

      expect(testResults.length).toBe(result.length);
    });
  });

  describe('createTestScriptString', () => {
    it('should return a string', () => {
      let result = createTestScriptString(largestSumTests, [
        { name: 'object_equals', func: object_equals },
        { name: 'largestSumReturnTypeCheck', func: largestSumReturnTypeCheck },
      ]);

      expect(typeof result).toBe('string');
    });

    it('should compile successfully', () => {
      let testScriptString = createTestScriptString(largestSumTests, [
        { name: 'object_equals', func: object_equals },
        { name: 'largestSumReturnTypeCheck', func: largestSumReturnTypeCheck },
      ]);
      const vm = new VM({ timeout: 1000, sandbox: {} });
      // console.log('testScriptString', testScriptString);

      let error = undefined;

      try {
        vm.run(`const largestSum = () => {}\n${testScriptString}`);
      } catch (err: any) {
        error = err;
      }

      expect(error).toBe(undefined);
    });
  });
});
