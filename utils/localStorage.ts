export const saveToLocalStorage = (currentExercise: string) => {
  if (!localStorage.getItem('exercisesComplete')) {
    localStorage.setItem('exercisesComplete', JSON.stringify({ [currentExercise]: 'completed' }));
  } else {
    let exerciseDataString = localStorage.getItem('exercisesComplete');

    if (exerciseDataString) {
      let exerciseData = JSON.parse(exerciseDataString);
      let updatedData = { ...exerciseData, [currentExercise]: 'completed' };
      localStorage.setItem('exercisesComplete', JSON.stringify(updatedData));
    }
  }
};

export const checkItemComplete = (currentItemKey: string): boolean => {
  if (localStorage.getItem('exercisesComplete')) {
    let exerciseDataString = localStorage.getItem('exercisesComplete');

    if (exerciseDataString) {
      let exercisesData = JSON.parse(exerciseDataString);
      return exercisesData.hasOwnProperty(currentItemKey);
    }
  }

  return false;
};

export const getItemsComplete = (): {} => {
  if (typeof window !== 'undefined') {
    let itemsComplete = localStorage.getItem('exercisesComplete');
    return typeof itemsComplete === 'string' ? JSON.parse(itemsComplete) : {};
  }

  return {};
};
