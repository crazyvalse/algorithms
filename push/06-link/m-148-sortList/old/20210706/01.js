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
 * 归并排序
 * 1. 找到中点 pivot
 * 2. sortList
 * 3. merge
 * @param {ListNode} head
 * @return {ListNode}
 */
const { ListNode } = require('../../utils')
var sortList = function (head) {
  const walk = function (h) {
    if (!h || !h.next) {
      return h
    }
    // 拆分成两个
    const pivot = findPivot(h)
    const r = pivot.next
    pivot.next = null

    // 把两个链表合成一个
    return merge(walk(h), walk(r))
  }
  return walk(head)
}

/**
 * 参考 21mergeTwoLists
 * @param l
 * @param r
 * @returns {*}
 */
function merge(l, r) {
  const hair = new ListNode(null, null)
  let next = hair
  while (l && r) {
    if (l.val < r.val) {
      next.next = l
      l = l.next
    } else {
      next.next = r
      r = r.next
    }
    next = next.next
  }
  next.next = l || r
  return hair.next
}

/**
 * 寻找中间点
 * [1, 2, 3, 4, 5, 6] pivot = 3
 * [1, 2, 3, 4, 5] pivot = 3
 * @param head
 * @returns {ListNode}
 */
function findPivot(head) {
  const hair = new ListNode(null, head)
  let l = hair
  let r = hair
  while (r && r.next) {
    l = l.next
    r = r.next.next
  }
  return l
}

module.exports.sortList = sortList
module.exports.findPivot = findPivot
module.exports.merge = merge
