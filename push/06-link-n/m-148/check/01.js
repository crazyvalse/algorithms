/*
  给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * 1 -> 2 -> 3 -> 4
 */
/**
 * 选择排序
 * 思路：
 * 1. 先选取一个 current
 * 2. 跟 next 做对比，直到找到小的
 * 交给 p.next = current
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let dummyHead = new ListNode(-1)
  let n = dummyHead
  let pm = head
  let c = head

  return head
}

function findMinPre(head) {
  let minPre = new ListNode(-1, head)
  let c = head.next
  while (c) {
    if (minPre.next.val > c.val) {
      minPre.next = c
    }
    c = c.next
  }
  return minPre.next
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const p4 = new ListNode(4, undefined)
const p3 = new ListNode(2, p4)
const p2 = new ListNode(1, p3)
const p1 = new ListNode(3, p2)

console.info(findMinPre(p1))

module.exports.ListNode = ListNode
module.exports.sortList = sortList
