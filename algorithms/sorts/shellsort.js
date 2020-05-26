/**
 * The worst-case number of compares used by shellsort with the 3x+1 increments is O(N 3/2).
 */
function shellsort(arr) {
  const length = arr.length

  let h = 1
  while (h < length / 3) h = 3*h + 1

  while (h >= 1) {
    for (let i = h; i < length; i++) {
      for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
        [arr[j], arr[j - h]] = [arr[j - h], arr[j]]
      }
    }

    h = Math.trunc(h / 3)
  }

  return arr
}

/**
 * USAGE
 */
// const strArr = "SORTEXAMPLE".split("")
// console.log(shellsort(strArr))

// const arr = [1,6,8,2,5,3,8,0,6,3,22]
// console.log(shellsort(arr, "desc"))