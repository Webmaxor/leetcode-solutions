/**
 * Searches the pattern in a string
 * and returns the pattern's first character index
 *
 * @param {String} str
 * @param {String} pattern
 * @returns {Number}
 */
function strSearch(str, pattern) {
  const N = str.length
  const M = pattern.length

  if (!N || !M) {
    return -1
  }

  for (let i = 0; i < N; i++) {
    let j
    for (j = 0; j < M; j++) {
      if (str[i + j] !== pattern[j]) {
        break
      }
    }

    if (j === M) {
      return i
    }
  }
}

/**
 * USAGE
 */
console.log(strSearch("ABACADABRAC", "ABRA"))