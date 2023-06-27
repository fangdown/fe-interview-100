/**
 * 反转链表
 * 两个指针代表当前和上一个
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let p1 = head;
    let p2 = null;
    while (p1) {
        let temp = p1.next;
        p1.next = p2;
        // 顺序不能反
        p2 = p1;
        p1 = temp;
    }
    return p2;
};

/**
 * 两数相加
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;
    while (p1 || p2) {
        const val1 = p1 ? p1.val : 0;
        const val2 = p2 ? p2.val : 0;
        const val = val1 + val2 + carry;
        //  获取进位
        carry = Math.floor(val / 10);
        // 获取当前值
        p3.next = new ListNode(val % 10);
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
        p3 = p3.next;
    }
    if (carry) {
        p3.next = new ListNode(carry);
    }
    return l3.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/** 删除重复节点
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
    let p = head;

    while (p && p.next) {
        if (p.val === p.next.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
};

/** 141-链表是否有环
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let p1 = head;
    let p2 = head;
    while (p1 && p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        if (p1 === p2) {
            return true;
        }
    }
    return false;
};

// 237. 删除链表中的节点
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
