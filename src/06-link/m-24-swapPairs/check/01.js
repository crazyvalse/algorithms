/*
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例1：
输入：head = [1,2,3,4]
输出：[2,1,4,3]

示例 2：
输入：head = []
输出：[]

示例 3：
输入：head = [1]
输出：[1]
 */
/**
 * 思路：
 * // 调换 l1 和 l2
 * // 如果没有 l2 的话 就 不作处理
 * 1、定义 pre, l1, l2, next
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var swapPairs = function (head) {
  return reverseKGroup(head, 2)
}

var reverseKGroup = function (head, k = 0) {
  const hair = new ListNode(null, head)
  let length = k === 0 ? 0 : +(getLength(head) / k)
  let p = hair
  while (--length >= 0) {
    p = reverse(p, k)
  }
  return hair.next
}

function getLength(head) {
  let counter = 0
  while (head) {
    counter++
    head = head.next
  }
  return counter
}

function reverse(s, k = 0) {
  let [p, c, n] = [s, s.next, null]
  const np = s.next
  while (c && --k >= 0) {
    n = c.next
    c.next = p
    p = c
    c = n
  }
  if (s && s.next) {
    s.next.next = c
    s.next = p
  }

  return np
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

module.exports = {
  swapPairs,
  ListNode
}
