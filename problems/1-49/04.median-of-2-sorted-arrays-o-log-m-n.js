/**
 * 4. Median of 2 sorted arrays [HARD][O(log(m+n))]

 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.

 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0

 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const [small, large] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];
  const [x, y] = [small.length, large.length];

  let low = 0, high = x

  while(low <= high) {
    const partitionX = Math.floor((high + low) / 2)
    const partitionY = Math.floor((x + y + 1) / 2) - partitionX

    const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : small[partitionX - 1]
    const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : large[partitionY - 1]

    const minX = partitionX == x ? Number.POSITIVE_INFINITY : small[partitionX]
    const minY = partitionY == y ? Number.POSITIVE_INFINITY : large[partitionY]

    if (maxX <= minY && maxY <= minX) {
      const lowMax = Math.max(maxX, maxY)

      if((x + y) % 2 == 1) {
        return lowMax
      }

      return (lowMax + Math.min(minX, minY)) / 2
    } else if (maxX < minY) {
      low = partitionX + 1
    } else {
      high = partitionX - 1
    }
  }
}

/**
 * USAGE
 */
console.log(findMedianSortedArrays([4, 20, 32, 50, 55, 61], [1, 15, 22, 30, 70]))