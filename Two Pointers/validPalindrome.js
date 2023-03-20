var isPalindrome = function (s) {
  if (s.length === 0) return false;
  let validstring = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  let reverseString = "";
  for (let i = validstring.length - 1; i >= 0; i--) {
    reverseString += validstring[i];
  }
  return reverseString === validstring;
};

console.log("result: ", isPalindrome("ab_a"));
