const shuffle = require('../shuffles/knuth-shuffle')

/**
 * Find k-th smallest item
 */
function quickSelect(arr, k) {
  shuffle(arr)

  function partition(arr, left, right) {
    let pivot = arr[left]
    let leftMark = left + 1
    let rightMark = right

    while (true) {
      while (leftMark < right && arr[leftMark] < pivot) {
        leftMark++
      }

      while (rightMark > left && arr[rightMark] > pivot) {
        rightMark--
      }

      if (leftMark >= rightMark) {
        break;
      }
      else {
        [arr[leftMark], arr[rightMark]] = [arr[rightMark], arr[leftMark]]
      }
    }

    [arr[left], arr[rightMark]] = [arr[rightMark], arr[left]]

    return rightMark
  }

  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let split = partition(arr, left, right)

    if (split < k) {
      left = split + 1
    }
    else if (split > k) {
      right = split - 1
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
