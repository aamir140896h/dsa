function climbingStair(n) {
  let noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
  // second approach
  //   if (n === 1) return 1;
  //   if (n === 2) return 2;
  //   let first = 1;
  //   let second = 2;
  //   for (let i = 3; i <= n; i++) {
  //     let current = first + second;
  //     first = second;
  //     second = current;
  //   }
  //   return second;
}

console.log(climbingStair(1));
console.log(climbingStair(2));
console.log(climbingStair(3));
console.log(climbingStair(4));
console.log(climbingStair(5));

// time complexcity  O(n)
