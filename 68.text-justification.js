/**
 * 68. Text Justification [HARD][String]
 * Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
 * You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
 * Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
 * For the last line of text, it should be left justified and no extra space is inserted between words.
 *
 * Note:
 * A word is defined as a character sequence consisting of non-space characters only.
 * Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
 * The input array words contains at least one word.
 *
 * Example 1:
 * Input:
 * words = ["This", "is", "an", "example", "of", "text", "justification."]
 * maxWidth = 16
 * Output:
 * [
 *    "This    is    an",
 *    "example  of text",
 *    "justification.  "
 * ]
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const res = [[]];
    res[0].letters = 0;

    for (let word of words) {
        let row = res[res.length - 1];
        if (row.length && row.letters + row.length + word.length > maxWidth) {
            res.push([]);
            row = res[res.length - 1];
            row.letters = 0;
        }
        row.push(word);
        row.letters += word.length;
    }

    for (let r = 0; r < res.length; r++) {
        let row = res[r];
        if (row.length === 1 || r === res.length - 1) {
            res[r] = row.join(' ') + ' '.repeat(maxWidth - row.letters - row.length + 1);
            continue;
        }

        let line = row[0];
        let spaces = maxWidth - row.letters;
        let minSpaces = ' '.repeat(Math.floor(spaces / (row.length - 1)));
        let addSpace = spaces % (row.length - 1);

        for (let w = 1; w < row.length; w++) {
            line += minSpaces + (w <= addSpace ? ' ' : '') + row[w];
        }

        res[r] = line;
    }
    return res;
};