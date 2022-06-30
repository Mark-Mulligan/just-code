export const sortTheDatesSolution = `const sortDates = (inputArrDateStrs) => {
  return inputArrDateStrs.sort((a, b) => {
    return new Date(a) - new Date(b);
  });
};`;
