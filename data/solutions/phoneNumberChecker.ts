export const phoneNumberCheckerSolution = `const validPhoneNum = (phoneNum) => {
  // For case where a phone number 10 digits no spaces
  if (phoneNum.length === 10 && typeof Number(phoneNum) === "number") {
    return true;
  }
  
  // works for all scenarios other than 10 digits only
  let phoneNumberRegex = ${/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/};
  return phoneNumberRegex.test(phoneNum);
}`;
