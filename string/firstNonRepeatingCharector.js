function fisrtNonRepeatingCharechtor(str) {
  const charCount = {};
  for (let ch of str) {
    charCount[ch] = (charCount[ch] || 0) + 1;
  }

  for (let ch of str) {
    if (charCount[ch] === 1) return ch;
  }
}

const str = "aabbcdde";

console.log(
  "fisrtNonRepeatingCharechtor is:",
  fisrtNonRepeatingCharechtor(str)
);
