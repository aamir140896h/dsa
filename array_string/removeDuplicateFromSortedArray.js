const removeDuplicateFromSortedArray = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

const arr = [1, 1, 2, 2, 3, 4, 4, 5];
const newLength = removeDuplicateFromSortedArray(arr);
console.log(arr.slice(0, newLength));
