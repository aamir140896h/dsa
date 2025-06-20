function isPalindromeString(str) {
  let newStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  console.log(newStr);
  let left = 0;
  let right = newStr.length - 1;
  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindromeString("racecar"));
console.log(isPalindromeString("A man, a plan, a canal: Panama"));
console.log(isPalindromeString("hello"));
console.log(isPalindromeString("No lemon, no melon"));
