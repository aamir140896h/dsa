function findDuplicateNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return -1;
}

// const nums = [1, 3, 4, 2, 2];
// const nums = [3, 1, 3, 4, 2];
const nums = [3, 3, 3, 3, 3];
console.log(findDuplicateNumber(nums));

// TC O(n^2)
// SC O(1)
