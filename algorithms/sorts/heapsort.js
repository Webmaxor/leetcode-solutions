function heapSort(arr) {
  if (arr.length) {
    // Build a heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapify(i, arr.length)
    }

    // Sort it
    for (let i = arr.length - 1; i > 0; i--) {
      swap(0, i)
      heapify(0, i)
    }
  }

  function heapify(index, len) {
    let max = index
    const left = 2 * index + 1
    const right = 2 * index + 2

    if (left < len && arr[left] > arr[max]) {
      max = left
    }

    if (right < len && arr[right] > arr[max]) {
      max = right
    }

    if (max != index) {
      swap(max, index)
      heapify(max, len)
    }
  }

  function swap(a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }

  return arr
}

console.log(heapSort("SORTEXAMPLE".split("")))