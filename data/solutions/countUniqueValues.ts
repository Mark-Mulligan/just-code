export const countUniqueValuesSolution = `const countUnique = (arr) => {
  let result = {};

  arr.forEach((item) => {
    if (result.hasOwnProperty(item)) {
      result[item] = result[item] + 1;
    } else {
      result[item] = 1;
    }
  });

  return result;
};`;
