/**
 * Find k-th largest item
 */
function quickSelect(arr, low, high, k) {
  while (true) {
    for (var i = low, j = low; j < high; j++) {
      if (arr[j] <= arr[high]) {
        if (i !== j) {
          [arr[i], arr[j]] = [arr[j], arr[i]]
        }

        i++
      }
    }

    [arr[i], arr[j]] = [arr[j], arr[i]]

    const m = high - i + 1

    if (m === k) {
      return arr[i]
    }
    else if (m > k) {
      low = i + 1
    }
    else {
      high = i - 1
      k = k - m
    }
  }
}

/**
 * USAGE
 */
// const arr = [3,2,1,5,6,4]
// console.log(quickSelect(arr, 0, arr.length - 1, 2))
