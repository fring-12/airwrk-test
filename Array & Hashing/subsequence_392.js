/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  const map = new Map();
  let prevIndex = -1; // Initialize previous index to -1

  // Populate the map with indices of characters in t
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!map.has(char)) {
      map.set(char, []);
    }
    map.get(char).push(i);
  }

  // Check if characters in s appear in t in the same order
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!map.has(char)) {
      return false; // Character not found in t
    }
    const indices = map.get(char);
    // Find the smallest index greater than the previous index
    let index = indices.find((index) => index > prevIndex);
    if (index === undefined) {
      return false; // No valid index found
    }
    prevIndex = index; // Update previous index
  }
  return true; // All characters in s found in t in the same order
};

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false (Order not sequential)
console.log(isSubsequence("abc", "ahbbgdac")); // false (Character not found)

console.log(isSubsequence("abc", "ahbgdc"));
