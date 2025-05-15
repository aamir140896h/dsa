function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disc 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move dissc ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(5, "A", "C", "B");

// ? step 1 : shift `n-1` disc from `A` to `B`, using `C` (when required)
// ? step 2 : shift last disc from `A` to `C`
// ? step 3 : shift n-1 disc from `B` to `C` using `A` (when required)
