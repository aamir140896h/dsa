function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// time complexcity  O(2^n)

// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(6));

function memoizedFibonacci(n, memo = {}) {
  if (n < 2) return n;
  if (memo[n]) return memo[n];
  memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
  return memo[n];
}
// time complexcity  O(n)

function dpFibonacci(n) {
  if (n < 2) return n;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

// time complexcity  O(n)

const n = 7;

// console.time("Naive Recursion");
// console.log("Naive:", recursiveFibonacci(n));
// console.timeEnd("Naive Recursion");

console.time("Memoization");
console.log("Memoized:", memoizedFibonacci(n));
console.timeEnd("Memoization");

console.time("Bottom-Up DP");
console.log("DP:", dpFibonacci(n));
console.timeEnd("Bottom-Up DP");
