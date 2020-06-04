/**
 * 65. Valid Number [HARD][String]
 * Validate if a given string can be interpreted as a decimal number.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return (Number(s) === 0 || !!Number(s)) && (s.trim() !== "");
};