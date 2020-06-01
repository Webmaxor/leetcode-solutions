function quickSort(arr) {
  if (arr.length < 2) return arr
  let pivot = arr[0], left = [], right = []

  for (i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    }
    else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(pivot, quickSort(right))
}

//console.log(quickSort("SORTEXAMPLE".split("")))