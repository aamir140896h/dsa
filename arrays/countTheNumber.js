// const arr = [1, 1, 1, 8, 3, 3, 2, 1, 3, 2];
// const result = arr.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});

// console.log([result]);

// let max = 0;
// let maxElem = null;

// const count = {};
// for (const nums of arr) {
//   count[nums] = (count[nums] || 0) + 1;
//   if (count[nums] > max) {
//     max = count[nums];
//     maxElem = nums;
//   }
// }

// console.log([count], max, [maxElem]);

// //////////////////////////////////////

// const str = "aabcccde";
// const resultChar = [...str].reduce((acc, ch) => {
//   acc[ch] = (acc[ch] || 0) + 1;
//   return acc;
// }, {});

// console.log(resultChar);

// //////////////////////////
// const items = [
//   { type: "fruit", name: "apple" },
//   { type: "fruit", name: "banana" },
//   { type: "veg", name: "carrot" },
// ];

// const grouped = items.reduce((acc, item) => {
//   let key = item.type;
//   acc[key] = acc[key] || [];
//   acc[key].push(item.name);
//   return acc;
// }, []);
// console.log(grouped);

//////////////////////////////////////////////

// const arra = [1, 2, 2, 3, 4, 4, 5];
// const counts = arra.reduce((acc, nums) => {
//   acc[nums] = (acc[nums] || 0) + 1;
//   return acc;
// }, {});

// const unique = Object.keys(counts)
//   .filter((key) => counts[key] === 1)
//   .map(Number);

// console.log(unique);

// const arr = [1, 2, 2, 3, 1];
// const result = arr.reduce((acc, nums) => {
//   if (!acc.includes(nums)) acc.push(nums);
//   return acc;
// }, []);

// console.log(result);

const str = "banana";
const obj = {};
let maxCount = 0;
let maxChar = "";

for (let ch of str) {
  obj[ch] = (obj[ch] || 0) + 1;
  if (obj[ch] > maxCount) {
    maxCount = obj[ch];
    maxChar = ch;
  }
}
console.log(maxChar, maxCount);
