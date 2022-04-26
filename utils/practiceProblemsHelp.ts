export const stringifyExerciseSolution = (functionName: string, solution: Function) => {
  return `const ${functionName} = ${solution.toString()}`;
};
