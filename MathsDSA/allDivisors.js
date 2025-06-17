function allDivisors(n) {
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
allDivisors(36);
