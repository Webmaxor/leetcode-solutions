/**
 * 56. Merge Intervals [MEDIUM][O(n)][Sort]
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * Example 1:
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 *
 * Example 2:
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length - 1; i++) {
        const end = Math.max(...intervals[i]);
        const nextStart = Math.min(...intervals[i + 1]);
        const nextEnd = Math.max(...intervals[i + 1]);

        if (end >= nextStart) {
            intervals.splice(i + 1, 1);
            intervals[i][1] = end >= nextEnd ? end : nextEnd;
            i--;
        }
    }

    return intervals;
};