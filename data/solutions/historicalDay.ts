export const historicalDaySolution = `const findDay = (dateStr) => {
  let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let givenDate = new Date(dateStr);
  let dayNum = givenDate.getDay();

  return weekDays[dayNum];
}`;
