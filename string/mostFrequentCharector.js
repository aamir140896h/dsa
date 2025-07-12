function mostFrequentCharacter(str) {
  let freq = {};
  let max = 0;
  let char = "";
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
    if (freq[ch] > max) {
      max = freq[ch];
      char = ch;
    }
  }
  return char;
}

console.log(mostFrequentCharacter("javascript"));
