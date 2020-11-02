/**
 * Check Permutation with hashmap: Given two strings, write a method to decide if one is a permutation of the other.
 * Time complexity: O(N). Space complexity: O(1)
 */
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  // Collect str1 characters into a 256-length hashmap
  const hashmap = new Array(256).fill(0)

  for (let i = 0; i < str1.length; i++) {
    hashmap[str1[i].charCodeAt()]++
  }

  // Check str2 characters if they exist in hashmap
  for (let i = 0; i < str2.length; i++) {
    if (hashmap[str2[i].charCodeAt()] === 0) {
      return false
    }
  }

  return true
}

/**
 * USAGE
 */
console.log(checkPermutation("asdf", "fsda"))