export const sortTheDaysSolution = `const sortDays = (dayStr) => {
  // All possible day values in correct order
  let dayValues = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

  // split the day string into an array to make it easier to work with
  let dayArr = dayStr.split(',');
  let resultArr = [];

  // Iterate over all the possible day values.  If they exsist in our given dayArr, push them to
  // resultArr. This will put the values in order.
  for (let i = 0; i < dayValues.length; i++) {
    if (dayArr.includes(dayValues[i])) {
      resultArr.push(dayValues[i])
    }
  }

  // join the new array we created to format the anwser to a single comma seperated string
  return resultArr.join(',');
}`;
