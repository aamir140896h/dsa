// const removeDuplicateFromSortedArray = (arr) => {
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[j] !== arr[i]) {
//       arr[i + 1] = arr[j];
//       i++;
//     }
//   }
//   return i + 1;
// };

// const arr = [1, 1, 2, 2, 3, 4, 4, 5];
// const newLength = removeDuplicateFromSortedArray(arr);
// console.log(arr.slice(0, newLength));

function removeDuplicateFromSortedArray(arr) {
  let result = [];
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}
const arr = [1, 2, 2, 3, 3, 4];
console.log(removeDuplicateFromSortedArray(arr));
