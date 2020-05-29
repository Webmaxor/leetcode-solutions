class MergeSort {
  constructor (arr) {
    let aux = []
    this.sort(arr, aux, 0, arr.length - 1)
    return arr
  }

  merge(arr, aux, low, mid, high) {
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

  sort(arr, aux, low, high) {
    if (high <= low) {
      return;
    }

    const mid = low + Math.trunc((high - low) / 2)

    this.sort(arr, aux, low, mid)
    this.sort(arr, aux, mid + 1, high)

    this.merge(arr, aux, low, mid, high)
  }
}

//sorted = new MergeSort("SORTEXAMPLE".split(""))
//console.log(sorted)