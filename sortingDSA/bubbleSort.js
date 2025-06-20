// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }

function bubbleSort(arr) {
  for (let i = arr.length; i >= 0; i--) {
    let disSwap = 0;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        // disSwap = 1;
      }
    }
    // if (disSwap === 0) {
    //   break;
    // }
    // console.log("numm");
  }
  return arr;
}

const arr = [8, 20, -2, 4, -8];
// const arr = [1, 2, 3, 4, 5, 6];
// const arr = [6, 5, 4, 3, 2, 1];

console.log(bubbleSort(arr));

// time complexcity  O(n^2)
