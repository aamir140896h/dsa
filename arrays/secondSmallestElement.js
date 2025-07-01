function secondSmallestElement(arr) {
  let smallest = arr[0];
  let sSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      sSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < sSmallest) {
      sSmallest = arr[i];
    }
  }
  return { smallest, sSmallest };
}
const arr = [1, 2, 3, 4, 7, 7, 1, 5];
console.log(secondSmallestElement(arr));

// const sortedArray = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= arr[i - 1]) {
//     } else {
//       return false;
//     }
//   }
//   return true;
// };
// const arr1 = [1, 2, 3, 4, 5];
// console.log(sortedArray(arr1));
