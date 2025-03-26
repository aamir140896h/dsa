function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}
let arr = [10, 20, 30, 40];
console.log(reverseArray(arr));

function reverseString(str) {
  const arrayOfStr = str.split("");
  console.log(arrayOfStr);
  let left = 0;
  let right = arrayOfStr.length - 1;
  while (left < right) {
    [arrayOfStr[left], arrayOfStr[right]] = [
      arrayOfStr[right],
      arrayOfStr[left],
    ];
    left++, right--;
  }
  return arrayOfStr.join("");
}
console.log(reverseString("hello"));
