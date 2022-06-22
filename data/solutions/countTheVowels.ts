export const countTheVowelsSolution = `const vowelCount = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let strArr = str.split('');
  
  let vowelCount = 0;

  strArr.forEach((char) => {
    let lowerCaseChar = char.toLowerCase();

    if (vowels.includes(lowerCaseChar)) {
      vowelCount++;
    }
  });

  return vowelCount;
}`;
