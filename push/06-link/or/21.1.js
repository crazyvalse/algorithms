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
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * 1. 针对于链表的问题，需要借助于哑结点 head = ListNode(-1)
 * 2. 返回 head.next
 * */
const mergeTwoLists = function (l1, l2) {
  const head = new ListNode(-1, null)
  let pointer = head
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      pointer.next = l2
      l2 = l2.next
    } else {
      pointer.next = l1
      l1 = l1.next
    }
    pointer = pointer.next
  }
  // 全都遍历完之后，把剩下的接到后面
  pointer.next = l1 === null ? l2 : l1
  return head.next
}

module.exports.ListNode = ListNode
module.exports.mergeTwoLists = mergeTwoLists
