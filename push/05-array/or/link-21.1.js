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
/*
1. 先合并
2. 排序
 */
var mergeTwoLists = function (l1, l2) {
  let last = l1
  while (last.next) {
    last = last.next
  }
  last.next = l2
  // 主要是换值
  const swap = function (a, b) {
    ;[a.val, b.val] = [b.val, a.val]
  }
  // 2. 排序 - 选择排序
  const sort = (link) => {
    let now = link
    let next = null
    while (now !== null) {
      next = now.next
      while (next !== null) {
        if (next.val < now.val) {
          swap(next, now)
        }
        next = next.next
      }
      now = now.next
    }
    return link
  }
  return sort(l1)
}
const p3 = new ListNode(4, undefined)
const p2 = new ListNode(2, p3)
const p1 = new ListNode(1, p2)

const p6 = new ListNode(4, undefined)
const p5 = new ListNode(3, p6)
const p4 = new ListNode(1, p5)

console.info(mergeTwoLists(p1, p4))
