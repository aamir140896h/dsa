function armStrongNumber(n) {
  let number = n;
  let sum = 0;
  let digits = n.toString().length;
  console.log(digits);

  while (number > 0) {
    let digit = number % 10;
    sum = sum + Math.pow(digit, digits);
    number = Math.floor(number / 10);
  }
  if (sum === n) {
    console.log(n + " is armstrong number");
  } else {
    console.log(n + " is not armstrong number");
  }
}

armStrongNumber(1634);
armStrongNumber(153);
armStrongNumber(35);
