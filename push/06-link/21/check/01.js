/*
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
 */
/**
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * 合并
 * 1. 停止：
 * l1 === null || l2 === null
 * 2. 返回值 point 返回最小的那个指针
 * l1 === null l2
 * l2 === null l2
 *
 * 3. 方法：返回最小的那个 每一个 判断 l1.val 与 l2.val 之间的大小
 *  if(l1.val < l2.val)
 *  l1 = fn(l1.next, l2)
 *  return l1
 *  else
 *  l2 = fn(l1, l2.next)
 *
 * */
const mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

module.exports = {
  ListNode,
  mergeTwoLists
}
