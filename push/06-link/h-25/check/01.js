/*
给你一个链表，每k个节点一组进行翻转，请你返回翻转后的链表。
k是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是k的整数倍，那么请将最后剩余的节点保持原有顺序。

示例1：
输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]

示例2：
输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]

示例3：
输入：head = [1,2,3,4,5], k = 1
输出：[1,2,3,4,5]

示例4：
输入：head = [1], k = 1
输出：[1]

进阶：

你可以设计一个只使用常数额外空间的算法来解决此问题吗？
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 1. 取 k 个节点
 * 2. 反转 0 ... k 个节点
 *
 * 1. 停止的条件： while counter < k
 * 2. 返回什么？ head
 * 3. 每一个场景 逆序
 *
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
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
  reverseKGroup,
  reverse,
  ListNode
}
