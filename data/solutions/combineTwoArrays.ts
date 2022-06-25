export const combineTwoArraysSolution = `const combineArrs = (arr1, arr2) => {
  // create a new array from the two input arrays
  let newArr = [...arr1, ...arr2];

  // if the type of the array is strings, then sort one way
  if (typeof newArr[0] === "string") {
    return newArr.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase())
    })
    // Else sort by number
  } else if (typeof newArr[0] === "number") {
    return newArr.sort((a, b) => {
      return a - b;
    })
  }
}`;
