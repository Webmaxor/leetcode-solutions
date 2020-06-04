/**
 * 18. [MEDIUM] 4 Sum
 * Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 *
 * Note: The solution set must not contain duplicate quadruplets.
 *
 * Example:
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * A solution set is:
 * [
 *   [-1,  0, 0, 1],
 *   [-2, -1, 1, 2],
 *   [-2,  0, 0, 2]
 * ]
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let number = [];

  if (nums.length < 4) {
      return number;
  }

  nums = nums.sort(function(a, b) {
      return a - b;
});

  for (let i = 0; i < nums.length; i++) {
      let a = nums[i];

      for (let j = i + 1; j < nums.length; j++) {
          let b = nums[j];

          let start = j + 1;
          let end = nums.length - 1;

          while (start < end) {
              let c = nums[start];
              let d = nums[end];

              let sum = a + b + c + d;

              if (sum === target) {
                  number.push([a, b, c, d]);
                  start++;
                  end--;

                  while (c == nums[start]) {
                      start++;
                  }

                  while (d == nums[end]) {
                      end--;
                  }
              }
              else if (sum > target) {
                  end--;
              }
              else {
                  start++;
              }
          }

          while(j + 1 < nums.length && nums[j + 1] === nums[j]) ++j
      }

      while(i + 1 < nums.length && nums[i + 1] === nums[i]) ++i;
  }

  return number;
};