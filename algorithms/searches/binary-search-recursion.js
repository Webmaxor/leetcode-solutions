function binarySearch(arr, phrase) {
  function search(low, high) {
    if (low <= high) {
      let mid = Math.floor(low + (high - low) / 2)

      if (phrase < arr[mid]) {
        return search(low, mid - 1)
      }
      else if (phrase > arr[mid]) {
        return search(mid + 1, high)
      }
      else {
        return mid
      }
    }

    return -1
  }

  return search(0, arr.length - 1);
}

/**
 * USAGE
 */
//const arr = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.split("");
//console.log(binarySearch(arr, 'B'))

const arr = [1,7,9,12,34,64,76,90];
console.log(binarySearch(arr, 90))