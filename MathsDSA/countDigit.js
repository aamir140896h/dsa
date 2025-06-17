function countDigits(n) {
  let count = 0;
  let rev = 0;
  let dup = n;
  while (n > 0) {
    let extractDigit = n % 10;
    rev = rev * 10 + extractDigit;
    count += 1;
    n = Math.floor(n / 10);
  }
  if (rev === dup) console.log("palindrome");
  else console.log("not a palindrome");

  console.log(count, rev);
}
countDigits(1331);
