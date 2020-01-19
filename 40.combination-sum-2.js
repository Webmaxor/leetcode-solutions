/**
 * 40. Combination Sum II [MEDIUM][Backtracking][DFS]
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 *
 * Example 1:
 * Input: candidates = [10,1,2,7,6,1,5], target = 8,
 * A solution set is:
 * [
 *   [1, 7],
 *   [1, 2, 5],
 *   [2, 6],
 *   [1, 1, 6]
 * ]
 *
 * Example 2:
 * Input: candidates = [2,5,2,1,2], target = 5,
 * A solution set is:
 * [
 *   [1,2,2],
 *   [5]
 * ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];

    dfs([],0, 0);
    return result;

    function dfs(current, startIndex, currentSum) {
        if(currentSum == target) {
            current = current.sort((a,b) => a - b);

            result = result.filter((item) => item.join(',') != current.join(','));
            result.push(current);
            return;
        }

        if(currentSum > target) {
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            dfs(current.concat(candidates[i]), i + 1, currentSum + candidates[i]);
        }
    }
};