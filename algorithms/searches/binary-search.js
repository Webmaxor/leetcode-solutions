function binarySearch(arr, phrase) {
  let low = 0, high = arr.length - 1

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2)

    if (phrase < arr[mid]) {
      high = mid - 1
    }
    else if (phrase > arr[mid]) {
      low = mid + 1
    }
    else if (phrase === arr[mid]) {
      return mid
    }
  }

  return -1
}

/**
 * USAGE
 */
//const arr = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.split("");
//console.log(binarySearch(arr, 'B'))

const arr = [1,7,9,12,34,64,76,90];
console.log(binarySearch(arr, 76))