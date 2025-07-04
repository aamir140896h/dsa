function isAnagram(str1, str2) {
  const sortString = (str) => str.split("").sort().join("");
  return sortString(str1) === sortString(str2);
}

const str1 = "listen";
const str2 = "silent1";
console.log(isAnagram(str1, str2));
