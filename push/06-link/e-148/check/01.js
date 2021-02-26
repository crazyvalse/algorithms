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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let dummyHead = new ListNode(-1, head)
  let minPre = dummyHead
  let current = head

  return head
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const p4 = new ListNode(4, undefined)
const p3 = new ListNode(3, p4)
const p2 = new ListNode(2, p3)
const p1 = new ListNode(1, p2)

// let iterator = sortList(p1)

swap(p1, p2, p3)
let iterator = p1

const result = []
while (iterator) {
  result.push(iterator.val)
  iterator = iterator.next
}

console.info(result)

module.exports.ListNode = ListNode
module.exports.sortList = sortList
