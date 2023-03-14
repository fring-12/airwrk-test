// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let remain = target - nums[i];
    if (map.get(remain) !== undefined) {
      return [map.get(remain), i];
    }
    map.set(nums[i], i);
  }
};

console.log("result: ", twoSum([2, 7, 11, 15], 9));
