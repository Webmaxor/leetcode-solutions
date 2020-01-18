/**
 * 15. 3 Sum [MEDIUM]
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let number = [];

    if (nums.length < 3) {
        return number;
    }

    nums = nums.sort(function(a, b) {
        return a - b;
	});

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            return number;
        }

        if (i > 0 && nums[i] == nums[i-1]) {
            continue;
        }

        let a = nums[i];

        let start = i + 1;
        let end = nums.length - 1;

        while (start < end) {
            let b = nums[start];
            let c = nums[end];

            let sum = a + b + c;

            if (sum === 0) {
                number.push([a, b, c]);
                start++;
                end--;

                while (b == nums[start]) {
                    start++;
                }

                while (c == nums[end]) {
                    end--;
                }
            }
            else if (sum > 0) {
                end--;
            }
            else {
                start++;
            }
        }
    }

    return number;
};