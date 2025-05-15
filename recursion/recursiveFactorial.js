function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));

const n = 50;
console.time("Naive Recursion");
console.log("Naive:", recursiveFactorial(n));
console.timeEnd("Naive Recursion");

// time complexcity  O(n)
