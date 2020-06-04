/**
 * 17. Letter Combinations of a Phone Number [MEDIUM][Deep first search (DFS)]
 *
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *
 * Example:
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * Note:
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const res = [];
    const prefix = [];

    // if digits is not empty, start recursion by 0th element
    if (digits.length) {
        traverse(0);
    }
    return res;

    function traverse(idx) {
        // Return a new combination
        if (idx === digits.length) {
            return res.push(prefix.join(''));
        }

        // str is letters of given number. F.e. str = "abc" on map[2];
        var str = map[digits[idx]];

        for (var i = 0; i < str.length; i++) {
            // Add parts to a combination
            prefix.push(str[i]);

            // Recursion to find next digit's elements
            traverse(idx + 1);

            // Delete last element because
            // previous recursion had returned a combination
            prefix.pop();
        }
    }
}