const shuffle = require('../shuffles/knuth-shuffle')

class QuickSort {
  constructor(arr) {
    shuffle(arr)
    this.sort(arr, 0, arr.length - 1)
    return arr
  }

  partition(arr, low, high) {
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

  sort(arr, low, high) {
    if (high <= low) return
    let j = this.partition(arr, low, high)
    this.sort(arr, low, j - 1)
    this.sort(arr, j + 1, high)
  }
}

//const quickSort = new QuickSort("SORTEXAMPLE".split(""))
//console.log(quickSort)