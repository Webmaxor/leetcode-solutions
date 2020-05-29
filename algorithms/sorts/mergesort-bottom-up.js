class MergeSortBottomUp {
  constructor (arr) {
    const len = arr.length
    let aux = []

    for (let sz = 1; sz < len; sz = sz + sz) {
      for (let low = 0; low < len - sz; low += sz + sz) {
        this.merge(arr, aux, low, low + sz - 1, Math.min(low + sz + sz - 1, len - 1))
      }
    }

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
}

// sorted = new MergeSortBottomUp("SORTEXAMPLE".split(""))
// console.log(sorted)