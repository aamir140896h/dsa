function moveZeros(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) arr[index++] = arr[i];
  }
  while (index < arr.length) arr[index++] = 0;
  return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
