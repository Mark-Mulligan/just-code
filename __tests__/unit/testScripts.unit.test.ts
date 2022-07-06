import { extractTestCriteria } from '../../utils/testScripts';
import { sumTwoIntsTests } from '../../data/testLogic/testScripts/sumTwoInt';

describe('Test Script Util Functions', () => {
  describe('extractTestCriteriaFunction', () => {
    it('should return an array of strings', () => {
      let result = extractTestCriteria(sumTwoIntsTests());

      expect(Array.isArray(result)).toBe(true);
      result.forEach((item) => {
        expect(typeof item).toBe('string');
      });
    });
  });
});
