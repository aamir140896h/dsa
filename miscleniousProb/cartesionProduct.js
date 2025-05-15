function cartesioanProduct(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

const arr1 = [1, 2]; //m
const arr2 = [3, 4, 5]; //n
console.log(cartesioanProduct(arr1, arr2));
// time complexcity  O(m x n)
