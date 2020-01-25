/**
 * 42. Trapping Rain Water [HARD] [O(n)]
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 *
 * Example:
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let ans = 0;

    while (left < right) {
        leftMax = Math.max(height[left], leftMax);

        if (leftMax > height[left]) {
            ans+= (leftMax - height[left]);
        }

        rightMax = Math.max(height[right], rightMax);

        if (rightMax > height[right]) {
            ans += (rightMax - height[right]);
        }

        height[left] < height[right] ? left++ : right--;
    }
    return ans;
};