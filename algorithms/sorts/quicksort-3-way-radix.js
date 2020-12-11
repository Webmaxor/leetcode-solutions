/**
 * 3-way radix quicksort
 */
function quickSort3wayRadix(arr) {
  // Helper recursive function
  function sort(arr, left, right, d) {
    if (left >= right) {
      return;
    }

    let lt = left, gt = right
    let vector = charCodeAt(arr[left], d)
    let i = left

    while (i <= gt) {
      let t = charCodeAt(arr[i], d)

      if (t < vector) {
        [arr[lt], arr[i]] = [arr[i], arr[lt]]
        lt++
        i++
      }
      else if (t > vector) {
        [arr[i], arr[gt]] = [arr[gt], arr[i]]
        gt--
      }
      else {
        i++
      }
    }

    sort(arr, left, lt - 1, d)

    if (vector >= 0) {
      sort(arr, lt, gt, d + 1)
    }

    sort(arr, gt + 1, right, d)
  }

  // We need -1 in case string length is not greater than d
  // By this way we can sort variable strings (various length strings)
  function charCodeAt(str, d) {
    if (d < str.length) {
      return str.charCodeAt(d)
    } else {
      return -1
    }
  }

  sort(arr, 0, arr.length - 1, 0)

  return arr
}

/**
 * USAGE
 */
const list = [
  'she',
  'sells',
  'seashells',
  'by',
  'the',
  'sea',
  'shore',
  'the',
  'shells',
  'she',
  'sells',
  'are',
  'surely',
  'seashells'
]
console.log(quickSort3wayRadix(list))