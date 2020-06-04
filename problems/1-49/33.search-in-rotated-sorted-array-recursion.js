/**
 * 33. Search in Rotated Sorted Array [MEDIUM]
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 *
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * You may assume no duplicate exists in the array.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * Example 1:
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 *
 * Example 2:
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return searchIndex(nums, target, 0, nums.length - 1);
};

function searchIndex(nums, target, start, end) {
    if (start >= end) {
         if (nums[end] == target) {
            return end;
         } else {
             return -1;
         }
    }

    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] == target) {
        return mid;
    } else if ((nums[mid] > nums[start] && nums[mid] > target && target >= nums[start]) ||
               (nums[mid] < nums[start] && !(target > nums[mid] && target <= nums[end]))){
        return searchIndex(nums, target, start, mid);
    } else {
        return searchIndex(nums, target, mid + 1, end);
    }
}