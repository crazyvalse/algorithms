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
 * 给一个 假的跟节点 hair
 * 然后从两个列表中获取下一个节点 结束之后 把剩下的那个节点接上
 * */
const mergeTwoLists = function (l1, l2) {
  const hair = new ListNode()
  let next = hair
  while (l1 && l2) {
    if (l1.val > l2.val) {
      next.next = l2
      l2 = l2.next
    } else {
      next.next = l1
      l1 = l1.next
    }
    next = next.next
  }
  next.next = l1 || l2
  return hair.next
}

module.exports = {
  ListNode,
  mergeTwoLists
}
