const longestCommonPrefix = (strs) => {
  let prefix = strs[0];
  let prefixLen = prefix.length;

  for (let index = 1; index < strs.length; index++) {
    let s = strs[index];
    while (prefix !== s.substring(0, prefixLen)) {
      prefixLen--;
      if (prefixLen === 0) {
        return "";
      }
      prefix = prefix.substring(0, prefixLen);
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
