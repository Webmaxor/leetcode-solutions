/**
 * 53. Maximum Subarray [EASY][O(n)][Dynamic Programming]
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0;
    return nums.reduce((max, curr) => {
        sum = curr + (sum > 0 ? sum : 0);
        return Math.max(max, sum);
    }, -Number.MAX_VALUE);
}