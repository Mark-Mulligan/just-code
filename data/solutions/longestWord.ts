export const longestWordSolution = `const longestWord = (sentence) => {
  let sentenceNoPunctuation = sentence.slice(0, -1);
  let words = sentenceNoPunctuation.split(' ');
  let longestWord = words[0];

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
};`;
