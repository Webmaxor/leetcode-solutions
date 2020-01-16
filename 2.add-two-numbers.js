/**
 * 2. Add two numbers [MEDIUM][Linked Lists]
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }

    if (l2 === null) {
        return l1;
    }

    let numbers = ['', ''], currentNode;

    [l1, l2].forEach((item, index) => {
        currentNode = item;

        while (currentNode !== null) {
            numbers[index] += currentNode.val;
            currentNode = currentNode.next;

        }

        numbers[index] = numbers[index].split('').reverse().join('');
    });

    let newListSource = (BigInt(numbers[0]) + BigInt(numbers[1])).toString().split('').reverse();

    let head = null;

    newListSource.forEach((item, index) => {
        let newNode = new ListNode(item);

        if (!head) {
            head = newNode;

        }
        else {
            let tail = head;
            while(tail.next !== null) {
                tail = tail.next;
            }

            tail.next = newNode;
        }
    });

    return head;
};
