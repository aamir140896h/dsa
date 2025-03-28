// const mergeTwoSortedArray = (arr1, arr2) => {
//   let mergedArray = [...arr1, ...arr2];
//   console.log(mergedArray);
//   for (let i = 0; i < mergedArray.length; i++) {
//     for (j = i + 1; j < mergedArray.length; j++) {
//       if (mergedArray[i] > mergedArray[j]) {
//         let temp = mergedArray[i];
//         mergedArray[i] = mergedArray[j];
//         mergedArray[j] = temp;
//       }
//     }
//   }
//   return mergedArray;
// };

const mergeTwoSortedArray = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);
  return result;
};

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(mergeTwoSortedArray(arr1, arr2));
