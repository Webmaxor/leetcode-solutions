/**
 * 4. Median of 2 sorted arrays [HARD][O(n)]

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
var findMedianSortedArrays = function(nums1, nums2) {
  let merged = nums1.concat(nums2).sort((a, b) => (a - b));

  let half = Math.floor(merged.length / 2);

  if (merged.length%2) {
      return merged[half];
  }

  return (merged[half - 1] + merged[half]) / 2;
};
