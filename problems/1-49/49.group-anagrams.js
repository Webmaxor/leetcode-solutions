/**
 * 49. Group anagrams [MEDIUM][HashTable]
 * Given an array of strings, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 *
 * Note:
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let group = {};

    for (let i = 0; i < strs.length; i++) {
        let current = [...strs[i]].sort().join("");

        if (!group[current]) {
            group[current] = [];
        }

        group[current].push(strs[i]);
    }

    return Object.values(group);
};