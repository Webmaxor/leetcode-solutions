/**
 * Selection sort uses (N– 1) + (N– 2) + ... + 1 + 0 ~ N^2 / 2 compares and O(1) exchanges.
 */
function selectionSort(arr = [], order = "asc") {
  const length = arr.length

  for (let i = 0; i < length - 1; i++) {
    let min = i

    for (let j = i + 1; j < length; j++) {
      if (order === "asc" && arr[min] > arr[j] || order === "desc" && arr[min] < arr[j]) {
        min = j
      }
    }

    [arr[i], arr[min]] = [arr[min], arr[i]]
  }

  return arr;
}


/**
 * USAGE
 */
// const strArr = "SORTEXAMPLE".split("")
// console.log(selectionSort(strArr))

// const arr = [1,6,8,2,5,3,8,0,6,3]
// console.log(selectionSort(arr, "desc"))
