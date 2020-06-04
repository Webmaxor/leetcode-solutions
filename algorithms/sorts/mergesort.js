function mergeSort(arr) {
  function merge(arr, aux, low, mid, high) {
    aux = [...arr]

    let i = low, j = mid + 1

    for (let k = low; k <= high; k++) {
      if (i > mid) {
        arr[k] = aux[j++]
      }
      else if (j > high) {
        arr[k] = aux[i++]
      }
      else if (aux[j] < aux[i]) {
        arr[k] = aux[j++]
      }
      else {
        arr[k] = aux[i++]
      }
    }
  }

  function sort(arr, aux, low, high) {
    if (high <= low) {
      return;
    }

    const mid = low + Math.trunc((high - low) / 2)

    sort(arr, aux, low, mid)
    sort(arr, aux, mid + 1, high)

    merge(arr, aux, low, mid, high)
  }

  let aux = []
  sort(arr, aux, 0, arr.length - 1)
  return arr
}

module.exports = mergeSort

// console.log(mergeSort("SORTEXAMPLE".split("")))