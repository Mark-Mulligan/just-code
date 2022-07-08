import { saveToLocalStorage, checkItemComplete, getItemsComplete } from '../../../utils/localStorage';
import { object_equals } from '../../../utils/utilityFunctions';

describe('Local Storage Util functions', () => {
  describe('saveToLocalStorage', () => {
    it('should save an item to local storage with no previously saved items', () => {
      saveToLocalStorage('add-two-ints');
      let exerciseDataString = localStorage.getItem('exercisesComplete');

      if (exerciseDataString) {
        expect(JSON.parse(exerciseDataString)).toHaveProperty('add-two-ints');
        expect(JSON.parse(exerciseDataString)['add-two-ints']).toBe('completed');
      } else {
        fail('item failed to save to local storage');
      }
    });

    it('should be able to save item to local storage with previously saved item', () => {
      saveToLocalStorage('tic-tac-toe');
      let exerciseDataString = localStorage.getItem('exercisesComplete');

      if (exerciseDataString) {
        expect(JSON.parse(exerciseDataString)).toHaveProperty('tic-tac-toe');
        expect(JSON.parse(exerciseDataString)['tic-tac-toe']).toBe('completed');
        expect(JSON.parse(exerciseDataString)).toHaveProperty('add-two-ints');
        expect(JSON.parse(exerciseDataString)['add-two-ints']).toBe('completed');
      } else {
        fail('item failed to save to local storage');
      }
    });
  });

  describe('checkItemsComplete', () => {
    describe('with items in local storage', () => {
      it(`should return true for add-two-ints`, () => {
        expect(checkItemComplete('add-two-ints')).toBe(true);
      });

      it('should return false for even-or-odd', () => {
        expect(checkItemComplete('even-or-odd')).toBe(false);
      });
    });

    describe('with empty local storage', () => {
      it('should return false for add-two-ints', () => {
        localStorage.clear();
        expect(checkItemComplete('add-two-ints')).toBe(false);
      });
    });
  });

  describe('getItemsComplete', () => {
    it('should return an empty object if local storage is empty', () => {
      expect(object_equals(getItemsComplete(), {})).toBe(true);
    });

    it('should return object if exercises complete', () => {
      function mockWindow(search: string, pathname: string) {
        Object.defineProperty(global, 'window', {
          value: {
            location: {
              search,
              pathname,
            },
          },
          writable: true,
        });
      }
      mockWindow('test-word', '/');
      saveToLocalStorage('add-two-ints');
      expect(object_equals(getItemsComplete(), { 'add-two-ints': 'completed' })).toBe(true);
    });
  });
});
