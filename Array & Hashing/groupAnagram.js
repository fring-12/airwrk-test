var groupAnagrams = function (strs) {
  let result = {};
  for (let s of strs) {
    let key = s.split("").sort().join("");
    if (result[key]) {
      result[key].push(s);
    } else {
      result[key] = [s];
    }
  }
  console.log(Object.values(result));

  return Object.values(result);
};

console.log(
  "result :",
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);
