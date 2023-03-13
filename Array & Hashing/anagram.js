// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//An Anagram is a word or phrase formed by rearranging the letters of a different
//word or phrase, typically using all the original letters exactly once.
var isAnagram = function (s, t) {
  const myMap = new Map();
  const tmap = new Map();

  for (const char of s) {
    const count = myMap.get(char) || 0;
    myMap.set(char, count + 1);
  }

  for (const char of t) {
    const count = tmap.get(char) || 0;
    tmap.set(char, count + 1);
  }

  if (myMap.size !== tmap.size) {
    return false;
  }

  for (const [key, value] of myMap) {
    if (!tmap.has(key) || tmap.get(key) !== value) {
      return false;
    }
  }

  return true;
};

console.log("result: ", isAnagram("anagram", "nagaram"));
