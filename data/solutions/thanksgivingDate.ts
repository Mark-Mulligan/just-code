export const thanksgivingDateSolution = `const findThanksgivingDate = (year) => {
  let numberOfThursdays = 0;
  let thanksgivingDate;

  for (let day = 1; day < 31; day++) {
    let date = new Date(\`11-\${day}-\${year}\`);

    if (date.getDay() === 4) {
      numberOfThursdays++;
    }

    if (numberOfThursdays === 4) {
      thanksgivingDate = date;
      break;
    }
  }

  return thanksgivingDate;
};`;
