/**
 * 57. Insert Interval [HARD][O(n)][Sort]
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
 * You may assume that the intervals were initially sorted according to their start times.
 *
 * Example 1:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 * Example 2:
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
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