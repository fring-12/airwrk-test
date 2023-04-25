var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = nums[mid];

    guess === target
      ? (high = mid - 1)
      : guess > target
      ? (high = mid - 1)
      : (low = mid + 1);
  }

  return nums[low] === target ? low : -1;
};

console.log("result", search([-1, 0, 3, 5, 9, 12], 9));
