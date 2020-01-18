/**
 * 16. 3 Sum closest [MEDIUM]
 *
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
 *
 * Example:
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 *
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) {
        return 0;
    }

    let closest = null;
    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i];
        let start = i + 1;

        while (start < nums.length - 1) {
            let end = nums.length - 1;

            while (start < end) {
                let b = nums[start];
                let c = nums[end];
                let sum = a + b + c;

                if (sum == target) {
                    return sum;
                }
                else if (closest === null || Math.abs(target - sum) < Math.abs(target - closest)) {
                    closest = sum;
                }

                end--;
            }

            start++;
        }
    }

    return closest;
};