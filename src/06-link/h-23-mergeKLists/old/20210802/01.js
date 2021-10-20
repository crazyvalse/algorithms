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
  if (lists.length === 0) {
    return null
  }

  function mergeTwoList(l1, l2) {
    if (!l1) {
      return l2
    }
    if (!l2) {
      return l1
    }
    if (l1.val < l2.val) {
      l1.next = mergeTwoList(l1.next, l2)
      return l1
    } else {
      l2.next = mergeTwoList(l1, l2.next)
      return l2
    }
  }
  let l1 = lists[0]
  for (let i = 1; i < lists.length; i++) {
    l1 = mergeTwoList(l1, lists[i])
  }
  return l1
}

module.exports = {
  ListNode,
  mergeKLists
}
