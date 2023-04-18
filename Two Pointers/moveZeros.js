var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(nums.indexOf(nums[i]), 1);
      nums.push(0);
    }
  }
  return nums;
};

console.log("result", moveZeroes([0, 1, 0, 3, 12]));
