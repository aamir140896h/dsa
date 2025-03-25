// let arr = [1, 2, 3, 4];
// arr[arr.length] = 5;
// console.log(arr);

// ? ✅ 1. Insertion
// Best case: O(1) (Adding at the end)
// Worst case: O(n) (Adding in the middle or beginning due to shifting)

// let arr = [10, 20, 30, 40];
// arr.splice(2, 0, 25);
// console.log(arr);

// ? ✅ 2. Deletion
// Best case: O(1) (Removing from the end)
// Worst case: O(n) (Removing from the middle or beginning due to shifting)

// let arr = [10, 20, 30, 40];
// arr.splice(2, 1);

// console.log(arr);

// ? ✅ 3. Traversal
// Time Complexity: O(n)
// Method: Using loops or built-in functions

// let arr = [10, 20, 30, 40];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((element) => {
//   console.log(element);
// });

// ? ✅ 4. Searching
// Linear Search (O(n)): For unsorted arrays
// Binary Search (O(log n)): For sorted arrays

// let arr = [10, 20, 30, 40];
// console.log(arr.indexOf(30));
// console.log(arr.includes(50));

// ? ✅ 5. Updating
// Time Complexity: O(1) (Direct update using index)

let arr = [10, 20, 30, 40];
arr[2] = 50;
console.log(arr);
