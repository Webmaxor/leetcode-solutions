/**
 * Shuffle use N time
 */
function knuthShuffle(arr = []) {
  for (let i = 1; i < arr.length; i++) {
    const r = Math.floor(Math.random() * Math.floor(i + 1))
    const tmp = arr[i]
    arr[i] = arr[r]
    arr[r] = tmp
  }

  return arr
}

/**
 * USAGE
 */
const arr = [0,1,2,3,4,5,6,7,8,9]
console.log(knuthShuffle(arr))
