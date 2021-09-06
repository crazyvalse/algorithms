/*
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
var mergeKLists = function (lists) {
  if (lists.length === 1) {
    return lists[0]
  }
  const hair = new ListNode(-Infinity, null)
  let n = hair
  for (let i = 0; i < lists.length; i++) {
    n = merge(n, lists[i])
  }
  return hair.next
}

function merge(l, r) {
  const hair = new ListNode()
  let n = hair
  while (l && r) {
    if (l.val > r.val) {
      n.next = r
      r = r.next
    } else {
      n.next = l
      l = l.next
    }
    n = n.next
  }
  n.next = l || r
  return hair.next
}

module.exports = {
  ListNode,
  mergeKLists
}
