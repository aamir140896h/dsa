//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
// function pattern1(n) {
//   for (let i = 0; i < n; i++) {
//     let rows = "";
//     for (let j = 0; j < n; j++) {
//       rows += " *";
//     }
//     console.log(rows);
//   }
// }

//  *
//  * *
//  * * *
//  * * * *

// function pattern2(n) {
//   for (let i = 0; i < n; i++) {
//     let rows = "";
//     for (let j = 0; j < i; j++) {
//       rows += " *";
//     }
//     console.log(rows);
//   }
// }

// 1
// 12
// 123
// 1234
// 12345

// function pattern3(n) {
//   for (let i = 1; i <= n; i++) {
//     let rows = " ";
//     for (let j = 1; j <= i; j++) {
//       rows += j;
//     }
//     console.log(rows);
//   }
// }

// 1
// 22
// 333
// 4444
// 55555

// function pattern4(n) {
//   for (let i = 1; i <= n; i++) {
//     let rows = "";
//     for (let j = 1; j <= i; j++) {
//       rows += i;
//     }
//     console.log(rows);
//   }
// }

//  * * * * *
//  * * * *
//  * * *
//  * *
//  *

// function pattern5(n) {
//   for (let i = 0; i <= n; i++) {
//     let rows = "";
//     for (let j = 0; j < n - i; j++) {
//       rows += " *";
//     }
//     console.log(rows);
//   }
// }

// 12345
// 1234
// 123
// 12
// 1

// function pattern6(n) {
//   for (let i = 1; i <= n; i++) {
//     let rows = "";
//     for (let j = 1; j <= n - i + 1; j++) {
//       rows += j;
//     }
//     console.log(rows);
//   }
// }

//     *
//    ***
//   *****
//  *******
// *********

// function pattern7(n) {
//   for (let i = 0; i < n; i++) {
//     let rows = "";
//     // space
//     for (let j = 0; j < n - i - 1; j++) {
//       rows += " ";
//     }

//     // stars
//     for (let j = 0; j < 2 * i + 1; j++) {
//       rows += "*";
//     }
//     // space
//     for (let j = 0; j < n - i - 1; j++) {
//       rows += " ";
//     }
//     console.log(rows);
//   }
// }

// *********
//  *******
//   *****
//    ***
//     *

// function pattern8(n) {
//   for (let i = 0; i < n; i++) {
//     let rows = "";
//     // space
//     for (let j = 0; j < i; j++) {
//       rows += " ";
//     }

//     // stars
//     for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
//       rows += "*";
//     }
//     // space
//     for (let j = 0; j < i; j++) {
//       rows += " ";
//     }
//     console.log(rows);
//   }
// }

// to make pattern9  merge pattern7 and pattern8

// pattern9
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

// pattern7(5);
// pattern8(5);

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *
//  * * * *
//  * * *
//  * *
//  *

// function pattern10(n) {
//   for (let i = 1; i <= 2 * n - 1; i++) {
//     let stars = i;
//     let rows = "";
//     if (i > n) stars = 2 * n - i;
//     for (let j = 0; j < stars; j++) {
//       rows += " *";
//     }
//     console.log(rows);
//   }
// }

// 0
// 1 0
// 0 1 0
// 1 0 1 0

// function pattern11(n) {
//   for (let i = 0; i < n; i++) {
//     let start = i % 2 === 0 ? 1 : 0;
//     let rows = "";
//     for (let j = 0; j < i; j++) {
//       rows += start + " ";
//       start = 1 - start;
//     }
//     console.log(rows);
//   }
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// function pattern12(n) {
//   let num = 1;
//   for (let i = 1; i <= n; i++) {
//     let rows = "";
//     for (let j = 0; j < i; j++) {
//       rows += num++ + " ";
//     }
//     console.log(rows);
//   }
// }

// A
// A B
// A B C
// A B C D
// A B C D E

// function pattern13(n) {
//   for (let i = 1; i <= n; i++) {
//     let rows = "";
//     for (let j = 0; j < i; j++) {
//       rows += String.fromCharCode(65 + j) + " ";
//     }
//     console.log(rows);
//   }
// }
pattern13(5);
