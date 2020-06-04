/**
 * 47. Permutations II [MEDIUM][Recursion][Dynamic programming]
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 *
 * Example:
 * Input: [1,1,2]
 * Output:
 * [
 *   [1,1,2],
 *   [1,2,1],
 *   [2,1,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums, n = 0) {
    if (n >= nums.length) return [[]];

    const res = [];
    const prevs = permuteUnique(nums, n + 1);

    for (let prev of prevs) {
        for (let i = 0; i <= prev.length; i++) {
            let p = prev.slice(0);
            p.splice(i, 0, nums[n]);

            if (!res.some((item) => item.join() == p.join())) {
                res.push(p);
            }
        }
    }

    return res;
};