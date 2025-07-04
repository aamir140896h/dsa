function missingNumber(arr) {
  const n = arr.length + 1;
  console.log(n);

  let expectedSum = (n * (n + 1)) / 2;
  console.log(expectedSum);
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  const missingNumberIs = expectedSum - actualSum;
  return missingNumberIs;
}

const arr = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(missingNumber(arr));
