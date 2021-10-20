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
 * 归并算法
 * 1. 找 pivot
 * walk()
 * 2. merge
 * 3. 合并两个link
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const { ListNode } = require('../../utils')
const sortList = function (head) {
  if (!head) {
    return head
  }
  const walk = function (c) {
    if (!c || !c.next) {
      return c
    }

    const pivot = findPivot(c)
    const nn = pivot.next
    pivot.next = null
    return merge(walk(nn), walk(c))
  }
  return walk(head)
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

// 找中点
function findPivot(h) {
  const hair = new ListNode(null, h)
  let l = hair
  let r = hair
  while (r && r.next) {
    l = l.next
    r = r.next.next
  }
  return l
}

module.exports.sortList = sortList
