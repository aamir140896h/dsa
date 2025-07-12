function findAllPairs(arr, target) {
  const result = [];
  const map = {};

  for (let num of arr) {
    let diff = target - num;
    if (map[diff]) {
      result.push([num, diff]);
    }
    map[num] = true;
  }
  return result;
}
const arr = [2, 4, 3, 5, 7, -1];
console.log(findAllPairs(arr, 6));
