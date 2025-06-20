function secondLargest(arr) {
  let largest = arr[0];
  let sLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      sLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > sLargest) {
      sLargest = arr[i];
    }
  }
  return { largest, sLargest };
}

const arr = [1, 2, 3, 4, 7, 7, 5];
console.log(secondLargest(arr));
