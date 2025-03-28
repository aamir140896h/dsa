const findMaxProductofTwoElement = (arr) => {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
    if (arr[i] < min1) {
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] < min2) {
      min2 = arr[i];
    }
  }
  console.log(max1, max2, min1, min2);

  return { maxProduct: max1 * max2, minProduct: min1 * min2 };
};

let arr = [10, -20, 5, -7, 30, 8];
console.log(findMaxProductofTwoElement(arr));
