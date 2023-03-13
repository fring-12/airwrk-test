// Given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct.


var containsDuplicate = function (nums) {
  let set = new Set(nums)

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === set)

  }

  return true

};


console.log("result: ", containsDuplicate([1, 2, 3, 1]));
