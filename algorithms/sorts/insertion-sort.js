/**
 * Insertion sort use:
 * Worst case: ~ ¼ N^2 compares and ~ ¼ N^2 exchanges on average
 * Best case (already sorted): N -1 compares and 0 exchanges
 */
function insertionSort(arr = [], order = "asc") {
  const length = arr.length

  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (order === "asc" && arr[j] < arr[j - 1] || order === "desc" && arr[j] > arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
      else {
        break
      }
    }
  }

  return arr
}

/**
 * USAGE
 */
// const strArr = "SORTEXAMPLE".split("")
// console.log(insertionSort(strArr))

// const arr = [1,6,8,2,5,3,8,0,6,3]
// console.log(insertionSort(arr, "desc"))
