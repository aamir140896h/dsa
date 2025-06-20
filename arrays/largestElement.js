function largestElement(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const arr = [1, 2, 3, 4, 5];
console.log(largestElement(arr));
