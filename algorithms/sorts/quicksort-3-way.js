/**
 * Dijkstra's 3-way partitioning algorithm. (Dutch National Flag)
 */
function quickSort3way(arr) {
  function sort(arr, left, right) {
    if (left >= right) {
      return;
    }

    let lt = left, gt = right
    let vector = arr[left]
    let i = left

    while (i <= gt) {
      if (arr[i] < vector) {
        [arr[lt], arr[i]] = [arr[i], arr[lt]]
        lt++
        i++
      }
      else if (arr[i] > vector) {
        [arr[i], arr[gt]] = [arr[gt], arr[i]]
        gt--
      }
      else {
        i++
      }
    }

    sort(arr, left, lt - 1)
    sort(arr, gt + 1, right)
  }

  sort(arr, 0, arr.length - 1)

  return arr
}

/**
 * USAGE
 */
// console.log(quickSort3way([0,1,2,1,1,2,2,0,1,0,0]))