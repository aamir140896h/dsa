// let str1 = "Hello";
// let str2 = str1;
// str1 = "World";
// console.log(str1, str2);

// ? ✅ 1. Insertion
// Time Complexity: O(n) (Since strings are immutable, a new string is created)

// let str = "Hello";
// let newStr = str.slice(0, 2) + "y" + str.slice(2);
// console.log(newStr);

// ? ✅ 2. Deletion
// Time Complexity: O(n)

// let str = "Hello";
// let newStr = str.slice(0, 2) + str.slice(3);
// console.log(newStr);

// ? ✅ 3. Traversal
// Time Complexity: O(n)

// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// for (let char of str) {
//   console.log(char);
// }

// ? ✅ 4. Searching
// Time Complexity: O(n) for linear search

// let str = "Hello World";
// console.log(str.indexOf("W"));
// console.log(str.includes("Wo"));

// ? ✅ 5. Updating
// Time Complexity: O(n)

// let str = "Hello";
// let newStr = str.replace("H", "W");
// console.log(newStr);
