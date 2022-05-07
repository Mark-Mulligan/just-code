export const alphabetizeNamesSolution = `const alphabetizeNames = (nameList, sortBy) => {
  let opposite = sortBy === 'last' ? 'first' : 'last';

  return nameList.sort((a, b) => {
    if (a[sortBy].localeCompare(b[sortBy]) === 0) {
      return a[opposite].localeCompare(b[opposite]);
    }

    return a[sortBy].localeCompare(b[sortBy]);
  });
};`;
