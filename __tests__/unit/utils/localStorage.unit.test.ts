import { saveToLocalStorage } from '../../../utils/localStorage';

describe('Local Storage Util functions', () => {
  describe('saveToLocalStorageFunction', () => {
    it('should save an item to local storage', () => {
      saveToLocalStorage('add-two-ints');
      let exerciseDataString = localStorage.getItem('exercisesComplete');

      if (exerciseDataString) {
        expect(JSON.parse(exerciseDataString)).toHaveProperty('add-two-ints');
        expect(JSON.parse(exerciseDataString)['add-two-ints']).toBe('completed');
      } else {
        fail('item failed to save to local storage');
      }
    });
  });
});
