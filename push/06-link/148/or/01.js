/*
  给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 选择排序
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null) {
    return head
  }
  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let lastSorted = head,
    curr = head.next
  while (curr !== null) {
    if (lastSorted.val <= curr.val) {
      lastSorted = lastSorted.next
    } else {
      let prev = dummyHead
      while (prev.next.val <= curr.val) {
        prev = prev.next
      }
      lastSorted.next = curr.next
      curr.next = prev.next
      prev.next = curr
    }
    curr = lastSorted.next
  }
  return dummyHead.next
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const p4 = new ListNode(3, undefined)
const p3 = new ListNode(1, p4)
const p2 = new ListNode(2, p3)
const p1 = new ListNode(4, p2)

let iterator = sortList(p1)
const result = []

while (iterator) {
  result.push(iterator.val)
  iterator = iterator.next
}

console.info(result)
