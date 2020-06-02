function quickSelect(arr, low, high, k) {
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

  if (m > k) {
    return quickSelect(arr, i + 1, high, k)
  }

  return quickSelect(arr, low, i - 1, k - m)
}

/**
 * USAGE
 */
// const arr = [1,6,3,8,4,2,16,31,26,18]
// console.log(quickSelect(arr, 0, arr.length - 1, 5))
