function longestWord(str) {
  let word = "";
  let longestWord = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
      console.log(word.length, ":", longestWord.length);

      if (word.length > longestWord.length) longestWord = word;
      word = "";
    } else {
      word += str[i];
    }
  }
  return longestWord;
}

const str = "TCS Digital interview  is going well preparation";

console.log(longestWord(str));
