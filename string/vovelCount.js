function vovelCount(str) {
  let count = 0;
  let vovel = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vovel.includes(str[i])) {
      count++;
    }
  }
  return count;
}

const input = "interview";
console.log(vovelCount(input));
