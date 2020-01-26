/**
 * 46. Permutations [MEDIUM][Recursion][Backtracking]
 * Given a collection of distinct integers, return all possible permutations.
 *
 * Example:
 * Input: [1,2,3]
 * Output:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];

    function find(curr, rest) {
        if (!rest.length) return res.push(curr);

        for (let i = 0; i < rest.length; i++) {
            find(
                [...curr, rest[i]],
                [...rest.slice(0, i), ...rest.slice(i + 1)]
            );
        }
    }

    find([], nums);

    return res;
};