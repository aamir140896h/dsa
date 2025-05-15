function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  console.log(mid, left, right);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
  let sortedArr = [];
  while (leftArr.length && rightArr.length) {
    console.log(leftArr[0], rightArr[0]);

    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));

// time complexcity  O(nlogn)
