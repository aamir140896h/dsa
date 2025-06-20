function findthemaxminEleminAnarray(arr) {
  let maxElement = arr[0];
  let minElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }
  return { maxElement, minElement };
}

let arr = [12, 45, 2, 67, 34, 89, 23, 5, 78];
console.log(findthemaxminEleminAnarray(arr));
