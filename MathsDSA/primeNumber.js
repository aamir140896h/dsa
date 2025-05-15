function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }
  // for (let i = 2; i < n; i++) {   // // time complexcity  O(n)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // time complexcity  O(sqrt(n))
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(6));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(12));
console.log(isPrimeNumber(13));

// time complexcity  O(n)
