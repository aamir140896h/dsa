function removeElement(arr, val) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== val) {
      arr[i] = arr[j];
      i++;
    }
  }
  return i;
}

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
const afterRemovedElement = removeElement(nums, val);
console.log(nums.slice(0, afterRemovedElement));
