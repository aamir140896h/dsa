function leftRotateAnArrayByOne(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  arr[arr.length - 1] = temp;
  return arr;
}

// const arr = [1, 2, 3, 4, 5];
// console.log(leftRotateAnArrayByOne(arr));

// TC  O(n)
// SC  O(n)

// rotate by dth place

function reverseArray(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateByDthPlace(arr, d) {
  const n = arr.length;
  d = d % n;
  reverseArray(arr, 0, d - 1); // Reverse first dth elements
  reverseArray(arr, d, n - 1); // Reverse the rest
  reverseArray(arr, 0, n - 1); // Reverse whole array
  return arr;
}
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const d = 2;
console.log(rotateByDthPlace(arr1, d));

// function rotateRightByD(arr, d) {
//   const n = arr.length;
//   d = d % n;

//   reverseArray(arr, n - d, n - 1);
// }

// Optimal solution
// TC O(n)
// SC O(1)
