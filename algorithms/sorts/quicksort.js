const shuffle = require('../shuffles/knuth-shuffle')

function quickSort(arr) {
  function partition(arr, low, high) {
    let i = low, j = high + 1

    while (true) {
      while (arr[low] > arr[++i]) {
        if (i == high) break;
      }

      while (arr[low] < arr[--j]) {
        if (j == low) break
      }

      if (i >= j) break;
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    [arr[low], arr[j]] = [arr[j], arr[low]]

    return j
  }

  function sort(arr, low, high) {
    if (high <= low) return
    let j = partition(arr, low, high)
    sort(arr, low, j - 1)
    sort(arr, j + 1, high)
  }

  shuffle(arr)
  sort(arr, 0, arr.length - 1)
  return arr
}

// console.log(quickSort("SORTEXAMPLE".split("")))