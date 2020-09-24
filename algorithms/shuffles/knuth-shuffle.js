/**
 * Shuffle use N time
 */
function knuthShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

module.exports = knuthShuffle

/**
 * USAGE
 */
// const arr = [0,1,2,3,4,5,6,7,8,9]
// knuthShuffle(arr)
// console.log(arr)