// my solution
var containsDuplicate = function (nums) {
  const map = new Map();
  let result = false;

  nums.forEach((item, index) => {
    map.set(item, map.get(item) ? map.get(item) + 1 : 1);
  });

  map.forEach((value, key) => {
    console.log(map.get(key));
    if (map.get(key) > 1) {
      result = true;
    }
  });
  return result;
};

console.log("result: ", containsDuplicate([1, 2, 3, 1]));

// easy solution from discussion
// var containsDuplicate = function (nums) {
//   const s = new Set(nums);
//   return s.size !== nums.length;
// };
