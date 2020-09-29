const shuffle = require('../shuffles/knuth-shuffle')

/**
 * Find k-th smallest item
 */
function quickSelect(arr, k) {
  shuffle(arr)

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

  let low = 0
  let high = arr.length - 1

  while (low < high) {
    let split = partition(arr, low, high)

    if (split < k) {
      low = split + 1
    }
    else if (split > k) {
      high = split - 1
    }
    else {
      return arr[k]
    }
  }

  return arr[k]
}

/**
 * USAGE
 */
// const arr = [3,2,1,5,6,4]
// console.log(quickSelect(arr, 2))
