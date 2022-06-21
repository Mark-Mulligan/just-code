export const militaryTimeConversionSolution = `const militaryTimeConverter = (timeStr) => {
  timeArr = timeStr.split(':'); // convert to array

  let hours = Number(timeArr[0]);
  let minutes = Number(timeArr[1]);
  let seconds = Number(timeArr[2]);

  let timeValue = "";

  if (hours > 0 && hours <= 12) {
    timeValue= "" + hours;
  } else if (hours > 12) {
    timeValue= "" + (hours - 12);
  } else if (hours == 0) {
    timeValue= "12";
  }
 
  timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
  timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
  timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM

  return timeValue;
}`;
